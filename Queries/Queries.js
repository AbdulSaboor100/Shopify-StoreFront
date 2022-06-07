export const getAllInfoQuery = `{
    products(first: 5) {
      edges {
        node {
          id
          title
          description
          priceRange{
            maxVariantPrice{
              amount
              currencyCode
            }
          }
          collections(first:5){
            edges{
               node{
                title
                id
              }
            }
          }
          featuredImage {
            url
          }
        }
      }
    }
  }`;

export const getCollectionInfoQuery = `
    query nodes($ids: [ID!]!) {
    nodes(ids: $ids) {
      ...on Collection {
        id
        products(first: 1) {
          edges {
                  node {
            id
            title
            description
            priceRange{
              maxVariantPrice{
                amount
                currencyCode
              }
            }
            featuredImage {
              url
            }
          }
          }
        }
      }
    }
    products(first: 5) {
        edges {
          node {
            collections(first:5){
              edges{
                 node{
                  title
                  id
                }
              }
            }
          }
        }
      }
    }`;

export const getCartsById = (id) => {
  return `query {
    cart(
      id: "${id}"
    ) {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
              }
            }
            attributes {
              key
              value
            }
          }
        }
      }
      attributes {
        key
        value
      }
      estimatedCost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
    }
  }`;
};

export const getProductVariantQuery = () => {
  return `query{
    product(id:"gid://shopify/Product/7694885322995"){
      variants(first:5){
        nodes{
          id
        }
      }
    }
    }`;
};
