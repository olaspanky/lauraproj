import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { logo } from '../public/laura'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Press from '@/components/Press'
import Services from '@/components/Services'
import Services2 from '@/components/Services2'
import Projects from '@/components/Projects'
import Pricing from '@/components/Pricing'
import Writings from '@/components/Writings'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Hero/>
      <Press/>
      <Services/>
      <Services2/>
      <Projects/>
      <Pricing/>
      <Writings/>
      


      

   


        
      
    </>
  )
}
