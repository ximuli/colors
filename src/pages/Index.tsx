import { useState } from 'react'
import s from './Index.module.scss'
import ColorItem from '../components/ColorItem'
import { vars } from '../assets/style/vars.scss'

export default function Index() {
  const [count, setCount] = useState(0)
  const optionsList = [
    {
      bgColor: vars.$GlowingRed,
      title: '霞光红',
    },
    {
      bgColor: vars.$SpringYellow,
      title: '迎春黄',
    },
    {
      bgColor: vars.$SkyBlue,
      title: '天霁蓝',
    },
    {
      bgColor: vars.$GreatWallGrey,
      title: '长城灰',
    },
    {
      bgColor: vars.$SnowWhite,
      title: '瑞雪白',
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
