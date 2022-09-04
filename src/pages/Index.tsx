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
      textColor: vars.$White
    },
    {
      bgColor: vars.$SpringYellow,
      title: '迎春黄',
      textColor: vars.$Silver
    },
    {
      bgColor: vars.$SkyBlue,
      title: '天霁蓝',
      textColor: vars.$White
    },
    {
      bgColor: vars.$GreatWallGrey,
      title: '长城灰',
      textColor: vars.$White
    },
    {
      bgColor: vars.$SnowWhite,
      title: '瑞雪白',
      textColor: vars.$Silver
    },
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
