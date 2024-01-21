import axios from "axios";
import { request, gql, GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient("https://gql.hashnode.com/", {
  headers: {
    "Content-Type": "application/json",
  },
});
const query = gql`
  query Publication {
    publication(host: "sushilbhattarai.hashnode.dev") {
      isTeam
      title
      posts(first: 10) {
        edges {
          node {
            title
            brief
            url
            content {
              html
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
const results = await graphQLClient.request(query);
const data = JSON.stringify(results.publication.posts.edges[0]);
const tagRegExp = new RegExp("<s*[^>]*>", "g");
let test = data.replace(tagRegExp, "");
console.log(JSON.parse(test));
