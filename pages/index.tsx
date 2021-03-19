import Head from 'next/head';
import Link from 'next/link';
import ButtonPrimary from '../components/ButtonPrimary';
import AppLayout from '../layouts/AppLayout';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <AppLayout pageTitle="Aurora UI" description="Aurora UI">
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <img src='/kabiiir23.svg' alt='kabiiir23' />
          <ButtonPrimary onClick={() => {}}>
        Here
          </ButtonPrimary> */}
          <div className={styles.wrapper}>

          
            <div className={styles.base && styles.one}></div>
            <div className={styles.base && styles.two}></div>
            <div className={styles.base && styles.three}></div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
