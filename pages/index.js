import Head from 'next/head'

import Preloader from "../components/preloader"
import Navigation from "../components/navigation"
import Introduction from "../components/introduction"
import About from '../components/about'
import Services from '../components/services'

import Footer from "../components/footer"
import Achievements from '../components/achievements'
import Testimonial from '../components/testimonial'

import Form from '../components/form'
import FloatingActionButton from "../components/floatingActionButton" 

import { useState, useEffect } from 'react'
import Details from '../components/details'

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
        {/*
        // TODO: Images can be vertically centered in future?? 
        */}
        {/* 
        
        Portfolio
        Pricing
        Contact
        */}
      
        
        <Testimonial />
        <Form />
      </main>

      <FloatingActionButton />
      <Footer />  
    </React.Fragment>
  );
}
