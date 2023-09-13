import styles from "../styles/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        <div className={styles.homeContainer}>
          <div>
            <Image
              className={styles.icon}
              alt=" "
              src="/footer/homeIcon.png"
              height={48}
              width={48}
            />
          </div>
          <div className={styles.text}>Home</div>
        </div>
      </Link>
      <Link href="/chatrooms" className={styles.link}>
        <div className={styles.chatsContainer}>
          <div>
            <Image
              className={styles.icon}
              alt=" "
              src="/footer/messageIcon.png"
              height={48}
              width={48}
            />
          </div>
          <div className={styles.text}>Chats</div>
        </div>
      </Link>
      <Link href="/explore" className={styles.link}>
        <div className={styles.exploreContainer}>
          <div>
            <Image
              className={styles.icon}
              alt=" "
              src="/footer/exploreIcon.png"
              height={48}
              width={48}
            />
          </div>
          <div className={styles.text}>Explore</div>
        </div>
      </Link>
      <Link href="/airdrop" className={styles.link}>
        <div className={styles.airdropContainer}>
          <div>
            <Image
              className={styles.icon}
              alt=" "
              src="/footer/airdropIcon.png"
              height={48}
              width={48}
            />
          </div>
          <div className={styles.text}>Airdrop</div>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
