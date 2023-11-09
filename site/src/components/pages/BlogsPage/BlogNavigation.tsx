import React from 'react'
import Button from 'components/Button/Button'
import cx from 'classnames'
import TagButton from 'components/TagButton'
import SideNavigation from 'components/SideNavigation'
import PropTypes, { InferProps } from 'prop-types'
import s from './BlogsPage.module.scss'
import { MappedCategory, MappedTag } from 'src/strapi/types/entities'
import { useRouter } from 'next/router'
import {BUTTON_KIND, Button as ToggleButton} from '@nilfoundation/ui-kit'

type BlogNavigationProps = {
  activeCategory?: string
  activeTag?: string
  categories?: MappedCategory[]
  tags?: MappedTag[]
  className?: string
}

function BlogNavigation({ activeCategory, activeTag, categories, tags, className }: BlogNavigationProps) {
  const router = useRouter()

  return (
    <SideNavigation className={cx(s.sideNavigation, className)} titleAnimation={false}>
      <div className={s.sideNavigationInner}>
        <div className={s.buttonsWrapper}>
          <Button
            href="/blog"
            className={cx(s.filterButtons, {
              [s.activeButton]: !activeTag && !activeCategory,
            })}
          >
            All
          </Button>
          {categories &&
            categories.map((button) => (
              <Button
                key={button.slug}
                onClick={() => router.push(`/blog/category/${button.slug}`)}
                className={cx(s.filterButtons, {
                  [s.activeButton]: activeCategory === button.slug,
                })}
              >
                {button.name}
              </Button>
            ))}
        </div>
        {tags && (
          <div className={s.tags}>
            {tags.map((tag) => (
              // <TagButton
              //   className={cx({
              //     [s.activeTag]: tag.slug === activeTag,
              //   })}
              //   key={tag.slug}
              //   tag={tag.name}
              //   href={`/blog/tag/${tag.slug}`}
              // />
            <ToggleButton key={tag.slug} kind={BUTTON_KIND.toggle}>{tag.name}</ToggleButton>
            ))}
          </div>
        )}
      </div>
    </SideNavigation>
  )
}

export default BlogNavigation
