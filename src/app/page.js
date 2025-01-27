import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.intro}>
      Hello Next

      <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
    </div>
  );
}
