import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Image src="/image/logo-home.png" width={160} height={80} alt="logo vinicius jose" />
        <ul>
          <li>serviços</li>
          <li>projetos</li>
          <li>sobre min</li>
          <li>contato</li>
        </ul>
      </nav>
    </header>
  )
}