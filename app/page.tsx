import React from 'react'
import Clock from './components/clock'
import Settings from './settings/page'

export default function Home() {
  return (
    <div>
      <Settings />
      <Clock />
    </div>
  )
}
