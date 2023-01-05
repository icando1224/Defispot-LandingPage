import React from 'react'

import classNames from 'classnames'
import classes from './Investments.module.scss'

import { ReactComponent as InvestmentsDot } from 'assets/svg-icons/investments-dot.svg'
import InvestmentsSC from 'assets/images/investments-sc.png'
import { DesktopFrame, MobileFrame } from 'components'

import { ReactComponent as RightSvgShape } from 'assets/svg-shapes/overview.svg'

export const Investments: React.FC = () => {
  return (
    <section className={classes.investments}>
      <RightSvgShape className={classes['right-svg-shape']} />

      <div className={classNames(classes.content, 'layout-content')}>
        <div className={classes.icon}>
          <InvestmentsDot />
        </div>

        <h2 className={classes.title}>Keep track of your investments</h2>

        <p className={classes.info}>
          Keep up on all the latest trends in the crypto industry and stay ahead
          of the competition. The app will display news most relevant to your
          interests so you never miss a beat.
        </p>

        <DesktopFrame
          img={InvestmentsSC}
          className={classes['desktop-frame']}
        />
        <MobileFrame className={classes['mobile-frame']} />
      </div>
    </section>
  )
}
