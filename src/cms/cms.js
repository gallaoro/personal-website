import React from 'react'
import CMS from 'netlify-cms-app'

import PostTemplate from '../templates/post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <PostTemplate
    data={{
      markdownRemark: {
        html: '<h1>Hello!</h1>',
        frontmatter: {
          date: 'asd',
          path: 'ad',
          title: 'asd'
        }
      }
    }}
  />
)


CMS.registerPreviewTemplate('blog', BlogPostPreview)