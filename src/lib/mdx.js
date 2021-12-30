import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const rootDir = path.join(process.cwd(), 'src')

const getAllMDXComponent = () =>
  fs.readdirSync(path.join(rootDir, 'posts'))

const getMDXComponentBySlug = async (slug) => {
  const mdxComponent = fs.readFileSync(
    path.join(rootDir, 'posts', `${slug}.mdx`),
    'utf8'
  )

  const { data, content } = await matter(mdxComponent)
  const source = await serialize(content, {})

  return {
    source,
    frontMatter: {
      slug,
      ...data
    }
  }
}

const getAllMDXComponentsMetadata = () => {
  const files = getAllMDXComponent()

  return files.reduce((posts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(rootDir, 'posts', postSlug),
      'utf8'
    )

    const { data } = matter(mdxSource)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...posts
    ]
  }, [])
}

export {
  getAllMDXComponent,
  getMDXComponentBySlug,
  getAllMDXComponentsMetadata
}
