import Container from '../components/container'
import MoreAnimals from '../components/more-animals'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'

import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

// Import or server config for our API
import { server } from '../lib/config'

export default function Index({ animals }) {
  const heroPost = animals[0]
  const morePosts = animals.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} | UT Austin</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreAnimals posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/animals`)
  const animals = await res.json()

  return {
    props: {
      animals,
    },
  }
}
