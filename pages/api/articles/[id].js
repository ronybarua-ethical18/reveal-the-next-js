// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {articles} from '../../../fakeData'
export default function handler({query: {id}}, res) {
  const filtered = articles.filter(article => article.id === id)
  if(filtered.length > 0){
    res.status(200).json(filtered[0])
  }else{
    res.status(404).json({message: `Something went wrong`})
  }
}