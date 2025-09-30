import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to My Portfolio</h1>
      <Image
        className={styles.profileImage}
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
      />
      <p>I'm a web developer passionate about building awesome applications.</p>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
