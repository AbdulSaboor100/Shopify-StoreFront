/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    reactStrictMode: true,
  },
  images: {
    domains: ["cdn.shopify.io"],
    loader: "akamai",
    path: "",
  },
  shopify: {
    storeDomain: "melfixel.myshopify.com",
    storefrontToken: "829dfae9126d2903a353a0fc81a923e6",
    storefrontApiVersion: "2022-07",
  },
};
