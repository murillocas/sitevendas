export const metadata = {
    title: 'site',
    description: 'site criado',
  }
  
  export default function testeLayout({ children }) {
   return (
     <>
     <body>{children}</body>
        <nav>
          <ul>
            <li> teste3 </li>
            <li> teste4</li>
  
          </ul>
        </nav>
        
    </>
    )
  }
  