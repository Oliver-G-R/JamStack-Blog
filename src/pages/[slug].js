import { MDXRemote } from 'next-mdx-remote'
import { getAllMDXComponent, getMDXComponentBySlug } from 'lib/mdx'
import MDXComponents from 'components/MDXComponents'
import { LayoutPost } from 'components/MDXComponents/LayoutPost'

export default function Post ({ source, frontMatter }) {
  return <LayoutPost metadata={frontMatter}>
    <MDXRemote {...source} components={MDXComponents} />
  </LayoutPost>
}

export const getStaticProps = async ({ params }) => {
  const { source, frontMatter } = await getMDXComponentBySlug(params.slug)

  return {
    props: {
      source,
      frontMatter
    }
  }
}

export const getStaticPaths = async () => {
  const posts = await getAllMDXComponent()

  const paths = posts.map((post) => ({
    params: {
      slug: post.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}
