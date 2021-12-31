import Head from 'next/head'

export const HeadInfo = ({ metadata = {} }) => {
  const metadataSEO = {
    title: metadata.title || 'JAMSTCK | BLOG',
    description: metadata.description || 'Web development blog'
  }
  return (
    <Head>
        <title>
            {metadataSEO.title}
        </title>
        <meta name="description" content={metadataSEO.description} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap"
        rel="stylesheet"/>
    </Head>
  )
}
