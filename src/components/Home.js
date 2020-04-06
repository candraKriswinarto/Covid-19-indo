import React from 'react';
import { Hero } from './Hero';
import { Statistics } from './Statistics';
import { Provinsi } from './Provinsi';
import { Footer } from './Footer';

export const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Provinsi />
      <Footer />
    </>
  )
}
