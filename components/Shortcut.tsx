import styles from "../styles/Shortcut.module.scss";
import Image from "next/image";

const Shortcut = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.icon}
          alt=" "
          src="/footer/friendtechlogowhite.png"
          height={64}
          width={64}
        />
      </div>
    </div>
  );
};

export default Shortcut;
