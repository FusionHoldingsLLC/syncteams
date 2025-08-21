import { Avatar, Box, Button, Flex } from '@mantine/core'

export const DetailsHeader = () => {
  return (
    <Box className=' px-3 py-3.5 secondary-bg  rounded-lg inline-flex flex-col justify-between items-center overflow-hidden'>
      <Box className='self-stretch flex-wrap gap-4 px-1 inline-flex justify-between items-center'>
        <div className='flex  justify-start flex-wrap items-center gap-5'>
          <Avatar className='user-detail-header-avatar'>MK</Avatar>
          <div className='inline-flex flex-col justify-center items-start gap-3'>
            <p className='justify-start font-bonn text-black text-base !font-[700] '>Jane Doe</p>
            <div className='justify-start text-greyed text-xs font-medium font-geist'>
              janedoe@gmail.com
            </div>
            <div className='inline-flex flex-wrap justify-start items-start gap-4'>
              <div className='px-3 py-1 bg-green-700/10 rounded-xl flex justify-center items-center gap-2.5'>
                <div className='justify-start text-green-700 text-xs font-medium font-geist'>
                  Active
                </div>
              </div>
              <div className='px-3 py-1 bg-blue-700/10 rounded-xl flex justify-center items-center gap-2.5'>
                <div className='justify-start text-blue-700 text-xs font-medium font-geist'>
                  Pro Plan
                </div>
              </div>
              <div className='px-3 py-1 bg-zinc-700/10 rounded-xl flex justify-center items-center gap-2.5'>
                <div className='w-20 justify-start text-zinc-700 text-xs font-medium font-geist'>
                  09/03/2025
                </div>
              </div>
            </div>
            <div className='justify-start text-greyed text-xs font-medium font-geist'>
              Last log in: March 15, 7:25p m
            </div>
          </div>
        </div>
        <Flex className='justify-center flex-wrap items-center gap-5'>
          <Button className='user-detail-header-btn'>Message</Button>
          <Button variant='outline' className='user-detail-header-btn'>
            Edit Profile
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
