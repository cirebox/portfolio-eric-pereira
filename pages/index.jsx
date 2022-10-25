import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h2>IOT</h2>
          <h2>Mobile</h2>      
          <h2>Desktop</h2>
          <h2>WEBSITES</h2>          
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Eric Pereira</h1>
            <h6 className={styles.bio}>Desenvolvedor Full Stack</h6>
            <Link href="/projects">
              <button className={styles.button}>Veja meus projetos</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contato</button>
            </Link>
          </div>
          <img src="background.svg"  className={styles.illustration} alt="" />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
