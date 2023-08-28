import './globals.css'
import './home.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section>
        <h1 className='mainTitle'>Stay Tuned for more . . .</h1>
        <div className="logo">
          <a title='github' href="https://github.com/AdrianBonpin"><Image src="/logos/github.png" width={40} height={40} alt='github logo' className='github'></Image></a>
          <a title='instagram' href="https://instagram.com/adrianbonpin/"><Image src="/logos/instagram.png" width={40} height={40} alt='github logo' className='instagram'></Image></a>
        </div>
      </section>
    </main>
  )
}
