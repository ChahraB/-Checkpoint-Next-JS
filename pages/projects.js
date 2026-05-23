import Head from "next/head";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { fetchProjectsPageData } from "@/lib/serverData";
import styles from "@/styles/Projects.module.css";

export default function ProjectsPage({ projects, totalCount, generatedAt }) {
  const renderedAt = new Date(generatedAt).toLocaleString("fr-FR");

  return (
    <Layout
      title="Projets"
      subtitle="Une sélection de réalisations techniques avec aperçus visuels."
    >
      <Head>
        <title>Projets — Portfolio</title>
      </Head>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await fetchProjectsPageData();
  return {
    props: data,
  };
}
