import Link from 'next/link'

export default function Homepage() {
  return (
      <div>
        <h1>Alura Cases - Home</h1>
          <Link legacyBehavior>
             <a id="/faq">Ir para o faq</a>
          </Link>
           
      </div>   
  )
}
