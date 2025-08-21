import { FloatingIndicator, ScrollArea, Tabs, Transition } from '@mantine/core'
import { useMemo, useState } from 'react'
import { useQueryParams } from 'src/hooks/logic/use-query-params'
import { SectionItem } from 'src/types/general'

interface Props {
  tabList: SectionItem[]
  customClassName?: string
  value?: string
  onChange?: (val: string) => void
  disableParams?: boolean
}

export const AppTabs: React.FC<Props> = ({
  tabList,
  value,
  customClassName,
  disableParams,
  onChange,
}) => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null)
  const [tabValue, setTabValue] = useState<string | null>(tabList[0].value)
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({})
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node
    setControlsRefs(controlsRefs)
  }

  const { setParam } = useQueryParams()

  const handleChange = (val: string) => {
    onChange?.(val as string)
    setTabValue(val)
    if (!disableParams) {
      setParam('t', val)
    }
  }

  const testValue = useMemo(() => {
    return tabValue
  }, [value, tabValue])

  return (
    <>
      <ScrollArea scrollbarSize={1} className={`${customClassName} overflow-scroll`}>
        <Tabs
          orientation='horizontal'
          variant='none'
          defaultValue={tabList[0].value}
          value={testValue}
          onChange={(val) => {
            handleChange(val as string)
          }}
        >
          <Tabs.List ref={setRootRef} className={'list'}>
            {tabList.map((item) => {
              return (
                <Tabs.Tab
                  key={item.value}
                  value={item.value}
                  ref={setControlRef(item.value)}
                  className={'tab'}
                >
                  {item.label}
                </Tabs.Tab>
              )
            })}

            <FloatingIndicator
              target={testValue ? controlsRefs[testValue] : null}
              parent={rootRef}
              className={'indicator'}
            />
          </Tabs.List>
        </Tabs>
      </ScrollArea>

      {tabList.length > 0 &&
        tabList?.map((item) => {
          return (
            <Transition
              key={item.label}
              mounted={Boolean(testValue === item?.value)}
              transition='fade-right'
              duration={300}
              exitDuration={200}
              enterDelay={300}
              exitDelay={300}
              timingFunction='ease'
            >
              {(styles) => <div style={styles}>{item?.component}</div>}
            </Transition>
          )
        })}
    </>
  )
}
