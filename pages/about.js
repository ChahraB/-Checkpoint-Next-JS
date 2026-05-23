import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { fetchAboutPageData } from "@/lib/serverData";
import styles from "@/styles/About.module.css";

export default function AboutPage({ profile}) {
  

  return (
    <Layout
      title="À propos"
      subtitle="Qui je suis, mon parcours et ce qui me motive."
    >
      <Head>
        <title>À propos — {profile.name}</title>
      </Head>

      <div className={styles.content}>
        <div className={styles.photo}>
          <Image
            src="/images/profile.svg"
            alt={`Portrait de ${profile.name}`}
            width={280}
            height={280}
          />
        </div>
        <div>
          <p className={styles.bio}>{profile.bio}</p>
          <ul className={styles.facts}>
            <li className={styles.fact}>
              <span className={styles.factLabel}>Nom</span>
              <span className={styles.factValue}>{profile.name}</span>
            </li>
            <li className={styles.fact}>
              <span className={styles.factLabel}>Rôle</span>
              <span className={styles.factValue}>{profile.title}</span>
            </li>
            <li className={styles.fact}>
              <span className={styles.factLabel}>Localisation</span>
              <span className={styles.factValue}>{profile.location}</span>
            </li>
            <li className={styles.fact}>
              <span className={styles.factLabel}>E-mail</span>
              <span className={styles.factValue}>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </span>
            </li>
          </ul>
         
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await fetchAboutPageData();
  return {
    props: data,
  };
}
