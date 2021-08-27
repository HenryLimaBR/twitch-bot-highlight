import React from 'react'

const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width={128} height={128} viewBox='0 0 128 128' fill='none' {...props}>
      <g>
        <path d='M4 10a6 6 0 0110.472-4H13v2h5V3h-2v1.708A8 8 0 002 10h2zM7 14H5.528A6 6 0 0016 10h2a8 8 0 01-14 5.292V17H2v-5h5v2z' />
      </g>
    </svg>
  )
}

export default RefreshIcon