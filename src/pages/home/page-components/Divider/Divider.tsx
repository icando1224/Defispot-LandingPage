import React from 'react'

import classNames from 'classnames'
import classes from './Divider.module.scss'

export const Divider: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classNames(classes.divider, 'layout-content')} />
    </div>
  )
}
