import React from 'react'

import classes from './DownloadNow.module.scss'

import { ReactComponent as DownloadIcon } from 'assets/svg-icons/download.svg'
import { ReactComponent as DefispotLogoSmall } from 'assets/svg-logos/defispot-logo-small.svg'
/* import { ReactComponent as DownloadAppStore } from 'assets/svg-shapes/download-app-store.svg'
import { ReactComponent as DownloadGooglePlay } from 'assets/svg-shapes/download-google-play.svg'
import { ReactComponent as QRCode } from 'assets/svg-shapes/qr-code.svg' */

export const DownloadNow: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.icon}>
        <DownloadIcon />
      </div>

      <h2 className={classes.title}>Launch Now</h2>
      <p className={classes.info}>
        Never miss anything crypto when you're on the go. Our app is so packed,
        it's like you have a Swiss Army Knife in your pocket.
      </p>

      <div className={classes.actions}>
        <button className={classes.actions__app}>
          <DefispotLogoSmall />
          Launch App
        </button>
        {/*   <button className={classes.actions__store}>
          <DownloadAppStore />
        </button>
        <button className={classes.actions__store}>
          <DownloadGooglePlay />
        </button>
        <button className={classes.actions__qr}>
          <QRCode />
        </button> */}
      </div>
    </section>
  )
}
