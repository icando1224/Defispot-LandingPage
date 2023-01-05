import React, { useRef, useState } from 'react'

import classNames from 'classnames'
import classes from './Portfolio.module.scss'
import { IconButton, DesktopFrame } from 'components'
import { ReactComponent as ArrowRightIcon } from 'assets/svg-icons/arrow-right.svg'
import { ReactComponent as ArrowLeftIcon } from 'assets/svg-icons/arrow-left.svg'
import OverviewSC from 'assets/images/overview-sc.png'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export const Portfolio: React.FC = () => {
  const mobileCarouselRef = useRef(null)
  const carouselOnPrev = useRef(() => {})
  const [carouselHasPrev, setCarouselHasPrev] = useState(false)
  const carouselOnNext = useRef(() => {})
  const [carouselHasNext, setCarouselHasNext] = useState(false)
  const [mobileCarouselCurrentIndex, setMobileCarouselCurrentIndex] =
    useState(0)

  const mobileCarouselItems = [
    <div className={classes['mobile-carousel__item']} />,
    <div className={classes['mobile-carousel__item']} />,
  ]

  return (
    <section className={classNames(classes.portfolio, 'layout-content')}>
      <span className={classes['section-name']}>Portfolio</span>
      <h2 className={classes.title}>
        Get an overview of the market all in one place
      </h2>
      <p className={classes.subtitle}>
        Your favorite place to see everything that you need.
      </p>

      <div className={classes.carousel}>
        <div className={classes.carousel__controls}>
          <IconButton
            icon={ArrowLeftIcon}
            onClick={() => {
              carouselOnPrev.current()
            }}
            disabled={!carouselHasPrev}
          />
          <IconButton
            icon={ArrowRightIcon}
            onClick={() => {
              carouselOnNext.current()
            }}
            disabled={!carouselHasNext}
          />
        </div>

        <div className={classes.carousel__background}>
          <div className={classes.carousel__container}>
            <Carousel
              dynamicHeight
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={(onPrev: any, hasPrev: any) => {
                carouselOnPrev.current = onPrev
                setTimeout(() => {
                  setCarouselHasPrev(hasPrev)
                }, 0)
                return <div />
              }}
              renderArrowNext={(onNext: any, hasNext: any) => {
                carouselOnNext.current = onNext
                setTimeout(() => {
                  setCarouselHasNext(hasNext)
                }, 0)
                return <div />
              }}
            >
              <DesktopFrame img={OverviewSC} />
              <DesktopFrame img={OverviewSC} />
            </Carousel>
          </div>
        </div>
      </div>

      <div className={classes['mobile-carousel']}>
        <Carousel
          dynamicHeight
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          ref={mobileCarouselRef}
          onChange={(index: any) => setMobileCarouselCurrentIndex(index)}
        >
          {mobileCarouselItems.map((el) => el)}
        </Carousel>

        <div className={classes['mobile-carousel__indicators']}>
          {mobileCarouselItems.map((_, i) => (
            <button
              onClick={() => {
                console.log(mobileCarouselRef.current)
                // @ts-ignore
                mobileCarouselRef.current?.moveTo(i)
              }}
              data-active={mobileCarouselCurrentIndex === i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
