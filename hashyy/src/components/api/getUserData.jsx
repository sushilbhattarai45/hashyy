import axios from "axios";
import { request, gql, GraphQLClient } from "graphql-request";
export async function getSearchUserData(nameofuser) {
  const graphQLClient = new GraphQLClient("https://gql.hashnode.com/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const queryUser = gql`
    query User($username: String!) {
      user(username: $username) {
        id
        username
        name
        bio {
          markdown
          html
          text
        }

        profilePicture
        socialMediaLinks {
          website
          github
          twitter
          instagram
          facebook
          stackoverflow
          linkedin
          youtube
        }
        publications(first: 10) {
          edges {
            node {
              title
              url
            }
          }
        }
        badges {
          id
          name
          description
          image
          dateAssigned
          infoURL
          suppressed
        }

        followersCount
        followingsCount
        tagline
        dateJoined
        location
        availableFor
        tagsFollowing {
          id
          name
          slug
          logo
          tagline
          followersCount
          postsCount
        }
      }
    }
  `;
  const variables = { username: nameofuser };

  const results = await graphQLClient.request(queryUser, variables);
  return results;
}
