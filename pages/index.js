import { getAllProducts } from "../lib/shopify";
import styles from "../styles/Home.module.scss";
import Layout from "../Layouts/Layout";
import Container from "../components/Container/Container";
import AllProducts from "../components/AllProducts/AllProducts";
import Category from "../components/Category/Category";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllInfoQuery } from "../Queries/Queries";

export default function Home({ data }) {
  let [query, setQuery] = useState(``);
  let [category, setCategory] = useState("");
  let router = useRouter();
  useEffect(() => {
    if (category) {
      router.push({ category });
    }
  }, [category]);
  return (
    <div className={styles.home_page_container}>
      <Container>
        <Layout>
          <Category categories={data} setCategory={setCategory} />
          <AllProducts data={data} />
        </Layout>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const data = await getAllProducts(getAllInfoQuery);
    return { props: { data } };
  } catch (error) {
    return { props: { data: error } };
  }
}

// query nodes($ids: [ID!]!) {
//   nodes(ids: $ids) {
//     ...on Collection {
//       id
//       products(first: 1) {
//         edges {
//           node {
//             id
//             title
//           }
//         }
//       }
//     }
//   }
// }

// {
//   "ids": ["gid://shopify/Collection/402361876723"]
// }
