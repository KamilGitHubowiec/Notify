import React from "react";
import styles from "./HomePage.module.scss";
import Table from "../../components/Table/Table";
import AddNote from "../../components/AddNote/AddNote";

const HomePage = () => {
  return (
    <main className={styles.home_page_container}>
      <AddNote />
      <Table />
    </main>
  )
}

export default HomePage;