import Head from "next/head";
import { useState } from "react";
import Layout from "@/components/Layout";
import { fetchContactPageData } from "@/lib/serverData";
import styles from "@/styles/Contact.module.css";

export default function ContactPage({ profile, generatedAt }) {
  const [submitted, setSubmitted] = useState(false);
  const renderedAt = new Date(generatedAt).toLocaleString("fr-FR");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout
      title="Contact"
      subtitle="Envoyez un message ou utilisez les coordonnées ci-dessous."
    >
      <Head>
        <title>Contact — {profile.name}</title>
      </Head>

      <div className={styles.layout}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <h3>E-mail</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className={styles.infoItem}>
            <h3>Localisation</h3>
            <p>{profile.location}</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Disponibilité</h3>
            <p>Ouverte aux opportunités et collaborations</p>
          </div>
          <p className={styles.hint}>Page pré-rendue côté serveur — {renderedAt}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.label}>
            Nom
            <input
              className={styles.input}
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Votre nom"
            />
          </label>
          <label className={styles.label}>
            E-mail
            <input
              className={styles.input}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="vous@exemple.com"
            />
          </label>
          <label className={styles.label}>
            Message
            <textarea
              className={styles.textarea}
              name="message"
              required
              placeholder="Votre message..."
            />
          </label>
          <button type="submit" className={styles.submit}>
            Envoyer
          </button>
          {submitted && (
            <p className={styles.hint} role="status">
              Merci ! Ce formulaire est une démo (aucun envoi réel).
            </p>
          )}
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await fetchContactPageData();
  return {
    props: data,
  };
}
