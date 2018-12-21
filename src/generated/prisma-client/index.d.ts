// Code generated by Prisma (prisma@1.19.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  link: (where?: LinkWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  vote: (where?: VoteWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  link: (where: LinkWhereUniqueInput) => Link;
  links: (
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<LinkNode>;
  linksConnection: (
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => LinkConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserNode>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  vote: (where: VoteWhereUniqueInput) => Vote;
  votes: (
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<VoteNode>;
  votesConnection: (
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => VoteConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLink: (data: LinkCreateInput) => Link;
  updateLink: (
    args: { data: LinkUpdateInput; where: LinkWhereUniqueInput }
  ) => Link;
  updateManyLinks: (
    args: { data: LinkUpdateInput; where?: LinkWhereInput }
  ) => BatchPayload;
  upsertLink: (
    args: {
      where: LinkWhereUniqueInput;
      create: LinkCreateInput;
      update: LinkUpdateInput;
    }
  ) => Link;
  deleteLink: (where: LinkWhereUniqueInput) => Link;
  deleteManyLinks: (where?: LinkWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;
  createVote: (data: VoteCreateInput) => Vote;
  updateVote: (
    args: { data: VoteUpdateInput; where: VoteWhereUniqueInput }
  ) => Vote;
  updateManyVotes: (
    args: { data: VoteUpdateInput; where?: VoteWhereInput }
  ) => BatchPayload;
  upsertVote: (
    args: {
      where: VoteWhereUniqueInput;
      create: VoteCreateInput;
      update: VoteUpdateInput;
    }
  ) => Vote;
  deleteVote: (where: VoteWhereUniqueInput) => Vote;
  deleteManyVotes: (where?: VoteWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  link: (
    where?: LinkSubscriptionWhereInput
  ) => LinkSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  vote: (
    where?: VoteSubscriptionWhereInput
  ) => VoteSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LinkOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "url_ASC"
  | "url_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type VoteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface LinkCreateManyWithoutPostedByInput {
  create?: LinkCreateWithoutPostedByInput[] | LinkCreateWithoutPostedByInput;
  connect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
}

export type LinkWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateOneWithoutLinksInput {
  create?: UserCreateWithoutLinksInput;
  update?: UserUpdateWithoutLinksDataInput;
  upsert?: UserUpsertWithoutLinksInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface LinkWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  postedBy?: UserWhereInput;
  votes_every?: VoteWhereInput;
  votes_some?: VoteWhereInput;
  votes_none?: VoteWhereInput;
  AND?: LinkWhereInput[] | LinkWhereInput;
  OR?: LinkWhereInput[] | LinkWhereInput;
  NOT?: LinkWhereInput[] | LinkWhereInput;
}

export interface UserUpdateWithoutLinksDataInput {
  name?: String;
  email?: String;
  password?: String;
  votes?: VoteUpdateManyWithoutUserInput;
}

export interface VoteWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  link?: LinkWhereInput;
  user?: UserWhereInput;
  AND?: VoteWhereInput[] | VoteWhereInput;
  OR?: VoteWhereInput[] | VoteWhereInput;
  NOT?: VoteWhereInput[] | VoteWhereInput;
}

export interface VoteCreateWithoutUserInput {
  link: LinkCreateOneWithoutVotesInput;
}

export interface VoteUpdateWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutLinkDataInput;
}

export interface LinkCreateOneWithoutVotesInput {
  create?: LinkCreateWithoutVotesInput;
  connect?: LinkWhereUniqueInput;
}

export interface VoteUpdateManyWithoutUserInput {
  create?: VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput;
  delete?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  disconnect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  update?:
    | VoteUpdateWithWhereUniqueWithoutUserInput[]
    | VoteUpdateWithWhereUniqueWithoutUserInput;
  upsert?:
    | VoteUpsertWithWhereUniqueWithoutUserInput[]
    | VoteUpsertWithWhereUniqueWithoutUserInput;
}

export interface LinkCreateWithoutVotesInput {
  description: String;
  url: String;
  postedBy?: UserCreateOneWithoutLinksInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface VoteCreateManyWithoutLinkInput {
  create?: VoteCreateWithoutLinkInput[] | VoteCreateWithoutLinkInput;
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
}

export interface VoteUpdateInput {
  link?: LinkUpdateOneRequiredWithoutVotesInput;
  user?: UserUpdateOneRequiredWithoutVotesInput;
}

export interface VoteCreateWithoutLinkInput {
  user: UserCreateOneWithoutVotesInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  links?: LinkUpdateManyWithoutPostedByInput;
  votes?: VoteUpdateManyWithoutUserInput;
}

export interface UserCreateOneWithoutVotesInput {
  create?: UserCreateWithoutVotesInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  links?: LinkCreateManyWithoutPostedByInput;
  votes?: VoteCreateManyWithoutUserInput;
}

export interface UserCreateWithoutVotesInput {
  name: String;
  email: String;
  password: String;
  links?: LinkCreateManyWithoutPostedByInput;
}

export interface UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput;
  create: UserCreateWithoutVotesInput;
}

export interface UserUpdateWithoutVotesDataInput {
  name?: String;
  email?: String;
  password?: String;
  links?: LinkUpdateManyWithoutPostedByInput;
}

export type VoteWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface LinkCreateWithoutPostedByInput {
  description: String;
  url: String;
  votes?: VoteCreateManyWithoutLinkInput;
}

export interface LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput;
  data: LinkUpdateWithoutPostedByDataInput;
}

export interface LinkUpdateInput {
  description?: String;
  url?: String;
  postedBy?: UserUpdateOneWithoutLinksInput;
  votes?: VoteUpdateManyWithoutLinkInput;
}

export interface UserCreateOneWithoutLinksInput {
  create?: UserCreateWithoutLinksInput;
  connect?: UserWhereUniqueInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  links_every?: LinkWhereInput;
  links_some?: LinkWhereInput;
  links_none?: LinkWhereInput;
  votes_every?: VoteWhereInput;
  votes_some?: VoteWhereInput;
  votes_none?: VoteWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface VoteCreateManyWithoutUserInput {
  create?: VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput;
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutVotesInput {
  create?: UserCreateWithoutVotesInput;
  update?: UserUpdateWithoutVotesDataInput;
  upsert?: UserUpsertWithoutVotesInput;
  connect?: UserWhereUniqueInput;
}

export interface LinkSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: LinkWhereInput;
  AND?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
  OR?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
  NOT?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
}

export interface VoteUpdateWithoutLinkDataInput {
  user?: UserUpdateOneRequiredWithoutVotesInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutUserDataInput;
}

export interface LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput;
  update: LinkUpdateWithoutPostedByDataInput;
  create: LinkCreateWithoutPostedByInput;
}

export interface VoteUpdateWithoutUserDataInput {
  link?: LinkUpdateOneRequiredWithoutVotesInput;
}

export interface LinkUpdateManyWithoutPostedByInput {
  create?: LinkCreateWithoutPostedByInput[] | LinkCreateWithoutPostedByInput;
  delete?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  connect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  disconnect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  update?:
    | LinkUpdateWithWhereUniqueWithoutPostedByInput[]
    | LinkUpdateWithWhereUniqueWithoutPostedByInput;
  upsert?:
    | LinkUpsertWithWhereUniqueWithoutPostedByInput[]
    | LinkUpsertWithWhereUniqueWithoutPostedByInput;
}

export interface LinkUpdateOneRequiredWithoutVotesInput {
  create?: LinkCreateWithoutVotesInput;
  update?: LinkUpdateWithoutVotesDataInput;
  upsert?: LinkUpsertWithoutVotesInput;
  connect?: LinkWhereUniqueInput;
}

export interface UserCreateWithoutLinksInput {
  name: String;
  email: String;
  password: String;
  votes?: VoteCreateManyWithoutUserInput;
}

export interface LinkUpdateWithoutVotesDataInput {
  description?: String;
  url?: String;
  postedBy?: UserUpdateOneWithoutLinksInput;
}

export interface VoteCreateInput {
  link: LinkCreateOneWithoutVotesInput;
  user: UserCreateOneWithoutVotesInput;
}

export interface VoteUpdateManyWithoutLinkInput {
  create?: VoteCreateWithoutLinkInput[] | VoteCreateWithoutLinkInput;
  delete?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  disconnect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  update?:
    | VoteUpdateWithWhereUniqueWithoutLinkInput[]
    | VoteUpdateWithWhereUniqueWithoutLinkInput;
  upsert?:
    | VoteUpsertWithWhereUniqueWithoutLinkInput[]
    | VoteUpsertWithWhereUniqueWithoutLinkInput;
}

export interface UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput;
  create: UserCreateWithoutLinksInput;
}

export interface VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutUserDataInput;
  create: VoteCreateWithoutUserInput;
}

export interface LinkUpsertWithoutVotesInput {
  update: LinkUpdateWithoutVotesDataInput;
  create: LinkCreateWithoutVotesInput;
}

export interface VoteUpsertWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutLinkDataInput;
  create: VoteCreateWithoutLinkInput;
}

export interface VoteSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: VoteWhereInput;
  AND?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput;
  OR?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput;
  NOT?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput;
}

export interface LinkCreateInput {
  description: String;
  url: String;
  postedBy?: UserCreateOneWithoutLinksInput;
  votes?: VoteCreateManyWithoutLinkInput;
}

export interface LinkUpdateWithoutPostedByDataInput {
  description?: String;
  url?: String;
  votes?: VoteUpdateManyWithoutLinkInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface VotePreviousValuesNode {
  id: ID_Output;
}

export interface VotePreviousValues
  extends Promise<VotePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface VotePreviousValuesSubscription
  extends Promise<AsyncIterator<VotePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface VoteNode {
  id: ID_Output;
}

export interface Vote extends Promise<VoteNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  link: <T = Link>() => T;
  user: <T = User>() => T;
}

export interface VoteSubscription
  extends Promise<AsyncIterator<VoteNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  link: <T = LinkSubscription>() => T;
  user: <T = UserSubscription>() => T;
}

export interface LinkConnectionNode {}

export interface LinkConnection
  extends Promise<LinkConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<LinkEdgeNode>>() => T;
  aggregate: <T = AggregateLink>() => T;
}

export interface LinkConnectionSubscription
  extends Promise<AsyncIterator<LinkConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LinkEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLinkSubscription>() => T;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface AggregateLinkNode {
  count: Int;
}

export interface AggregateLink
  extends Promise<AggregateLinkNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLinkSubscription
  extends Promise<AsyncIterator<AggregateLinkNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserNode {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  links: <T = FragmentableArray<LinkNode>>(
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  votes: <T = FragmentableArray<VoteNode>>(
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  links: <T = Promise<AsyncIterator<LinkSubscription>>>(
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  votes: <T = Promise<AsyncIterator<VoteSubscription>>>(
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AggregateVoteNode {
  count: Int;
}

export interface AggregateVote
  extends Promise<AggregateVoteNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVoteSubscription
  extends Promise<AsyncIterator<AggregateVoteNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface LinkEdgeNode {
  cursor: String;
}

export interface LinkEdge extends Promise<LinkEdgeNode>, Fragmentable {
  node: <T = Link>() => T;
  cursor: () => Promise<String>;
}

export interface LinkEdgeSubscription
  extends Promise<AsyncIterator<LinkEdgeNode>>,
    Fragmentable {
  node: <T = LinkSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface VoteConnectionNode {}

export interface VoteConnection
  extends Promise<VoteConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<VoteEdgeNode>>() => T;
  aggregate: <T = AggregateVote>() => T;
}

export interface VoteConnectionSubscription
  extends Promise<AsyncIterator<VoteConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VoteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVoteSubscription>() => T;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface LinkPreviousValuesNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  description: String;
  url: String;
}

export interface LinkPreviousValues
  extends Promise<LinkPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  url: () => Promise<String>;
}

export interface LinkPreviousValuesSubscription
  extends Promise<AsyncIterator<LinkPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface LinkSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface LinkSubscriptionPayload
  extends Promise<LinkSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Link>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LinkPreviousValues>() => T;
}

export interface LinkSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LinkSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LinkSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LinkPreviousValuesSubscription>() => T;
}

export interface LinkNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  description: String;
  url: String;
}

export interface Link extends Promise<LinkNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  url: () => Promise<String>;
  postedBy: <T = User>() => T;
  votes: <T = FragmentableArray<VoteNode>>(
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface LinkSubscription
  extends Promise<AsyncIterator<LinkNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
  votes: <T = Promise<AsyncIterator<VoteSubscription>>>(
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface VoteSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface VoteSubscriptionPayload
  extends Promise<VoteSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Vote>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VotePreviousValues>() => T;
}

export interface VoteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VoteSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VoteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VotePreviousValuesSubscription>() => T;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdgeNode>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface VoteEdgeNode {
  cursor: String;
}

export interface VoteEdge extends Promise<VoteEdgeNode>, Fragmentable {
  node: <T = Vote>() => T;
  cursor: () => Promise<String>;
}

export interface VoteEdgeSubscription
  extends Promise<AsyncIterator<VoteEdgeNode>>,
    Fragmentable {
  node: <T = VoteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const prisma: Prisma;
