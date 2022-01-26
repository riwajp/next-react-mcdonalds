import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.main}>{children}</div>
    </div>
  );
};
export default Layout;
