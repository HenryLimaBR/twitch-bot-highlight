import React from 'react'

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width={128} height={128} viewBox='0 0 20 20' fill='none' {...props}>
      <g>
        <path d='M8.5 10L4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z' />
      </g>
    </svg>
  )
}

export default CloseIcon