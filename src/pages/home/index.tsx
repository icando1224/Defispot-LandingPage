import React from 'react'

import classes from './index.module.scss'
import { Header, Sponsors, Footer } from 'components'
import {
  Hero,
  Investments,
  GetStarted,
  Divider,
  Blockchains,
  Portfolio,
  InviteFriends,
  DownloadNow,
} from './page-components'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero className={classes.hero} />
      <Sponsors className={classes.sponsors} />
      <Investments />
      <GetStarted />
      <Divider />
      <Blockchains />
      <Portfolio />
      <InviteFriends />
      <DownloadNow />
      <Footer />
    </>
  )
}

export default Home
