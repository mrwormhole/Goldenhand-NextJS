import Head from 'next/head'

import Preloader from "../components/preloader"
import Navigation from "../components/navigation"
import Introduction from "../components/introduction"

import Footer from "../components/footer"
import Achievements from '../components/achievements'
import Testimonial from '../components/testimonial'
import Card from '../components/card'
import Form from '../components/form'
import FloatingActionButton from "../components/floatingActionButton" 

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { 
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  if (isLoading) {
    return (
      <Preloader />
    );
  }

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

      <FloatingActionButton />
      <Footer />  
    </React.Fragment>
  );
}
