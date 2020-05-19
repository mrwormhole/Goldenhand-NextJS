import Head from 'next/head'
import Link from 'next/link'

import Navigation from "../components/navigation"
import Introduction from "../components/introduction"

import Footer from "../components/footer"
import Achievements from '../components/achievements'
import Testimonial from '../components/testimonial'
import Card from '../components/card'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Goldenhand Software</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Introduction />
        {/*console.log(process.env.API_KEY)*/}
        <Achievements />
        <Testimonial />
        
      </main>

      <Footer />  
    </React.Fragment>
  );
}
