import { request, gql } from "graphql-request";

const GRAPHQL_URL = "http://localhost:4000";

export async function getStages() {
  const query = gql`
    query StageWithTaskQuery {
      stages {
        name
        id
        tasks {
          title
          id
        }
      }
    }
  `;

  const { stages } = await request(GRAPHQL_URL, query);
  return stages
}
