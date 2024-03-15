import Link from "next/link"
import styles from "./page.module.css"

export const metadata = {
  title: 'site',
  description: 'site criado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <nav className={styles.navegadorHeader}>
            <ul>
              <li> <Link href={"/teste"}> teste </Link>   </li>

              <li> <Link href={"/singIn"}> singIn </Link>   </li>

              <li> <Link href={"/"}> HOME </Link>   </li>
            </ul>
          </nav>

        </header>

        <main > {children}</main>

        <footer className={styles.footerLayout}>
         <p> entre em contato em email@email.com </p> 
        </footer>


      </body>
    </html>
  )
}
