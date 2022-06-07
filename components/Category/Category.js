import React from "react";
import styles from "./Category.module.scss";
import { useRouter } from "next/router";

const Category = ({ categories }) => {
  let router = useRouter();
  function extractNumbers(txt) {
    let numb = txt.match(/\d/g);
    numb = numb.join("");
    return numb;
  }
  return (
    <div className={styles.category_container}>
      <div className={styles.category}>
        <select
          name="category"
          id="category"
          onChange={(e) => {
            router.push(`/categories/${extractNumbers(e.target.value)}`);
          }}
        >
          <option value="mens" disabled>
            Categories
          </option>
          {categories?.map((item, index) => (
            <option
              value={item?.node?.collections?.edges[0]?.node?.id}
              key={index}
              id={item?.node?.collections?.edges[0]?.node?.id}
            >
              {item?.node?.collections?.edges[0]?.node?.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Category;
