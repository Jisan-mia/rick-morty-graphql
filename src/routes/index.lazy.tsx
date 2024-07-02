import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useCharactersQuery } from "../components/characters/characters.generated";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [search, setSearch] = useState("");
  const { loading, error, data } = useCharactersQuery({
    variables: { name: search },
  });
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const characters = data?.characters?.results;

  return (
    <div className="p-2">
      <div>
        <input
          className="border border-gray-500 mb-2 px-1.5 py-1"
          value={search}
          onChange={handleSearch}
          placeholder="search here"
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-start">
        {characters && characters?.length > 0
          ? characters.map((character, index) => (
              <div key={character?.id ?? index} className="w-full">
                <img src={character?.image || ""} alt="Character Image" />
                <p>
                  {character?.name ?? "No name: something is wrong"} -&nbsp;
                  <span>{character?.gender}</span> -{" "}
                  <span>{character?.species}</span>
                </p>
              </div>
            ))
          : !loading && <p>No characters found</p>}
      </div>
    </div>
  );
}
