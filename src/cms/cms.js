import React from 'react'
import CMS from 'netlify-cms-app'

import PostTemplate from '../templates/post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJs();
  console.log(data);
  return (
    <PostTemplate
      data={{
        markdownRemark: {
          html: '<h1>Hello!</h1>',
          frontmatter: {
            date: data.date,
            path: data.path,
            title: data.title,
          }
        }
      }}
    />
  )
}


CMS.registerPreviewTemplate('blog', BlogPostPreview)