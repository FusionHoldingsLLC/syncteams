import { IconSearch } from '@/public/assets/svgs/icon-search'
import { TextInput } from '@mantine/core'

export const AppSearch = () => {
  return (
    <TextInput
      className='min-w-[15rem] border-primary'
      classNames={{
        input: '!text-xs',
      }}
      leftSection={<IconSearch className='size-4' />}
      size='xs'
      placeholder='Search username or email'
    />
  )
}
