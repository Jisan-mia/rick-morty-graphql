import * as Types from "../../types";

import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
const defaultOptions = {} as const;
export type CharactersQueryVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
}>;

export type CharactersQuery = {
  __typename?: "Query";
  characters?: {
    __typename?: "Characters";
    info?: {
      __typename?: "Info";
      count?: number | null;
      pages?: number | null;
      next?: number | null;
      prev?: number | null;
    } | null;
    results?: Array<{
      __typename?: "Character";
      id?: string | null;
      name?: string | null;
      species?: string | null;
      status?: string | null;
      type?: string | null;
      gender?: string | null;
      image?: string | null;
      origin?: { __typename?: "Location"; name?: string | null } | null;
      location?: { __typename?: "Location"; name?: string | null } | null;
    } | null> | null;
  } | null;
};

export type CharacterQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type CharacterQuery = {
  __typename?: "Query";
  character?: {
    __typename?: "Character";
    id?: string | null;
    name?: string | null;
    species?: string | null;
    status?: string | null;
    type?: string | null;
    gender?: string | null;
    image?: string | null;
    origin?: { __typename?: "Location"; name?: string | null } | null;
    location?: { __typename?: "Location"; name?: string | null } | null;
  } | null;
};

export const CharactersDocument = gql`
  query Characters($name: String) {
    characters(filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
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

/**
 * __useCharactersQuery__
 *
 * To run a query within a React component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CharactersQuery,
    CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersDocument,
    options
  );
}
export function useCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CharactersQuery,
    CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersDocument,
    options
  );
}
export function useCharactersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CharactersQuery,
    CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersDocument,
    options
  );
}
export type CharactersQueryHookResult = ReturnType<typeof useCharactersQuery>;
export type CharactersLazyQueryHookResult = ReturnType<
  typeof useCharactersLazyQuery
>;
export type CharactersSuspenseQueryHookResult = ReturnType<
  typeof useCharactersSuspenseQuery
>;
export type CharactersQueryResult = Apollo.QueryResult<
  CharactersQuery,
  CharactersQueryVariables
>;
export const CharacterDocument = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
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
`;

/**
 * __useCharacterQuery__
 *
 * To run a query within a React component, call `useCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacterQuery(
  baseOptions: Apollo.QueryHookOptions<
    CharacterQuery,
    CharacterQueryVariables
  > &
    ({ variables: CharacterQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CharacterQuery, CharacterQueryVariables>(
    CharacterDocument,
    options
  );
}
export function useCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CharacterQuery,
    CharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CharacterQuery, CharacterQueryVariables>(
    CharacterDocument,
    options
  );
}
export function useCharacterSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CharacterQuery,
    CharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CharacterQuery, CharacterQueryVariables>(
    CharacterDocument,
    options
  );
}
export type CharacterQueryHookResult = ReturnType<typeof useCharacterQuery>;
export type CharacterLazyQueryHookResult = ReturnType<
  typeof useCharacterLazyQuery
>;
export type CharacterSuspenseQueryHookResult = ReturnType<
  typeof useCharacterSuspenseQuery
>;
export type CharacterQueryResult = Apollo.QueryResult<
  CharacterQuery,
  CharacterQueryVariables
>;
