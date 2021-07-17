import Link from 'next/link'
import articleItemStyles from '../styles/ArticleItem.module.css'

export default function ArticleItem({article}) {
    return (
        <Link href="/article/[id]" as ={`article/${article.id}`}>
            <a className={articleItemStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.desc}</p>
            </a>
        </Link>
    )
}
