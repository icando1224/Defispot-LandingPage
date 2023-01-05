import React from 'react'

// import classNames from 'classnames'
import classes from './Footer.module.scss'
import { ReactComponent as DefispotLogo } from 'assets/svg-logos/defispot-logo.svg'
import { ReactComponent as FlowerIcon } from 'assets/svg-icons/flower.svg'
import { ReactComponent as FacebookIcon } from 'assets/svg-logos/facebook.svg'
import { ReactComponent as TwitterIcon } from 'assets/svg-logos/twitter.svg'
import { ReactComponent as DiscordIcon } from 'assets/svg-logos/discord.svg'
import { ReactComponent as InstagramIcon } from 'assets/svg-logos/instagram.svg'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const links = [
    {
      title: 'Company',
      items: [
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Terms of Use',
          to: '/terms-of-use',
        },
        {
          label: 'Careers',
          to: '/careers',
        },
        {
          label: 'Privacy Policiy',
          to: '/privacy-policiy',
        },
      ],
    },
    {
      title: 'Trade',
      items: [
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Terms of Use',
          to: '/terms-of-use',
        },
        {
          label: 'Careers',
          to: '/careers',
        },
        {
          label: 'Privacy Policiy',
          to: '/privacy-policiy',
        },
      ],
    },
    {
      title: 'Help Desk',
      items: [
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Terms of Use',
          to: '/terms-of-use',
        },
        {
          label: 'Careers',
          to: '/careers',
        },
        {
          label: 'Privacy Policiy',
          to: '/privacy-policiy',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Terms of Use',
          to: '/terms-of-use',
        },
        {
          label: 'Careers',
          to: '/careers',
        },
        {
          label: 'Privacy Policiy',
          to: '/privacy-policiy',
        },
      ],
    },
  ]

  return (
    <footer className={classes.footer}>
      <div className="layout-content">
        <div className={classes.top}>
          <DefispotLogo className={classes.top__logo} />
          <FlowerIcon className={classes.top__icon} />
          <span>The new standard decentralized trading platform</span>

          <div className={classes.socials}>
            <button>
              <FacebookIcon />
            </button>
            <button>
              <TwitterIcon />
            </button>
            <button>
              <DiscordIcon />
            </button>
            <button>
              <InstagramIcon />
            </button>
          </div>
        </div>

        <div className={classes.links}>
          {links.map((link) => (
            <div className={classes.list} key={link.title}>
              <span className={classes.list__title}>{link.title}</span>
              {link.items.map((link) => (
                <Link
                  to={link.to}
                  key={link.label}
                  className={classes.list__link}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <span className={classes.copyright}>
          © 2022 DefiSpot. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
