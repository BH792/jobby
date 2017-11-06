import React from 'react';

const Icon = ({ dimensions }) => {
  const { height, width } = dimensions
  console.log(height, width);
  return (
    <svg
      className='LoadingIcon'
      width={width}
      height={height}
      viewBox='0 0 25 25'
      preserveAspectRatio="xMidYMin"
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill="none" d="M-1-1h27v27H-1z"/><g><g stroke="null"><path d="M-.003 0h25.006v25.006H-.003V0z" fill="none"/><path d="M3.123 13.545h8.433l-.098-10.42H3.123v10.42zm0 8.335h8.335V15.63H3.123v6.251zm10.419 0h8.335V11.461h-8.335v10.42zm0-18.754v6.251h8.335V3.126h-8.335z" fill="#aaf"/></g></g>
    </svg>
  )
}

Icon.defaultProps = {
  dimensions: {
    height: 25,
    width: 25
  }
}

export default Icon;
