import marked from 'marked'

const mapHeadingLevelToTailwindClass = level => {
  const map = {
    1: 'text-4xl font-bold pt-4',
    2: 'text-3xl font-bold pt-2',
    3: 'text-2xl text-gray-700 pt-2',
    4: 'text-xl pt-1',
    5: 'text-lg pt-1',
  }
  return map[level]
}

const markdownBlogPostRenderer = new marked.Renderer();

markdownBlogPostRenderer.heading = (text, level) => {
  return `
    <h${level} class="${mapHeadingLevelToTailwindClass(level)}">
      ${text}
    </h${level}>`;
}

markdownBlogPostRenderer.list = (text, ordered, start) => {
  console.log({ordered, start});
  if (ordered) {
    return `
      <ol start=${start} class="list-decimal">
        ${text}
      </ol>`;
  } else {
    return `
      <ul class="list-disc">
        ${text}
      </ul>`;
  }
}

markdownBlogPostRenderer.listitem = (text) => {
  return `
    <li class="ml-4">
      ${text}
    </li>`;
}


export default {
  markdownBlogPostRenderer: (rawContent) => marked(rawContent, { renderer: markdownBlogPostRenderer })
}