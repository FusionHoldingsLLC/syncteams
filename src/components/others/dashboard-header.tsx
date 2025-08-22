import { IconLeftLong } from '@/public/assets/svgs/icom-arrow-left-long'
import { Button, Flex, Text } from '@mantine/core'
import { useParams, useRouter } from 'next/navigation'

interface Props {
  title?: string
  description?: string
  rightSection?: React.ReactNode
  prevRoute?: string
}

export const DashboardHeader: React.FC<Props> = ({
  title,
  prevRoute,
  description,
  rightSection,
}) => {
  const params = useParams()
  const router = useRouter()

  const slug = params?.slug // Get the slug from the URL

  return (
    <>
      <Flex className=' md:sticky z-20 flex-wrap gap-4  justify-between pt-16 md:pt-8 pb-2 -top-[1.7rem] primary-background h-fit  '>
        <Flex className='flex-col'>
          <Text className='page-title text-header !mb-1'>{title}</Text>
          <Text className='page-des text-body-medium'>{description}</Text>
        </Flex>

        {rightSection && rightSection}
      </Flex>

      {slug && (
        <Flex>
          <Button
            leftSection={<IconLeftLong />}
            variant='subtle'
            onClick={() => (prevRoute ? router.push(prevRoute) : router.back())}
            className={`arrow-btn hover:!scale-100  !px-1 !py-0 flex items-center !gap-[1px] `}
          >
            Back to Users
          </Button>
        </Flex>
      )}
    </>
  )
}
