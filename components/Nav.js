import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.navbar}>
            <div className={navStyles.navbar__title}><Link href='/'>Mini News</Link></div>
            <div className={navStyles.navbar__item}><Link href='/about'>About</Link></div>
            <div className={navStyles.navbar__item}><Link href='#'>Search</Link></div>
        </nav>
    )
}
export default Nav