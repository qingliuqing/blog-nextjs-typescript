// styles/index.css 将应用于应用程序中的所有页面和组件
// 由于样式表的全局特性，并且为了避免冲突，你应该 只在 pages/_app.js 文件中导入（import）样式表。
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
