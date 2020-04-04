import React from 'react'
import CMS from 'netlify-cms-app'

import PostTemplate from '../templates/post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS();
  console.log(data);
  return (
    <PostTemplate
      data={{
        markdownRemark: {
          html: data.body,
          frontmatter: {
            date: '01 gennaio 2000',
            path: data.path,
            title: data.title,
          }
        }
      }}
    />
  )
}


CMS.registerPreviewTemplate('blog', BlogPostPreview)