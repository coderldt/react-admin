import React from 'react'
import { Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import type { TooltipPlacement } from 'antd/es/tooltip'

import './less/basicHelp.less'

interface Props {
  /**
   * Help text max-width
   * @default: 600px
   */
  maxWidth?: string | number
  /**
   * Whether to display the serial number
   * @default: false
   */
  showIndex?: boolean
  /**
   * Help text font color
   * @default: #ffffff
   */
  color?: string
  /**
   * Help text font size
   * @default: 14px
   */
  fontSize?: string
  /**
   * Help text list
   */
  placement?: TooltipPlacement
  /**
   * Help text list
   */
  text: string[] | string
}

const BasicHelp: React.FC<Props> = (props) => {
  const {
    color = '#fff',
    maxWidth = '600px',
    fontSize = '14px',
  } = props

  const prefixCls = 'basic-help'
  function renderTitle() {
    const textList = props.text

    if (typeof textList === 'string')
      return <p>{textList}</p>

    if (Array.isArray(textList)) {
      return textList.map((text, index) => {
        return (
          <p key={text}>
            <>
              {props.showIndex ? `${index + 1}. ` : ''}
              {text}
            </>
          </p>
        )
      })
    }
    return null
  }

  return (
    <Tooltip
      overlayClassName={ `${prefixCls}__wrap` }
      title={<div style={{ color, fontSize }}>{renderTitle()}</div>}
      autoAdjustOverflow={true}
      overlayStyle={{ maxWidth }}
      placement={ props.placement }
    >
      {/* getPopupContainer={() => getPopupContainer()} */}
      <span className={prefixCls}>{ <InfoCircleOutlined /> }</span>
    </Tooltip>
  )
}

export default BasicHelp
