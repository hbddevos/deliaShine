import React from 'react'

export default function Link({type, icon}) {
  return (
    <a href='#' className='border p-5 flex flex-col items-center '>
        <div>
            <img src={icon} alt="" />
        </div>
        <span>
            {type}
        </span>
    </a>
  )
}
