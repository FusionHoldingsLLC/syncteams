import { IconArrowLeft } from '@/public/assets/svgs/icon-arrow-left'
import { IconRightFlatArrow } from '@/public/assets/svgs/icon-right-flat-arrow'
import { Button, Center, Flex, Pagination, Paper } from '@mantine/core'
import { useState } from 'react'

export const AppPagination = () => {
  const [value, setValue] = useState(1)

  const total = 10

  return (
    <Paper className=' sticky bottom-0 z-30 p-5 '>
      <Center className='justify-center gap-2 items-center   !w-full '>
        <Button
          disabled={Boolean(value === 1)}
          className='custom-pagination-btn group '
          variant='subtle'
          leftSection={
            <IconArrowLeft className='stroke-47gray size-4 dark:stroke-white group-hover:stroke-primary' />
          }
          onClick={() => setValue(value - 1)}
        >
          {' '}
          Previous
        </Button>

        <Pagination.Root
          siblings={1}
          classNames={{
            control: 'custom-pagination-control ',
          }}
          value={value}
          onChange={setValue}
          total={total}
        >
          <Flex className='gap-3'>
            <Pagination.Items />
          </Flex>
        </Pagination.Root>

        <Button
          disabled={Boolean(value === total)}
          className='custom-pagination-btn group'
          variant='subtle'
          rightSection={<IconRightFlatArrow className='stroke-47gray dark:stroke-white' />}
          onClick={() => setValue(value + 1)}
        >
          {' '}
          Next
        </Button>
      </Center>
    </Paper>
  )
}
