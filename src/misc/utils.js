import marked from 'marked'

const markdownBlogPostRenderer = new marked.Renderer();

markdownBlogPostRenderer.image = (href, title, text) => {
  return `
    <div class="flex justify-center">
      <img src=${href} alt=${text} ${!!title ? ('title='+title) : ''}/>
    </div>`
};

export default {
  markdownBlogPostRenderer: (rawContent) => marked(rawContent, { renderer: markdownBlogPostRenderer })
}