import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <section className={styles.headerContent}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="IG NEWS" />
        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Posts</a>
        </nav>
        <SignInButton />
      </section>
    </header>
  );
};
