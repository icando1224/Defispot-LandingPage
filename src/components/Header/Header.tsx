import React, { useState } from 'react'

import classes from './Header.module.scss'

import { Link, NavLink } from 'react-router-dom'

import { ReactComponent as DefispotLogo } from 'assets/svg-logos/defispot-logo.svg'
import { ReactComponent as ArrowUpRightIcon } from 'assets/svg-icons/arrow-up-right.svg'
import { ReactComponent as HamburgerMenuIcon } from 'assets/svg-icons/hamburger-menu.svg'
import { ReactComponent as CloseIcon } from 'assets/svg-icons/close.svg'
import classNames from 'classnames'

import { Button } from 'components'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const nav = [
    {
      label: 'Discover',
      to: 'discover',
    },
    {
      label: 'Learn Crypto',
      to: 'learn-crypto',
    },
    {
      label: 'Invite Friends',
      to: 'invite-friends',
    },
    {
      label: 'Support',
      to: 'support',
    },
  ]

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <nav className={classes.desktop}>
          <button
            className={classes.menu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
          </button>

          <Link to="/" className={classes.logo}>
            <DefispotLogo />
          </Link>

          <nav className={classes.nav}>
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  classNames(
                    classes['nav-item'],
                    isActive && classes['nav-item--active'],
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button appendIcon={ArrowUpRightIcon} className={classes.action}>
            Launch App
          </Button>
        </nav>
      </header>

      <nav
        className={classNames(
          classes.mobile,
          isMenuOpen && classes['mobile--active'],
        )}
      >
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              classNames(
                classes['mobile-item'],
                isActive && classes['mobile-item--active'],
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </section>
  )
}
