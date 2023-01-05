import React from 'react'

import classNames from 'classnames'
import classes from './MobileFrame.module.scss'

interface Props {
  img?: string
  className?: string
}

export const MobileFrame: React.FC<Props> = ({ img, className }) => {
  return (
    <div className={classNames(classes.frame, className)}>
      {img && <img src={img} alt="" />}
      <div className={classes.handle} />
    </div>
  )
}
