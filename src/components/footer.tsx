import styles from "@/styles/footer.module.css"

export default function Footer() {
    return(
            <div className={styles.footer}>
                <p className={styles.p}>Email: restaurante@email.com</p>
                <p className={styles.p}>Telefone: 0000-0000</p>
                <p className={styles.p}>Redes sociais: @restaurante</p>
            </div>
    )
}