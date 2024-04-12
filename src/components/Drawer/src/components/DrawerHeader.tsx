import type React from 'react'

import { BasicTitle } from '@/components/Basic'

interface Props {
  isDetail: boolean
  showDetailBack: boolean
  title: string
  titleSlot?: React.ReactNode
}

const DrawerHeader: React.FC<Props> = (props) => {
  const prefixCls = 'basic-drawer-header'

  return (
    <>
      {
        !props.isDetail && <div className={prefixCls}>
          <BasicTitle defaultSlot={ props.titleSlot || props.title }>
          </BasicTitle>
        </div>
      }
    </>
  )
}

export default DrawerHeader
