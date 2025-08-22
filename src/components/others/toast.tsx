'use client'

import { toast as _toast } from 'sonner'

export const toast = ({
  variant = 'success',
  message,
}: // title,
{
  variant: 'success' | 'error' | 'info' | 'custom'
  message: string
  title?: string
  isLoading?: boolean
}) => {
  switch (variant) {
    case 'success':
      _toast.message(message, {
        style: {
          backgroundColor: '#befbb3',
          color: '#033209CC',
        },
      })
      // _toast.custom(() => (
      //   <ToastCard icon={<IconCheckCircle className='size-16' />} title={title} message={message} />
      // ))
      break
    case 'error':
      _toast.message(message || 'Something went wrong', {
        className: '!bg-red-500 !text-white',
      })
      // _toast.custom(() => (
      //   <ToastCard
      //     icon={<IconClosekCircle className='size-16' />}
      //     title={title}
      //     message={message || 'Something went wrong'}
      //   />
      // ))

      break
    case 'info':
      _toast.message(message, {
        style: {
          backgroundColor: '#befbb3',
          color: '#033209CC',
        },
      })
      break
  }
}
