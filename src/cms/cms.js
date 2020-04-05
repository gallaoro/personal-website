import React from 'react'
import CMS from 'netlify-cms-app'

import utils from '../misc/utils'

import PostTemplate from '../templates/post'

const BlogPostPreview = ({ entry }) => {
  const data = entry.get('data').toJS();
  return (
    <PostTemplate
      data={{
        markdownRemark: {
          html: utils.markdownBlogPostRenderer(data.body),
          frontmatter: {
            date: `${data.date.getFullYear()}-${data.date.getMonth()+1}-${data.date.getDate()}`,
            path: data.path,
            title: data.title,
          }
        }
      }}
    />
  )
}

// do not register custom preview
CMS.registerPreviewTemplate('blog', BlogPostPreview)