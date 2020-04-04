import React from 'react'
import CMS from 'netlify-cms-app'

import PostTemplate from '../templates/post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data');
  console.log(data);
  console.log(data.get('date'));
  console.log(data.get('path'));
  console.log(data.get('title'));
  return (
    <PostTemplate
      data={{
        markdownRemark: {
          html: '<h1>Hello!</h1>',
          frontmatter: {
            date: data.get('date'),
            path: data.get('path'),
            title: data.get('title')
          }
        }
      }}
    />
  )
}


CMS.registerPreviewTemplate('blog', BlogPostPreview)