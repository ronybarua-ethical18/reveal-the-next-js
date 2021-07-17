import headerStyles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header>
            <h2 className={headerStyles.title}><span>WevDev</span>News</h2>
            <p>Keep up to date with latest wev dev technologies</p>
        </header>
    )
}
