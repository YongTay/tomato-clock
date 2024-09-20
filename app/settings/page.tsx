'use client'
import React from 'react'
import screenfull from 'screenfull'

import { FullscreenOutlined, SettingOutlined } from '@ant-design/icons';
import Config from '@/app/components/config/config';

function fullScreen() {
  screenfull.toggle()
}

export default function Settings() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="fixed w-full left-0 flex justify-between p-3 text-2xl">
      <div className="text-white">
        <FullscreenOutlined onClick={fullScreen} />
      </div>
      <div className="text-white">
        <SettingOutlined onClick={() => setOpen(true)}/>
      </div>
      <Config open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
