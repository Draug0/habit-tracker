import CardContainer from "../components/molecules/cardContainer/cardContainer";
import Layout from "../components/organisms/layout/layout";

const habits = [
  { title: '1' },
  { title: '2' },
  { title: '3' },
  { title: '4' },
  { title: '5' },
  { title: '6' },
]

export default function Home() {
  return (
    <Layout>
      <CardContainer habits={habits} />
    </Layout>
  );
}
