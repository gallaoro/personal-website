import React from 'react'
import CMS from 'netlify-cms-app'
import marked from 'marked'

import PostTemplate from '../templates/post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS();
  return (
    <PostTemplate
      data={{
        markdownRemark: {
          html: marked(data.body),
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