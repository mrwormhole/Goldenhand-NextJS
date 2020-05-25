import Head from 'next/head'
import Link from 'next/link'

import Navigation from "../components/navigation"
import Introduction from "../components/introduction"

import Footer from "../components/footer"
import Achievements from '../components/achievements'
import Testimonial from '../components/testimonial'
import Card from '../components/card'
import Form from '../components/form'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Goldenhand Software</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>  
        <Introduction />
        <Form />
        <Achievements />
        <Testimonial />
        <Card />
      </main>

      <Footer />  
    </React.Fragment>
  );
}
