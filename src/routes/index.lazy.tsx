import { gql, useQuery } from "@apollo/client";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const GET_CHARACTERS = gql`
  query Characters($name: String) {
    characters(filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        species
        status
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;

function Index() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.characters.results.map(({ id, name, status }) => (
    <div key={id}>
      <h3>{name}</h3>
      <br />
      <p>{status}</p>
      <br />
    </div>
  ));
}
