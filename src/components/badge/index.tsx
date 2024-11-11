import React from 'react'

const Badge = ({text} : {text: string}) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{text}</span>
  )
}

export default Badge