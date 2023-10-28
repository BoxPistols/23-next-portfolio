import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

interface BlogData {
  frontmatter: {
    id: number
    title: string
    date: string
    category: string
    image: string
    excerpt: string
  }
}

export async function getAllBlogs() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'app', 'data'))
  console.log(files)

  const blogs = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const fileData = fs.readFileSync(
      path.join('src', 'app', 'data', fileName),
      'utf-8'
    )
    const { data } = matter(fileData)
    return {
      frontmatter: {
        ...data,
        // date: new Date(data.date).toISOString(),
        // 時間を日本の時間にする
        date: new Date(data.date).toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      },
      slug: slug,
    }
  })
  console.log(blogs)

  return {
    blogs: blogs,
  }
}

export default async function Blog({}: { blogs: BlogData[] }) {
  const { blogs } = await getAllBlogs()
  console.log(blogs)

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {blogs ? (
          blogs.map((blog: any, index: any) => (
            <li key={index}>
              {console.log(blog.frontmatter.title) as any}
              <h2>{blog.frontmatter.title}</h2>
              <p>{blog.frontmatter.date}</p>
              <p>{blog.frontmatter.category}</p>
              <p>{blog.frontmatter.excerpt}</p>
              <Link href={`/blog/${blog.slug}`}>{blog.frontmatter.title}</Link>
            </li>
          ))
        ) : (
          <>not blog...</>
        )}
      </ul>
    </>
  )
}
