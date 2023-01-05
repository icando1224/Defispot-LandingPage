import React from 'react'

import classes from './Sponsors.module.scss'
import { ReactComponent as CoinbaseLogo } from 'assets/svg-logos/coinbase.svg'
import { ReactComponent as ParadigmLogo } from 'assets/svg-logos/paradigm.svg'
import classNames from 'classnames'

interface Props {
  className?: string
}

export const Sponsors: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={classNames(classes.sponsors, 'layout-content', className)}
    >
      <h2 className={classes.title}>We’re backed by</h2>

      <div className={classes.grid}>
        <div className={classes.item}>
          <CoinbaseLogo data-small />
        </div>
        <div className={classes.item}>
          <ParadigmLogo />
        </div>
        <div className={classes.item}>
          <CoinbaseLogo data-small />
        </div>
        <div className={classes.item}>
          <ParadigmLogo />
        </div>
      </div>
    </section>
  )
}
