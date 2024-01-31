import axios from "axios";
import { request, gql, GraphQLClient } from "graphql-request";
export async function getPostDataFromURL(url) {
  const host = new URL(url).hostname;
  const slug = new URL(url).pathname.split("/")[1];
  console.log(slug);
  const graphQLClient = new GraphQLClient("https://gql.hashnode.com/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const queryUser = gql`
    query Publication($host: String!, $slug: String!) {
      publication(host: $host) {
        isTeam
        title

        author {
          username
          name
          profilePicture
        }
        post(slug: $slug) {
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
          url
          coverImage {
            url
          }
          title
          content {
            markdown
            html
          }
        }
      }
    }
  `;
  const variables = { host: host, slug: slug };

  const results = await graphQLClient.request(queryUser, variables);
  return results;
}
