import Head from 'next/head'

import Preloader from "../components/preloader"
import Navigation from "../components/navigation"
import Introduction from "../components/introduction"
import About from '../components/about'
import Services from '../components/services'
import Achievements from '../components/achievements'
import Details from '../components/details'
import Portfolio from '../components/portfolio'
import Testimonials from '../components/testimonials'


import Footer from "../components/footer"
import FloatingActionButton from "../components/floatingActionButton" 


import Form from '../components/form'

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

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navigation />

      <main>
        <Introduction /> 
        <About /> 
        <Services />
        <Achievements />
        <Details />
        <Portfolio />
        {/*
        // !Weird 800px tablets!: Images can be vertically centered in future?? 
        */}
        {/* 
          //TODO Pricing <- White
          //TODO Contact <- Red
          //TODO Footer <- Blue
        */}
        
        
        <Testimonials />
        <Form />
      </main>

      <FloatingActionButton />
      <Footer />  
    </React.Fragment>
  );
}
