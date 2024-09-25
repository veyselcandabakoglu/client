import React from 'react'

const PageContainer = ({children}) => {
    console.log('children', children)
  return (
    <div className='flex h-screen w-full'>{children}</div>
  )
}

export default PageContainer