import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Witam!
          <br />
          <br /> Znam się na React, Netlify, Strapi, Next js, JAMstack,
          JavaScript (ES6), HTML5, CSS3, Git, Webpack. Mam więcej niż 15
          projektów na React. Mam doświadczenie w UI/UX. Znam Adobe XD,
          Photoshop, illustrator, figma etc. Z przyjemnością podejmę się
          wykonania zadania technicznego, jeśli takie istnieje.
          <br />
          <br />
          <u>Dostępność - natychmiast</u>
          <br />
          <b>Portfolio</b> -
          https://rainspistols.github.io/React-myPortfolio2020/; <br />
          <b>Github</b> - https://github.com/Rainspistols;
          <br />
          <b>LinkedIn</b> - https://www.linkedin.com/in/galchenko-max/;
          <br />
          <b>Telefon</b> - 576 284 759;
          <br /> Nie mogę pracować B2B bo jestem obcokrajowcem. UOP preferowana.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
