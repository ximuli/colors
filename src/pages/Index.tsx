import { useState } from 'react'
import s from './Index.module.scss'
import ColorItem from '../components/ColorItem'

export default function Index() {
  const [count, setCount] = useState(0)
  const optionsList = [
    {
      bgColor: 'rgb(193, 24, 39)'
    },
    {
      bgColor: 'rgb(255, 227, 0)'
    },
    {
      bgColor: 'rgb(31, 75, 149)'
    },
    {
      bgColor: 'rgb(174, 185, 184)'
    },
    {
      bgColor: 'rgb(239, 237, 220)'
    }
  ]
  return (
    <div className={s.wrapper}>
      {
        optionsList.map((item, index) => {
          return <ColorItem colorOptions={item} key={index} />
        })
      }
      
    </div>
  )
}
