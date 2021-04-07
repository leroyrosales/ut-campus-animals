import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'
import Intro from '../components/intro'
import Container from './container'

export default function Header() {
  return (
    <section className="mt-16 mb-16 md:mb-12">
      <Container>
        <div>
          <Intro/>
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/">
              <a className="hover:underline">{ CMS_NAME }</a>
            </Link>
          </h1>
        </div>
      </Container>
    </section>
  )
}
