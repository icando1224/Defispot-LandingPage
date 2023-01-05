import React from 'react'

import classes from './GetStarted.module.scss'
import { ReactComponent as CrossChainIcon } from 'assets/svg-icons/cross-chain.svg'
import { ReactComponent as ManagePortfolioIcon } from 'assets/svg-icons/manage-portfolio.svg'
import { ReactComponent as TradingRewardsIcon } from 'assets/svg-icons/trading-rewards.svg'
import classNames from 'classnames'

export const GetStarted: React.FC = () => {
  const items = [
    {
      icon: CrossChainIcon,
      title: 'Trade cross-chain',
      info: 'Be the first to know about market changes. Set alerts for any.',
    },
    {
      icon: ManagePortfolioIcon,
      title: 'Manage your portfolio',
      info: 'Be the first to know about market changes. Set alerts for any.',
    },
    {
      icon: TradingRewardsIcon,
      title: 'Trading Rewards',
      info: 'Be the first to know about market changes. Set alerts for any.',
    },
  ]

  return (
    <section className={classes['get-started']}>
      <div className={classNames(classes.content, 'layout-content')}>
        <h2 className={classes.title}>Get started fast</h2>
        <p className={classes.subtitle}>
          Here are a few reasons why you should choose Defispot
        </p>

        <div className={classes.grid}>
          {items.map((item) => (
            <div className={classes.item} key={item.title}>
              <div className={classes.item__icon}>
                <item.icon />
              </div>

              <span className={classes.item__title}>{item.title}</span>
              <span className={classes.item__info}>{item.info}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
