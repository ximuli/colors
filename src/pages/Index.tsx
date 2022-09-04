import s from './Index.module.scss'
import ColorItem from '../components/ColorItem'
import { vars } from '../assets/style/vars.scss'

export default function Index() {
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
      bgColor: vars.$SapphireSky,
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
    {
      bgColor: vars.$SkyBlue,
      title: '天青',
      textColor: vars.$White
    },
    {
      bgColor: vars['$Plum-blossomPink'],
      title: '梅红',
      textColor: vars.$White
    },
    {
      bgColor: vars.$BambooGreen,
      title: '竹绿',
      textColor: vars.$White
    },
    {
      bgColor: vars.$IceBlue,
      title: '冰蓝',
      textColor: vars.$White
    },
    {
      bgColor: vars.$PersimmonOrange,
      title: '吉柿',
      textColor: vars.$White
    },
    {
      bgColor: vars.$Gold,
      title: '金',
      textColor: vars.$White
    },
    {
      bgColor: vars.$Silver,
      title: '银',
      textColor: vars.$White
    },
    {
      bgColor: vars.$ChineseInk,
      title: '墨',
      textColor: vars.$White
    },
  ]

  return (
    <div className={s.wrapper}>
      {
        optionsList.map((item, index) => {
          return <ColorItem
            colorOptions={item}
            key={index}
            index={index}
          />
        })
      }
      
    </div>
  )
}
