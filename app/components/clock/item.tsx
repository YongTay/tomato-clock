'use client'
import React, { useState, useRef, useEffect } from 'react'
import { IClockItem } from '@/app/types';

function drawNumber(canvas: HTMLCanvasElement, content: string) {
  const parent = canvas.parentElement!
  const h = parent.clientHeight
  const w = parent.clientWidth
  const ctx = canvas.getContext('2d')!
  canvas.width = w
  canvas.height = h
  
  ctx.font = h - 240 + "px system-ui"
  ctx.fillText(content, 0, h - 80)
}

export default function Item({ content }: IClockItem) {
  const a = content.substring(0, 1)
  const b = content.substring(1)
  return (
    <div
      style={{ width: '400px', height: '400px', fontSize: '300px' }}
      className="bg-gray-500 flex text-center items-center rounded-2xl text-white relative"
    >
      <div className="absolute top-1/2 left-0 h-1 w-full bg-black"></div>
      {/* <div className="absolute top-0 left-1/2 w-1 h-full bg-black"></div> */}
      <div className="grow">{a}</div>
      <div className="grow">{b}</div>
    </div>
  )
}
