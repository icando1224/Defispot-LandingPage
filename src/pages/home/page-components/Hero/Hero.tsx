import React from 'react'

import { Button, IconButton, Table } from 'components'
import classes from './Hero.module.scss'
import { ReactComponent as LineShape } from 'assets/svg-shapes/home-hero-line.svg'
import { ReactComponent as DefispotLogoSmall } from 'assets/svg-logos/defispot-logo-small.svg'
import { ReactComponent as DiscordLogo } from 'assets/svg-logos/discord.svg'
import { ReactComponent as FlowerIcon } from 'assets/svg-icons/flower.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/svg-icons/arrow-right.svg'
import classNames from 'classnames'

import XLMLogo from 'assets/svg-logos/xlm.svg'
import BTCLogo from 'assets/svg-logos/btc.svg'
import BCHLogo from 'assets/svg-logos/bch.svg'
import USDTLogo from 'assets/svg-logos/usdt.svg'
import USDCLogo from 'assets/svg-logos/usdc.svg'
import XRPLogo from 'assets/svg-logos/xrp.svg'
import AVAXLogo from 'assets/svg-logos/avax.svg'
import SOLLogo from 'assets/svg-logos/sol.svg'

import { ReactComponent as LeftSvgShape } from 'assets/svg-shapes/hero-left.svg'
import { ReactComponent as RightSvgShape } from 'assets/svg-shapes/hero-right.svg'

interface Props {
  className?: string
}

export const Hero: React.FC<Props> = ({ className }) => {
  const tableData = [
    {
      coin: {
        icon: XLMLogo,
        label: 'Stellar',
        name: 'XLM',
      },
      price: '$3,352',
      change: '12.54%',
      volume: '21,252.000M',
    },
    {
      coin: {
        icon: BTCLogo,
        label: 'Bitcoin',
        name: 'BTC',
      },
      price: '$3,352',
      change: '12.54%',
      volume: '21,252.000M',
    },
    {
      coin: {
        icon: BCHLogo,
        label: 'Bitcoin Cash',
        name: 'BCH',
      },
      price: '$3,352',
      change: '12.54%',
      volume: '21,252.000M',
    },
    {
      coin: {
        icon: USDTLogo,
        label: 'Tether',
        name: 'USDT',
      },
      price: '$3,352',
      change: '12.54%',
      volume: '21,252.000M',
    },
    {
      coin: {
        icon: USDCLogo,
        label: 'USDC',
        name: 'USDC',
      },
      price: '$3,352',
      change: '12.54%',
      volume: '21,252.000M',
    },
  ]

  const footerAssets = [USDCLogo, XRPLogo, AVAXLogo, SOLLogo]

  // @ts-ignore
  const tableRows = tableData.map((row) => (
    <tr className={classes['table-row']} key={row.coin.name}>
      <td>
        <div className={classes['table-coin-column']}>
          <img src={row.coin.icon} alt="" />
          <span>{row.coin.label}</span>
          <span>{row.coin.name}</span>
        </div>
      </td>

      <td>{row.price}</td>
      <td data-green>{row.change}</td>
      <td>{row.volume}</td>
      <td className={classes['table-action-column']}>
        <Button accent="grey-light-outlined" size="small">
          Trade
        </Button>
      </td>
    </tr>
  ))

  return (
    <section className={classNames(classes.hero, className)}>
      <div className={classes.intro}>
        <LeftSvgShape className={classes['left-svg-shape']} />
        <RightSvgShape className={classes['right-svg-shape']} />

        <div className={classes.intro__content}>
          <h1 className={classes.title}>
            The new standard decentralized trading platform
          </h1>
          <p className={classes.subtitle}>
            Trade decentralized between{' '}
            <span>
              blockchains <LineShape />
            </span>
          </p>

          <p className={classes.info}>
            Swap all assets frictionless in a decentralized manner, earn yield
            on your native coins and manage your portfolio while you have full
            control of your keys.
          </p>

          <div className={classes.actions}>
            <Button accent="white-outlined" prependIcon={DefispotLogoSmall}>
              Launch App
            </Button>
            <Button accent="grey-light" prependIcon={DiscordLogo}>
              Join Discord
            </Button>
          </div>
        </div>
      </div>

      <div className={classNames(classes.table, 'layout-content')}>
        <Table
          header={['Asset', 'Price', 'Change (24h)', 'Volume', '']}
          render={() => tableRows}
        />
        <div className={classes.table__footer}>
          <div className={classes.table__coins}>
            {footerAssets.reverse().map((logo) => (
              <img src={logo} alt="" key={logo} />
            ))}
          </div>

          <div className={classes.table__info}>
            <span>Trade 4000+ assets more</span>
            <FlowerIcon />
            <span>New assets are specially selected and added regularly</span>
          </div>

          <IconButton icon={ArrowRightIcon} />
        </div>
      </div>

      <div className={classes['mobile-table']}>
        <ul className={classes['mobile-table__list']}>
          {tableData.map((row) => (
            <li className={classes['mobile-table__item']} key={row.coin.name}>
              <div className={classes['mobile-table__asset']}>
                <img src={row.coin.icon} alt="" />
                <span>{row.coin.label}</span>
                <span>{row.coin.name}</span>
              </div>

              <div className={classes['mobile-table__value']}>
                <span>{row.price}</span>
                <span>{row.change}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className={classes['mobile-table__footer']}>
          <div className={classes['mobile-table__coins']}>
            {footerAssets.reverse().map((logo) => (
              <img src={logo} alt="" key={logo} />
            ))}
          </div>

          <IconButton icon={ArrowRightIcon} />

          <div className={classes['mobile-table__info']}>
            <span>Multiple assets to explore</span>
            <span>New assets are specially selected and added regularly</span>
          </div>
        </div>
      </div>
    </section>
  )
}
