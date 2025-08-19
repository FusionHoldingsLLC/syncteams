import { FloatingIndicator, Tabs } from '@mantine/core'
import { useState } from 'react'
import { SectionItem } from 'src/types/general'

interface Props {
  tabList: SectionItem[]
}

export const AppTabs: React.FC<Props> = ({ tabList }) => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null)
  const [value, setValue] = useState<string | null>(tabList[0].value)
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({})
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node
    setControlsRefs(controlsRefs)
  }

  return (
    <>
      <Tabs
        orientation='horizontal'
        variant='none'
        defaultValue={tabList[0].value}
        value={value}
        onChange={setValue}
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
            target={value ? controlsRefs[value] : null}
            parent={rootRef}
            className={'indicator'}
          />
        </Tabs.List>
      </Tabs>
    </>
  )
}
