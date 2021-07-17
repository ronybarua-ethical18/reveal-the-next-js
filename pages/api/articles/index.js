// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {articles} from '../../../fakeData'
export default function handler(req, res) {
    res.status(200).json(articles)
}
