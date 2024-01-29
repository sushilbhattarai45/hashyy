import axios from "axios";
import { request, gql, GraphQLClient } from "graphql-request";
export async function getUserPost(url) {
  const graphQLClient = new GraphQLClient("https://gql.hashnode.com/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const queryPost = gql`
    query Publication($host: String!) {
      publication(host: $host) {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              comments(first: 20) {
                edges {
                  node {
                    id
                    content {
                      markdown
                    }
                  }
                }
              }
              title
              brief
              url
              coverImage {
                url
              }
              content {
                markdown
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
  const variables = { host: url };

  const results = await graphQLClient.request(queryPost, variables);
  //   const data = JSON.stringify(results.publication.posts.edges[0]);
  //   const tagRegExp = new RegExp("<s*[^>]*>", "g");
  //   let test = data.replace(tagRegExp, "");
  //   console.log(JSON.parse(test));
  return results.publication.posts.edges;
}
