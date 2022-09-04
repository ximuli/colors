import React, { PointerEvent, useRef, useState } from 'react'
import s from './ColorItem.module.scss'

interface Props {
  colorOptions: Options
}

interface Options {
  bgColor: string,
  title: string,
  textColor: string,
}

export default function ColorItem(props: Props) {
  const refDiv = useRef(null)
  const options: Options = props.colorOptions

  const onPointerEnter = (e: React.PointerEvent) => {
    const element: HTMLDivElement = refDiv.current!
    element.style.width = '30%'
    element.style.fontSize = '3em'
  }

  const onPointerLeave = (e: React.PointerEvent) => {
    const element: HTMLDivElement = refDiv.current!
    element.style.width = '20%'
    element.style.fontSize = '1.5em'
  }

  return (
    <div
      ref={refDiv}
      className={s.wrapper}
      style={{ backgroundColor: options.bgColor, color: options.textColor }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={ onPointerLeave }
    >
      <div className={s.title}>{ options.title}</div>
    </div>
  )
}
