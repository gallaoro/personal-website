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
          html: widgetFor('body'),
          frontmatter: {
            date: `${data.date.year}-${data.date.monthIndex+1}-${data.date.day}`,
            path: data.path,
            title: data.title,
          }
        }
      }}
    />
  )
}


CMS.registerPreviewTemplate('blog', BlogPostPreview)