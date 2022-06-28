import CardContainer from "../../components/molecules/cardContainer/cardContainer";
import Layout from "../../components/organisms/layout/layout";
import styles from "./habits.module.scss";

const habits = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
  { title: "6" },
];

export default function Index() {
  return (
    <Layout>
      <div className={styles.container}>
        <CardContainer habits={habits} />
      </div>
    </Layout>
  );
}
