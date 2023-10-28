import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import ReactMarkdown from 'react-markdown'

export async function load({ params }: any) {
  const { slug } = params
  const filePath = path.join('src', 'app', 'data', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const singleDocument = matter(fileContents)
  return {
    props: singleDocument,
  }
}

const SingleBlog = ({ singleDocument }: any) => {
  return (
    <>
      <p>詳細ページ</p>
      {console.log(singleDocument) as any}
      {/* <h1>{singleDocument.data.title}</h1>
      <p>{singleDocument.data.date}</p>
      <p>{singleDocument.data.category}</p>
      <p>{singleDocument.data.excerpt}</p>
      <ReactMarkdown>{singleDocument.content}</ReactMarkdown> */}
    </>
  )
}

export default SingleBlog

export async function generateStaticPaths() {
  async function getAllBlogs() {
    const files = fs.readdirSync(path.join('src', 'app', 'data'))
    const blogs = files.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const fileData = fs.readFileSync(
        path.join('src', 'app', 'data', fileName),
        'utf-8'
      )
      const { data } = matter(fileData)
      console.log(data)
      return { frontmatter: data, slug: slug }
    })
    return {
      blogs: blogs,
    }
  }
  const { blogs } = await getAllBlogs()

  const paths = blogs.map((blog: any) => `/blog/${blog.slug}`)
  return {
    paths,
    fallback: false,
  }
}
