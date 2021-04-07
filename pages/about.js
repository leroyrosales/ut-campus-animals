import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'

export default function about() {
    return (
        <>
        <Layout>
          <Head>
            <title>About {CMS_NAME} | UT Austin</title>
          </Head>
          <Container>
            <Header/>
          </Container>
        </Layout>
      </>
    )
}
