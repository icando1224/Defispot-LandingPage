import React from 'react'

import { Button } from 'components'
import classes from './InviteFriends.module.scss'
import { ReactComponent as DiamondShape } from 'assets/svg-shapes/diamond.svg'

export const InviteFriends: React.FC = () => {
  return (
    <section className="layout-content">
      <div className={classes.card}>
        <p className={classes.title}>
          Invite Friends & Earn <span>50%</span>
        </p>

        <p className={classes.info}>
          Be the first to know about market changes. Set alerts for any of the
          4,000+ cryptocurrencies available on DefiSpot
        </p>

        <Button accent="white" className={classes.action}>
          Start Earning
        </Button>

        <DiamondShape className={classes['svg-shape']} />
      </div>
    </section>
  )
}
