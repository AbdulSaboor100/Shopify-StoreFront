import React from "react";
import styles from "./AllProducts.module.scss";
import { GridContainer, GridItem } from "../Grid/Grid";
import Image from "next/image";
import { addToCard } from "../../lib/shopify";
import { addToCardMutation } from "../../Mutation/Mutation";

const AllProducts = ({ data }) => {
  async function addToCardFunc(id, currencyCode, totalAmount) {
    try {
      const data = await addToCard(addToCardMutation());
      console.log(data);
      return { addCardData: data };
    } catch (error) {
      return { error };
    }
  }
  return (
    <div className={styles.all_products_container}>
      <GridContainer>
        {data?.map((item, index) => (
          <GridItem size={4} key={index}>
            <div className={styles.product_card} id={item?.node?.id}>
              <div className={styles.card_img}>
                <Image
                  src={item?.node?.featuredImage?.url}
                  layout="fill"
                  objectFit="cover"
                  alt="women skirt"
                />
              </div>
              <div className={styles.card_content}>
                <div>
                  <small>Name : {item?.node?.title}</small>
                  <small>Description : {item?.node?.description}</small>
                  <small>
                    {item?.node?.priceRange?.maxVariantPrice?.currencyCode}
                    {"  "}
                    {item?.node?.priceRange?.maxVariantPrice?.amount}
                  </small>
                </div>
                <div className={styles.btn_container}>
                  <button
                    onClick={() =>
                      addToCardFunc(
                        item?.node?.id,
                        item?.node?.priceRange?.maxVariantPrice?.currencyCode,
                        item?.node?.priceRange?.maxVariantPrice?.amount
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};

export default AllProducts;
