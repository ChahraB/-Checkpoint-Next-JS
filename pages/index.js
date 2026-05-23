import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import SkillList from "@/components/SkillList";
import { fetchHomePageData } from "@/lib/serverData";
import styles from "@/styles/Home.module.css";

export default function HomePage({ profile, skills, generatedAt }) {
  const renderedAt = new Date(generatedAt).toLocaleString("fr-FR");

  return (
    <Layout>
      <Head>
        <title>{profile.name} — Portfolio</title>
      </Head>

      <section className={styles.hero}>
        <div>
          <p className={styles.greeting}>Bonjour, je suis</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.tagline}>{profile.tagline}</p>
          <div className={styles.cta}>
            <Link href="/projects" className={styles.btnPrimary}>
              Voir mes projets
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Me contacter
            </Link>
          </div>
          
        </div>
        <div className={styles.avatarWrap}>
          <div className={styles.avatarRing} aria-hidden="true" />
          <div className={styles.avatar}>
            <Image
              src="/images/profile.svg"
              alt={`Photo de profil de ${profile.name}`}
              width={220}
              height={220}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="skills-heading">
        <h2 id="skills-heading" className={styles.sectionTitle}>
          Compétences principales
        </h2>
        <SkillList skills={skills} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await fetchHomePageData();
  return {
    props: data,
  };
}
