import { useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    const img = document.querySelector('img');
    let position = 0;
    let goingUp = true;
    const amplitude = 70;
    const speed = 5;

    function animate() {
      if (goingUp) {
        position += speed;
        if (position >= amplitude) {
          goingUp = false;
        }
      } else {
        position -= speed;
        if (position <= 0) {
          goingUp = true;
        }
      }
      
      if (img) {
        img.style.transform = `translateY(${position}px)`;
      }
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <>
      <Head>
        <title>Jens Baltrusch Fotokollektion</title>
        <meta name="description" content="Jens Baltrusch Fotokollektion" />
        <meta name="keywords" content="Jens Baltrusch Fotokollektion" />
        <meta name="author" content="Jens Baltrusch" />
      </Head>
      <main className={styles.main}>
        <h1>alda alda</h1>
        <img src="/messi.jpg" alt="bild1" />
        <img src="/dildo.jpg" alt="bild2" />
      </main>
    </>
  );
}
