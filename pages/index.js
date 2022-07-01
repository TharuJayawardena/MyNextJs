import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
       <title>Tharushi Jayawardena | Home</title>
       <meta name="keywords" content="Tharu"/>
    </Head>
   <div >
    
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Tharushi Jayawardena - Trainee Software Engineer. Lives in Galle. studied at G/Southlands College.Self Motivated and well team player. Has good communication skills</p>
      <p className={styles.text}>Tharushi Jayawardena - Trainee Software Engineer. Lives in Galle. studied at G/Southlands College.Self Motivated and well team player. Has good communication skills</p>
      <p className={styles.text}>Tharushi Jayawardena - Trainee Software Engineer. Lives in Galle. studied at G/Southlands College.Self Motivated and well team player. Has good communication skills</p>
      <p className={styles.text}>Tharushi Jayawardena - Trainee Software Engineer. Lives in Galle. studied at G/Southlands College.Self Motivated and well team player. Has good communication skills</p>
      <Link href="/new">
        <a className={styles.btn}>See My Qualifications</a>
      </Link>
    
    </div>
    </>
  )
}
