'use client'
import React from 'react'

import { FullscreenOutlined, SettingOutlined } from '@ant-design/icons';

import screenfull from 'screenfull'

function fullScreen() {
  screenfull.toggle()
}

export default function Settings() {
  return (
    <div className="fixed w-full left-0 flex justify-between p-3 text-2xl">
      <div className="text-white">
        <FullscreenOutlined onClick={fullScreen} />
      </div>
      <div className="text-white">
        <SettingOutlined />
      </div>
    </div>
  )
}
