import React from 'react'

import classNames from 'classnames'
import classes from './IconButton.module.scss'

interface Props {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export const IconButton: React.FC<Props> = ({
  icon: Icon,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      className={classNames(
        classes.btn,
        disabled && classes.disabled,
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon />
    </button>
  )
}
