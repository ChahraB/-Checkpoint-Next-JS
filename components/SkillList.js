import styles from "@/styles/SkillList.module.css";

export default function SkillList({ skills }) {
  return (
    <div className={styles.grid}>
      {skills.map((skill) => (
        <article key={skill.name} className={styles.card}>
          <div className={styles.header}>
            <span className={styles.name}>{skill.name}</span>
            <span className={styles.category}>{skill.category}</span>
          </div>
          <div className={styles.bar} role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`Niveau ${skill.name}`}>
            <div className={styles.fill} style={{ width: `${skill.level}%` }} />
          </div>
          <p className={styles.level}>{skill.level}%</p>
        </article>
      ))}
    </div>
  );
}
