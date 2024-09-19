'use client'
import React from 'react'
import Item from './item'

function fixNumber(n: number) {
  return n < 10 ? '0' + n : '' + n
}

export default function Clock() {
  const [date, setDate] = React.useState(new Date())
  React.useEffect(() => {
    setTimeout(() => {
      setDate(new Date())
    }, 1000)
  }, [date])
  return (
    <div className="h-screen bg-black flex justify-center items-center gap-6">
      <Item content={fixNumber(date.getHours())}/>
      <Item content={fixNumber(date.getMinutes())}/>
      <Item content={fixNumber(date.getSeconds())}/>
    </div>
  )
}
