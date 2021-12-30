import Head from 'next/head'

export const HeadInfo = ({ title, description }) => {
  return (
    <Head>
        <title>
            {title}
        </title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap"
        rel="stylesheet"/>
    </Head>
  )
}
