import styles from '@/styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return(
            <div className={styles.navbar}>
                <Link className={styles.link} href="/">Cardapio</Link>
                <Link className={styles.logo} href="/"><img alt="Logo"/></Link>
                <Link className={styles.link} href={"/"}>Carrinho</Link>
            </div>
    )
}