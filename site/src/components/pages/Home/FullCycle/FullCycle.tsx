import React from 'react'
import { string, shape, arrayOf } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import ListItem from 'components/ListItem'
import Button from 'components/ArrowButton'

import s from './FullCycle.module.scss'
import { homePageData } from 'stubs/homePageData'

type FullCycleProps = {
  className?: string
  data: typeof homePageData.fullCycle
}

const FullCycle = ({ className, data: { title, description, list, footer } }: FullCycleProps) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} description={description} />
        {!isMobile && <WhiteRectangle />}
      </div>
      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {list.map((el, i) => (
            <div
              className={s.list}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i} // eslint-disable-line
            >
              <ListItem className={s.item} key={el.title} title={el.title} />
            </div>
          ))}
        </div>
        <div className={s.footer}>
          <div>
            <Button className={s.button} text={footer.text} href={footer.link} />
            <WhiteRectangle />
          </div>
          <WhiteRectangle />
        </div>
      </div>
    </div>
  )
}

export default FullCycle
