import React from 'react'

import classNames from 'classnames'
import classes from './DesktopFrame.module.scss'

interface Props {
  img: string
  className?: string
}

export const DesktopFrame: React.FC<Props> = ({ img, className }) => {
  return (
    <div className={classNames(classes.frame, className)}>
      <div className={classes.toolbar}>
        <div />
        <div />
        <div />
      </div>

      <img src={img} alt="" className={classes.img} />
    </div>
  )
}
