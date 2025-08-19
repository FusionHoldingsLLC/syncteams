'use client'

import { toast as _toast } from 'sonner'
import { IconCheckCircle } from '../../../public/assets/svgs/icon-check-circle'
import { IconCloseCircle } from '../../../public/assets/svgs/icon-close-circle'
import { ToastCard } from '../cards/toast-card'

export const toast = ({
  variant = 'success',
  message,
  title,
}: {
  variant: 'success' | 'error' | 'info' | 'custom'
  message: string
  title?: string
  isLoading?: boolean
}) => {
  switch (variant) {
    case 'success':
      _toast.custom(() => (
        <ToastCard icon={<IconCheckCircle className='size-16' />} title={title} message={message} />
      ))
      break
    case 'error':
      _toast.custom(() => (
        <ToastCard
          icon={<IconCloseCircle className='size-16' />}
          title={title}
          message={message || 'Something went wrong'}
        />
      ))

      break
    case 'info':
      _toast.message(message, {
        style: {
          backgroundColor: '#0e5a8a',
          color: '#fff',
        },
      })
      break
  }
}
