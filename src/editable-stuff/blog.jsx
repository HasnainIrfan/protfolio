import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog = new BlogBuilder({
  title: "NFT smart contracts and their potential uses",
  image: "img",
  description:"NFT smart contracts. In the world of blockchain, a smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. NFTs are unique digital assets that are verified on a blockchain and cannot be exchanged for other tokens or assets",
  url: "https://medium.com/coinmonks/nft-smart-contracts-and-their-potential-uses-8cda4b579aa8"
})


const blog1 = new BlogBuilder({
  title: "Deploy Your NFT Contract to Goerli Testnet",
  image: "img",
  description: "Networks are different Ethereum environments You can access them for Development, Testing, and Production. Since Ethereum is a protocol then there may be multiple Ethereum networks here are some abstract lists",
  url: "https://medium.com/coinmonks/deploy-your-nft-contract-to-goerli-testnet-523d4fef731b"
})


bloglist.push(blog1);
bloglist.push(blog);

export default bloglist;
