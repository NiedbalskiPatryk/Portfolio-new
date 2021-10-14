import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/organisms/Header/Header';
import SectionTitle from '../components/atomic/SectionTitle/SectionTitle';
import styles from '../styles/layout.module.scss';
import Hero from '../components/molecules/Hero/Hero';
import FrontImage from '../components/molecules/FrontImage/FrontImage';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
      <FrontImage />
      <SectionTitle>About</SectionTitle>
    </div>
  );
};

export default Home;
