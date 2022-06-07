import { getAllProducts } from "../../lib/shopify";
import styles from "../../styles/Home.module.scss";
import Layout from "../../Layouts/Layout";
import Container from "../../components/Container/Container";
import AllProducts from "../../components/AllProducts/AllProducts";
import Category from "../../components/Category/Category";
import { useEffect, useState } from "react";
import { getCollectionInfoQuery } from "../../Queries/Queries";

export default function Home({ data, categoryData }) {
  return (
    <div className={styles.home_page_container}>
      <Container>
        <Layout>
          <Category categories={categoryData?.data?.products?.edges} />
          <AllProducts data={data.products.edges} />
        </Layout>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const variables = {
    ids: [`gid://shopify/Collection/${context.params.id}`],
  };
  try {
    const data = await getAllProducts(getCollectionInfoQuery, variables);
    return {
      props: { data: data.allProducts[0], categoryData: data.products },
    };
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
