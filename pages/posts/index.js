import Head from 'next/head'
import Header from '../../components/Header';
import PostList from '../../components/PostList';

export default function Index() {
  return (
    <div className="container px-24">
      <Head>
        <title>Liu Qing's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>
        <h2 className="text-3xl mb-3">
            Posts
        </h2>
        <div className="flex flex-row justify-between">
            <PostList/>
        </div>
    </div>
  )
}
