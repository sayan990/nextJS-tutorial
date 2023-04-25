import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts"
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Mi nombre en Maximiliano, soy full Stack Developer, estoy en búsqueda
          de nuevos desafíos en una empresa donde pueda aportar valor desde mi
          experiencia y conocimientos dentro del área de IT. Empece a aprender
          con cursos en YT y un pequeño curso de JAVA, cuando encontre un
          bootcamp donde pude capacitarme en tecnologias como #React, #Redux,
          #HTML, #CSS, # JavaScript. Mail de contacto:
          maximilianocaceres1601@gmail.com
        </p>
        <p>
          (Esta es una web de ejemplo echa con un{" "}
          <a href="https://nextjs.org/learn">tutorial de Next.js </a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
