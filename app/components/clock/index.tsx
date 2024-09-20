'use client'
import React from 'react'
import Item from './item'

function fixNumber(n: number) {
  return n < 10 ? '0' + n : '' + n
}

async function requestWakeLock(fn) {
  try {
    const wakeLock = await navigator.wakeLock.request('screen');
    console.log('屏幕已禁止熄屏');
    fn()
  } catch (err) {
    console.error('无法禁止屏幕熄屏：', err);
  }
}

export default function Clock() {
  const [date, setDate] = React.useState(new Date())
  const [wakeLock, setWakeLock] = React.useState(false)
  React.useEffect(() => {
    if (wakeLock) return
    requestWakeLock(() => {
      setWakeLock(true)
    })
  }, [wakeLock])
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
