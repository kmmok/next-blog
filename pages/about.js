import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
//import { getCollectionItem } from '../lib/collections';


export default function About({page}) {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <p>{page.title}</p>
        <p>{page.subtitle}</p> */}
      </section>


    </Layout>
  );
}


// export async function getStaticProps({ params }) {
// 	const page = await getCollectionItem('pages', 'about');
// 	return {
// 		props: {
// 			page: JSON.parse(JSON.stringify(page)),
// 		}
// 	};
// }