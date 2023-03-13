import React from 'react'

export default function Error({text, error}) {
  return (
    <div className='text-2xl first-letter:capitalize font-bold p-12'>{text}{error ? ', '+error:''}</div>
  )
}