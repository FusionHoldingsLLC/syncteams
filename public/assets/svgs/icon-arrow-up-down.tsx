import * as React from 'react'
export const IconUpDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.66602 10.0003L7.99935 13.3337L11.3327 10.0003M4.66602 6.00033L7.99935 2.66699L11.3327 6.00033'
      stroke={props.stroke || 'white'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
