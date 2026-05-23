import Image from "next/image";
import styles from "@/styles/ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a
            href={project.demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Démo →
          </a>
          <a
            href={project.link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code →
          </a>
        </div>
      </div>
    </article>
  );
}
