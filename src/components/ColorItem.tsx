import React from 'react'
import s from './ColorItem.module.scss'

interface Props {
  colorOptions: Options
}

interface Options {
  bgColor: string
}

export default function ColorItem(props: Props) {
  const options:Options = props.colorOptions
  return (
    <div className={s.wrapper} style={ { backgroundColor: options.bgColor } }>
      ColorItem
    </div>
  )
}
