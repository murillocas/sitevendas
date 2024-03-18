import Link from "next/link"
import styles from "./page.module.css"
import "./globals.css";


export const metadata = {
  title: 'site',
  description: 'site criado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <nav class="flex justify-end bg-red-600">
            <ul class="flex ">
              <li class="m-1"> <Link href={"/teste"}> teste </Link>   </li>

              <li class="m-1"> <Link href={"/singIn"}> singIn </Link>   </li>

              <li class="m-1"> <Link href={"/"}> HOME </Link>   </li>
            </ul>
          </nav>

        </header>

        <main > {children}</main>

        <footer class="flex justify-center bg-neutral-700">
         <p> entre em contato em email@email.com </p> 
        </footer>


      </body>
    </html>
  )
}
