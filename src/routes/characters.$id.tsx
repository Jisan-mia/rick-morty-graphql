import { createFileRoute } from "@tanstack/react-router";
import { useCharacterQuery } from "../components/characters/characters.generated";

export const Route = createFileRoute("/characters/$id")({
  component: CharacterItem,
});

function CharacterItem() {
  const { id } = Route.useParams();
  const { loading, error, data } = useCharacterQuery({
    variables: { id: id },
  });

  const character = data?.character;
  return (
    <div className="p-2">
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}

      {character && (
        <div key={character?.id} className="w-full ">
          <img src={character?.image || ""} alt="Character Image" />
          <p>
            {character?.name ?? "No name: something is wrong"} -&nbsp;
            <span>{character?.gender}</span> - <span>{character?.species}</span>
          </p>
        </div>
      )}
    </div>
  );
}
