import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body';
import Header from '../../components/Header';
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

import { getPostBySlug, getAllPosts } from '../../lib/api'

// https://www.nextjs.cn/docs/basic-features/pages
function Post({ post, morePosts, preview }) {
    // Render post...
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-5">
                 <Header/>
                 {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                    ) :  (
                        <>
                            <Head>
                                <title>
                                    {post.title} | Next.js Blog Example with {CMS_NAME}
                                </title>
                            </Head>
                            <PostBody content={post.content} />
                        </>
                    )
                    }
            </div>
        </div>
      )
}

// 此函数在构建时被调用
export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

// 在构建时也会被调用
export async function getStaticProps({ params }) {
    // // params 包含此片博文的 `id` 信息。
    // // 如果路由是 /posts/1，那么 params.id 就是 1
    // const res = await fetch(`https://.../posts/${params.id}`)
    // const post = await res.json()
  
    // // 通过 props 参数向页面传递博文的数据
    // return { props: { post } }

    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
      ])
      const content = await markdownToHtml(post.content || '')
    
      // 通过 props 参数向页面传递博文的数据
      return {
        props: {
          post: {
            ...post,
            content,
          },
        },
      }
  }
  
  export default Post