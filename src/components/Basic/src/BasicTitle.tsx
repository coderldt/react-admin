import React, { useMemo } from 'react'
import BasicHelp from './BasicHelp.tsx'

import './less/basicTitle.less'

interface Props {
  /**
   * Help text list or string
   * @default: ''
   */
  helpMessage?: string[] | string
  /**
   * Whether the color block on the left side of the title
   * @default: false
   */
  span?: boolean
  /**
   * Whether to default the text, that is, not bold
   * @default: false
   */
  normal?: boolean
  /**
   * React.ReactNode
   * @default: ''
   */
  defaultSlot?: React.ReactNode
}

const BasicTitle: React.FC<Props> = (props) => {
  const prefixCls = 'basic-title'

  const getClassName = useMemo(() => {
    const className = [prefixCls]

    if (props.span && props.defaultSlot)
      className.push(`${prefixCls}-show-span`)

    if (props.normal)
      className.push(`${prefixCls}-normal`)

    return className.join(' ')
  }, [props.span, props.normal, props.defaultSlot])

  return (
    <>
      <span className={ getClassName }>
        { props.defaultSlot }
        {
          props.helpMessage && <span className={`${prefixCls}-help`}>
            <BasicHelp text={props.helpMessage} />
          </span>
        }
      </span>
    </>
  )
}

export default BasicTitle
