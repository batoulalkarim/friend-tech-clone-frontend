import styles from "../styles/Header.module.scss";
import Image from "next/image";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.friendText}>friend.</span>
        <span className={styles.techText}>tech</span>
      </div>
      <div className={styles.right}>
        <div className={styles.balanceContainer}>
          <div className={styles.ethLogo}>
            <Image
              alt=" "
              src="/header/ethlogo-blue.svg"
              height={16}
              width={13}
            />
          </div>
          <div className={styles.balance}>
            <p className={styles.balanceText}>8.32429</p>
            <p className={styles.balanceText}>ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
