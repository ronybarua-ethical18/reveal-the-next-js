import articleStyles from '../styles/Articles.module.css'
import ArticleItem from './ArticleItem'

export default function Articles({articles}) {
    return (
        <div className={articleStyles.grid}>
            {
                articles.map(article => <ArticleItem key ={article.id} article={article}/>)
            }
        </div>
    )
}
