import Articles from '../Components/Articles'
import {server} from '../config/index'
export default function Home({ articles }) {
  console.log(articles)
  return (
    <>
      <h1>WebDev News</h1>
      <Articles articles={articles}/>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}
