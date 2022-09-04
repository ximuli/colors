import React, { PointerEvent, useRef, useState } from 'react'
import s from './ColorItem.module.scss'

interface Props {
  colorOptions: Options,
  index: number
}

interface Options {
  bgColor: string,
  title: string,
  textColor: string,
}

export default function ColorItem(props: Props) {
  const refDiv = useRef(null)
  const options: Options = props.colorOptions
  const screenWidth = document.documentElement.clientWidth

  const onPointerEnter = (e: React.PointerEvent) => {
    const element: HTMLDivElement = refDiv.current!
    element.style.width = '22%'
    element.style.fontSize = '3em'
  }

  const onPointerLeave = (e: React.PointerEvent) => {
    const element: HTMLDivElement = refDiv.current!
    element.style.width = '18%'
    element.style.fontSize = '1em'
  }

  // 间隔一秒后推进动画
  let delay = 1000
  const index =props.index
  if (index > 0) {
    delay = 1000 + (index * 300)
  } else if (index > 5) {
    delay = 0
  }
  
  setTimeout(() => {
    if (refDiv.current) {
      const element: HTMLDivElement = refDiv.current!
      element.style.flexShrink = '0'
    }
  }, delay)

  return (
    <div
      ref={refDiv}
      className={s.wrapper}
      style={{ backgroundColor: options.bgColor, color: options.textColor }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className={s.title}>{options.title}</div>
    </div>
  )
}
