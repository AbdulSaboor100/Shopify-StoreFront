const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query, variables) {
  const URL = `https://melfixel.myshopify.com/api/2022-07/graphql.json`;
  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": "829dfae9126d2903a353a0fc81a923e6",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(variables ? { query, variables } : { query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getAllProducts(query, variables) {
  const response = await ShopifyData(query, variables);
  if (variables) {
    const allProducts = response?.data?.nodes;
    const result = { allProducts, products: response };
    return result;
  } else {
    const allProducts = response?.data?.products?.edges
      ? response?.data?.products?.edges
      : [];
    return allProducts;
  }
}

export async function getAllCart(query, variables) {
  try {
    const response = await ShopifyData(query, variables);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addToCard(mutation, variables) {
  try {
    const response = await ShopifyData(mutation, variables);
    const allProducts = response;
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}
