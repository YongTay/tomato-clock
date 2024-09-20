import React from 'react'

import { Drawer, Slider } from 'antd';

const defaultConfig = {
  opacity: 100
}

function saveConfig(k: string, v: any) {
  localStorage.setItem('config', {
    ...defaultConfig,
    k: v
  })
}

function loadConfig() {
  const str = localStorage.getItem('config')
  config = str ? JSON.parse(str) : defaultConfig
  return {
    ...defaultConfig,
    ...config
  }
}


export default function Config({ open, onClose}) {
  const [opacity, setOpacity] = React.useState(defaultConfig.opacity)
  React.useEffect(() => {
    
  }, [opacity])
  return (
    <Drawer
        width="50%"
        title="Settings"
        placement="right"
        closable={true}
        onClose={() => onClose(false)}
        open={open}
    >
        <p>透明度</p>
        <Slider defaultValue={opacity} onChange={v => setOpacity(v)}/> 
      </Drawer>
  )
}
