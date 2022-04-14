import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simcoe County Malt Inc.</title>
        <meta
          name='description'
          content='Ontario Grain.Ontario Malt. Better inredients make better beer.'
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <div className={styles.logoWrapper}>
        <Image
          src='/logoredsuare.png'
          alt='Simcoe County Malt Inc.'
          height='402'
          width='402'
          layout='responsive'
        />
      </div>
      <div className={styles.headLine}>
        <h1>WEBSITE UNDER CONSTRUCTION</h1>
      </div>
      <div className={styles.email}>
        <FiMail className={styles.icon} />
        <a
          className={styles.emailAddress}
          href='mailto:info@simcoecountymalt.com'
        >
          SEND US A MESSAGE
        </a>
      </div>
      <div className={styles.phone}>
        <FiPhoneCall className={styles.icon} />
        <a className={styles.phoneNumber} href='tel:249-313-1331'>
          GIVE US A CALL
        </a>
      </div>
      <div className={styles.phoneDesktop}>
        <FiPhoneCall className={styles.icon} />
        <span>+1-249-313-1331</span>
      </div>
    </div>
  );
}
