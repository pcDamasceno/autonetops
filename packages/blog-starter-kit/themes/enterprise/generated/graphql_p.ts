import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import  {
  Badge,  
  Scalars,
  InputMaybe,
  Content,
  Exact,
  Maybe,
  UserConnection,
  UserPostConnection,
  UserPublicationsConnection,
  PublicationNavigationType,
  SocialMediaLinks,
  Tag,
  TagPostsByPublicationQuery,
  TagPostsByPublicationQueryVariables,
  UserTagsConnection,

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
        cursor: string;
        node: {
          __typename?: 'Series'; // Adjust according to your schema
          id: string;
          name: string;
          slug: string;
          author: {
            __typename?: 'User';
            /**
             * Whether or not the user is an ambassador.
             * @deprecated Ambassadors program no longer active. Will be removed after 02/01/2024
             */
            ambassador: Scalars['Boolean']['output'];
            /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
            availableFor?: Maybe<Scalars['String']['output']>;
            /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
            badges: Array<Badge>;
            /** The bio of the user. Visible in about me section of the user's profile. */
            bio?: Maybe<Content>;
            /**
             * The bio of the user. Visible in about me section of the user's profile.
             * @deprecated Will be removed on 26/10/2023. Use bio instead of bioV2
             */
            bioV2?: Maybe<Content>;
            /** The date the user joined Hashnode. */
            dateJoined?: Maybe<Scalars['DateTime']['output']>;
            /** Whether or not the user is deactivated. */
            deactivated: Scalars['Boolean']['output'];
            /** The users who are following this user */
            followers: UserConnection;
            /** The number of users that follow the requested user. Visible in the user's profile. */
            followersCount: Scalars['Int']['output'];
            /**
             * Whether or not the authenticated user follows this user.
             * Returns false if the authenticated user this user.
             */
            following: Scalars['Boolean']['output'];
            /** The number of users that this user is following. Visible in the user's profile. */
            followingsCount: Scalars['Int']['output'];
            /** The users which this user is following */
            follows: UserConnection;
            /**
             * Whether or not this user follows the authenticated user.
             * Returns false if the authenticated user this user.
             */
            followsBack: Scalars['Boolean']['output'];
            /** The ID of the user. It can be used to identify the user. */
            id: Scalars['ID']['output'];
            /** Whether or not this is a pro user. */
            isPro: Scalars['Boolean']['output'];
            /** The location of the user. */
            location?: Maybe<Scalars['String']['output']>;
            /** The name of the user. */
            name: Scalars['String']['output'];
            /** Returns the list of posts the user has published. */
            posts: UserPostConnection;
            /** The URL to the profile picture of the user. */
            profilePicture?: Maybe<Scalars['String']['output']>;
            /** Publications associated with the user. Includes personal and team publications. */
            publications: UserPublicationsConnection;
            /** The social media links of the user. Shown on the user's profile. */
            socialMediaLinks?: Maybe<SocialMediaLinks>;
            /** The tagline of the user. Shown on the user's profile below the name. */
            tagline?: Maybe<Scalars['String']['output']>;
            /** Returns a list of tags that the user follows. */
            tagsFollowing: Array<Tag>;
            /** Returns list of tags from user's expertise. Shown on the user's profile. */
            techStack: UserTagsConnection;
            /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
            username: Scalars['String']['output'];
          }
          createdAt: string;
          sortOrder: number;
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
export const SeriesByPublicationDocument: DocumentNode<SeriesByPublicationQuery, SeriesByPublicationQueryVariables> = {
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
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
                              name: { kind: "Name", value: "cursor" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "node" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "slug" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "author" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                        { kind: "Field", name: { kind: "Name", value: "ambassador" } },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "badges" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              { kind: "Field", name: { kind: "Name", value: "id" } },
                                              { kind: "Field", name: { kind: "Name", value: "name" } },
                                              // Add other necessary badge fields here
                                            ],
                                          },
                                        },
                                        { kind: "Field", name: { kind: "Name", value: "deactivatedAt" } },
                                        { kind: "Field", name: { kind: "Name", value: "followersCount" } },
                                      ],
                                    },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
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
} as DocumentNode<SeriesByPublicationQuery, SeriesByPublicationQueryVariables>;