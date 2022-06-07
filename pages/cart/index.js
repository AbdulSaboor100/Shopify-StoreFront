import { getAllCart } from "../../lib/shopify";
import styles from "../../styles/Home.module.scss";
import Layout from "../../Layouts/Layout";
import Container from "../../components/Container/Container";
import AllProducts from "../../components/AllProducts/AllProducts";
import Category from "../../components/Category/Category";
import { getCartsById } from "../../Queries/Queries";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className={styles.home_page_container}>
      <Container>
        <Layout>
          <h1>Cart</h1>
        </Layout>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const data = await getAllCart(
      getCartsById("gid://shopify/Cart/2821976f927ed50f4ba0ec804ffd8fb7")
    );
    return { props: { data: data } };
  } catch (error) {
    return { props: { data: error } };
  }
}
