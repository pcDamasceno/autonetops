import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import  {
    Scalars,
    InputMaybe,
    Exact,
    PublicationNavigationType
} from './graphql'


export type SeriesByPublicationQueryVariables = Exact<{
    host: Scalars['String']['input'];
    first: Scalars['Int']['input'];
    after?: InputMaybe<Scalars['String']['input']>;
  }>;
  
  // Query result type for series data
  export type SeriesByPublicationQuery = {
    __typename?: 'Query';
    publication?: {
      __typename?: 'Publication';
      id: string,
      title: string,
      displayTitle?: string | null,
      url: string,
      metaTags?: string | null,
      favicon?: string | null,
      isTeam: boolean,
      followersCount?: number | null,
      descriptionSEO?: string | null,
      seriesList?: {
        __typename?: 'SeriesConnection'; // Adjust according to your schema
        edges: Array<{
          __typename?: 'SeriesEdge'; // Adjust according to your schema
          node: {
            __typename?: 'Series'; // Adjust according to your schema
            name: string;
            slug: string;
            description?: {
              __typename?: 'Content'; // Adjust according to your schema
              markdown?: string | null; // Assuming markdown can be null
            } | null; // Assuming description can be null
            coverImage?: string | null; // Assuming coverImage can be null
            posts: {
              __typename?: 'PostConnection'; // Adjust according to your schema
              totalDocuments: number; // Total number of posts in the series
            };
          };
        }>;
      } | null;
      preferences: {
        __typename?: 'Preferences',
        logo?: string | null,
        darkMode?: {
          __typename?: 'DarkModePreferences',
          logo?: string | null
        } | null,
        navbarItems: Array<{
          __typename?: 'PublicationNavbarItem',
          id: string,
          type: PublicationNavigationType,
          label?: string | null,
          url?: string | null
        }>
      }
    } | null;
  };


export const TagPostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagPostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tagSlugs"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]} as unknown as DocumentNode<TagPostsByPublicationQuery, TagPostsByPublicationQueryVariables>;
/**
 * MY CREATED ONES
**/
export const SeriesByPublicationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "SeriesByPublication" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "host" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "publication" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "host" },
                value: { kind: "Variable", name: { kind: "Name", value: "host" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } }, // id of publication
                { kind: "Field", name: { kind: "Name", value: "title" } }, // title of publication
                { kind: "Field", name: { kind: "Name", value: "displayTitle" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "metaTags" } },
                { kind: "Field", name: { kind: "Name", value: "favicon" } },
                { kind: "Field", name: { kind: "Name", value: "isTeam" } },
                { kind: "Field", name: { kind: "Name", value: "followersCount" } },
                { kind: "Field", name: { kind: "Name", value: "descriptionSEO" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "seriesList" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edges" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "node" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "slug" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "description" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "markdown" } },
                                      ],
                                    },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "coverImage" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "posts" },
                                    arguments: [
                                      {
                                        kind: "Argument",
                                        name: { kind: "Name", value: "first" },
                                        value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "totalDocuments" },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "preferences" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "logo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "darkMode" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "logo" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "navbarItems" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "type" } },
                            { kind: "Field", name: { kind: "Name", value: "label" } },
                            { kind: "Field", name: { kind: "Name", value: "url" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeriesByPublicationQuery, SeriesByPublicationQueryVariables>;