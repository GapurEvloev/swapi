import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

import styles from "./Layout.module.scss"

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <footer><center>2022</center></footer>
    </div>
  )
}

export default Layout;