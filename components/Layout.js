import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";

export default function Layout({ children, title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className="container">
          {title && <h1 className={styles.pageTitle}>{title}</h1>}
          {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
