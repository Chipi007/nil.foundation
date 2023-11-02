import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
// import ListItem from 'components/ListItem';
import Button from 'components/ArrowButton'
import Icon from 'components/Icon'

import s from './Accelerating.module.scss'
import { zkllvmPageData } from 'stubs/zkllvmPageData'

type AcceleratingProps = {
  className?: string
  data: typeof zkllvmPageData.accelerating
}

const Accelerating = ({ className, data: { title, description, content, footer } }: AcceleratingProps) => {
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
          {content.map((el) => (
            <div className={s.box} key={el.title}>
              <Icon name={el.icon} className={s.icon} />
              <span className={s.title}>{el.title}</span>
              <p className={s.description}>{el.description}</p>
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

export default Accelerating
