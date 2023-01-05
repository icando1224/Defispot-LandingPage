import React from 'react'

import classNames from 'classnames'
import classes from './Blockchains.module.scss'
import EthLogo from 'assets/svg-logos/eth.svg'
import BtcLogo from 'assets/svg-logos/btc.svg'
import AvaxLogo from 'assets/svg-logos/avax.svg'
import DotLogo from 'assets/svg-logos/dot.svg'
import OpLogo from 'assets/svg-logos/op.svg'
import BscLogo from 'assets/svg-logos/bsc.svg'
import MaticLogo from 'assets/svg-logos/matic.svg'

export const Blockchains: React.FC = () => {
  const items = [
    {
      icon: EthLogo,
      title: 'Ethereum',
      name: 'ETH',
    },
    {
      icon: BtcLogo,
      title: 'Bitcoin',
      name: 'BTC',
    },
    {
      icon: AvaxLogo,
      title: 'Avalanche',
      name: 'AVAX',
    },
    {
      icon: DotLogo,
      title: 'Polkadot',
      name: 'DOT',
    },
    {
      icon: OpLogo,
      title: 'Optimism',
      name: 'OP',
    },
    {
      icon: BscLogo,
      title: 'Binance Smart Chain',
      name: 'BSC',
    },
    {
      icon: MaticLogo,
      title: 'Polygon',
      name: 'MATIC',
    },
  ]

  return (
    <section className={classes.blockchains}>
      <div className={classNames(classes.content, 'layout-content')}>
        <span className={classes.subtitle}>
          Here are a few reasons why you should choose Defispot
        </span>

        <h2 className={classes.title}>
          We are supporting more than average blockchains
        </h2>

        <div className={classes.grid}>
          {items.map((item, i) => (
            <>
              <div className={classes.item} key={item.title}>
                <img src={item.icon} alt="" />
                <span>{item.title}</span>
                <span>{item.name}</span>
              </div>

              {i <= 5 && (
                <div className={classes.divider}>
                  <div />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
