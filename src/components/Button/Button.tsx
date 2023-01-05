import React from 'react'

import classNames from 'classnames'
import classes from './Button.module.scss'

interface Props {
  children: any
  prependIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  appendIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  accent?: 'white' | 'white-outlined' | 'grey-light' | 'grey-light-outlined'
  size?: 'small'
  className?: string
}

export const Button: React.FC<Props> = ({
  children,
  prependIcon: PrependIcon,
  appendIcon: AppendIcon,
  accent,
  size,
  className,
}) => {
  return (
    <button
      className={classNames(
        classes.btn,
        accent && classes[`accent-${accent}`],
        size && classes[`size-${size}`],
        className,
      )}
    >
      {PrependIcon && (
        <div className={classes['prepend-icon']}>
          <PrependIcon />
        </div>
      )}

      {children}

      {AppendIcon && (
        <div className={classes['append-icon']}>
          <AppendIcon />
        </div>
      )}
    </button>
  )
}
