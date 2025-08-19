import React from 'react'

interface Props {
  title?: string
  message?: string
  icon: React.ReactNode
}

export const ToastCard: React.FC<Props> = ({ title, message, icon }) => {
  return (
    <div className='p-6 bg-white rounded-3xl shadow-md inline-flex flex-col justify-start items-start gap-6'>
      <div className='inline-flex justify-center items-center gap-6'>
        {icon}
        <div className='inline-flex flex-col justify-center items-start gap-[5px]'>
          <div className="justify-start text-stone-800 text-2xl font-semibold font-['Outfit']">
            {title}
          </div>
          <div className="justify-start text-c1 text-sm font-normal font-['Lexend']">{message}</div>
        </div>
      </div>
    </div>
  )
}
