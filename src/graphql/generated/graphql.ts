/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AiMessageInput = {
  input: Scalars['JSON']['input'];
};

export type AcceptTenantInvitationInput = {
  /** Invitation token */
  token: Scalars['String']['input'];
};

export type AcquireTemplateResponseType = {
  __typename?: 'AcquireTemplateResponseType';
  acquisition: UserAcquiredTemplateType;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type AddAgentToolInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  appToolId: Scalars['ID']['input'];
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  nodeId: Scalars['ID']['input'];
  position: Scalars['JSON']['input'];
  workflowId: Scalars['ID']['input'];
};

export type AddNodeComponentInput = {
  color: ProjectColor;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  nodeId: Scalars['ID']['input'];
  position: Scalars['JSON']['input'];
  type: ComponentType;
  workflowId: Scalars['ID']['input'];
};

export type AdminCreateSupportReplyInput = {
  message: Scalars['String']['input'];
  supportId: Scalars['ID']['input'];
};

export type AdminFeaturedToggleResponse = {
  __typename?: 'AdminFeaturedToggleResponse';
  isFeatured: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  templateId: Scalars['ID']['output'];
};

export type AdminGoogleCallbackInput = {
  code: Scalars['String']['input'];
};

export type AdminLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminLoginType = {
  __typename?: 'AdminLoginType';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type AdminMarketplaceCategoryType = {
  __typename?: 'AdminMarketplaceCategoryType';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  templateCount: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AdminSupportPaginationInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  /** Cursor for previous page */
  prevCursor?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<SupportPriority>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SupportStatus>;
};

export type AdminSupportReplyType = {
  __typename?: 'AdminSupportReplyType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  supportId: Scalars['ID']['output'];
  tenantUserId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
  userInfo?: Maybe<UserInfoType>;
};

export type AdminSupportType = {
  __typename?: 'AdminSupportType';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  issueType: SupportIssueType;
  message: Scalars['String']['output'];
  priority: SupportPriority;
  replies?: Maybe<Array<AdminSupportReplyType>>;
  status: SupportStatus;
  subject: Scalars['String']['output'];
  tenantId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
  userInfo?: Maybe<UserInfoType>;
};

export type AdminTemplateStatusUpdateResponse = {
  __typename?: 'AdminTemplateStatusUpdateResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  templateId: Scalars['ID']['output'];
};

export type AdminUpdateUserInput = {
  status?: InputMaybe<Status>;
  subscriptionType?: InputMaybe<SubscriptionType>;
};

export type AdminUserPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of users to return */
  limit?: Scalars['Float']['input'];
  /** Cursor for reverse pagination (previous page) */
  prevCursor?: InputMaybe<Scalars['String']['input']>;
  /** Search term for name or email */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort users by name or creation date */
  sort?: QuerySortEnum;
  status?: InputMaybe<Status>;
  /** Filter users by subscription type */
  subscriptionType?: InputMaybe<SubscriptionType>;
};

export type AdminUserType = {
  __typename?: 'AdminUserType';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  status: Status;
  subscriptionType: SubscriptionType;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type AgentToolType = {
  __typename?: 'AgentToolType';
  configurations?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  position: Scalars['JSON']['output'];
  workflowAppConnection?: Maybe<AppConnectionType>;
  workflowAppTool?: Maybe<AppToolType>;
};

export type ApiKeyType = {
  __typename?: 'ApiKeyType';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AppConnectionPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Tool connection id to filter tool connections. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Query connection for the type. */
  status?: InputMaybe<WorkflowAppConnectionStatus>;
  /** Tool id to filter tool connections. */
  toolId?: InputMaybe<Scalars['ID']['input']>;
};

export type AppConnectionType = {
  __typename?: 'AppConnectionType';
  connectionStatus?: Maybe<WorkflowAppConnectionStatus>;
  connectionType?: Maybe<WorkflowAppConnectionType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  params: Scalars['JSON']['output'];
  workflowApp: AppType;
};

export type AppPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Tool name to filter tools by. If not provided, all tools are returned. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tool id to filter tools by. */
  toolId?: InputMaybe<Scalars['ID']['input']>;
  /** Query the tools for either action or trigger. */
  type?: InputMaybe<QueryToolType>;
};

export type AppToolPaginationInput = {
  /** Tool action id to filter tool actions. */
  actionId?: InputMaybe<Scalars['ID']['input']>;
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Action name to filter actions by. If not provided, all actions are returned. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tool id to filter tool actions. */
  toolId?: InputMaybe<Scalars['ID']['input']>;
};

export type AppToolType = {
  __typename?: 'AppToolType';
  active: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enum: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  workflowApp: AppType;
  workflowAppId: Scalars['String']['output'];
};

export type AppTriggerPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Trigger name to filter trigger by. If not provided, all triggers are returned. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tool id to filter tool triggers. */
  toolId?: InputMaybe<Scalars['ID']['input']>;
  /** Tool trigger id to filter tool triggers. */
  triggerId?: InputMaybe<Scalars['ID']['input']>;
};

export type AppTriggerType = {
  __typename?: 'AppTriggerType';
  active: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enum: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  params: Scalars['JSON']['output'];
  properties?: Maybe<Scalars['JSON']['output']>;
  workflowApp: AppType;
  workflowAppId: Scalars['String']['output'];
};

export type AppType = {
  __typename?: 'AppType';
  appId?: Maybe<Scalars['String']['output']>;
  appType: WorkflowAppType;
  authParams: Scalars['JSON']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type AuthType = {
  __typename?: 'AuthType';
  email: Scalars['String']['output'];
};

/** Billing intervals */
export enum BillingInterval {
  Month = 'MONTH',
  Year = 'YEAR'
}

export type CancelSubscriptionInput = {
  cancellationReason?: InputMaybe<Scalars['String']['input']>;
};

export type CancelSubscriptionResponse = {
  __typename?: 'CancelSubscriptionResponse';
  success: Scalars['Boolean']['output'];
};

export type CancelWorkflowInput = {
  taskId: Scalars['ID']['input'];
  workflowLogId: Scalars['ID']['input'];
};

export type ChatMessageType = {
  __typename?: 'ChatMessageType';
  message: Scalars['String']['output'];
  taskid: Scalars['ID']['output'];
};

export type CheckLimitInput = {
  limitType?: InputMaybe<LimitType>;
};

export type CheckLimitType = {
  __typename?: 'CheckLimitType';
  limits: Array<UsageLimitType>;
};

export type CheckUserInput = {
  email: Scalars['String']['input'];
};

export type CheckoutSessionResponse = {
  __typename?: 'CheckoutSessionResponse';
  checkoutUrl: Scalars['String']['output'];
};

/** Types of components in the system */
export enum ComponentType {
  Agent = 'AGENT',
  Task = 'TASK'
}

export type ConnectionUrlType = {
  __typename?: 'ConnectionURLType';
  id: Scalars['ID']['output'];
  redirectURL?: Maybe<Scalars['String']['output']>;
};

export type ContinueWorkflowInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  taskId: Scalars['ID']['input'];
  type: TaskContinueType;
  workflowLogId: Scalars['ID']['input'];
};

export type CreateAgentToolInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  appToolId: Scalars['ID']['input'];
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  position: Scalars['JSON']['input'];
};

export type CreateApiKeyInput = {
  name: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCheckoutSessionInput = {
  billingInterval: BillingInterval;
  cancelUrl: Scalars['String']['input'];
  subscriptionType: SubscriptionTypeInput;
  successUrl: Scalars['String']['input'];
};

export type CreateConnectionInput = {
  authParams: Scalars['JSON']['input'];
  name: Scalars['String']['input'];
  redirectPath?: InputMaybe<Scalars['String']['input']>;
  workflowAppId: Scalars['ID']['input'];
};

export type CreateEdgeInput = {
  sourceColor: ProjectColor;
  sourceComponentId?: InputMaybe<Scalars['ID']['input']>;
  sourceNodeId: Scalars['ID']['input'];
  sourcePosition: TargetPositionType;
  targetNodeId: Scalars['ID']['input'];
  targetPosition: TargetPositionType;
  workflowId: Scalars['ID']['input'];
};

export type CreateFileInput = {
  file: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};

export type CreateNodeInput = {
  agentTools?: InputMaybe<Array<CreateAgentToolInput>>;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  framework?: InputMaybe<FrameworkType>;
  name?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['JSON']['input'];
  trigger?: InputMaybe<CreateTriggerInput>;
  type: NodeType;
  workflowId: Scalars['ID']['input'];
};

export type CreateProjectInput = {
  color: ProjectColor;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateSupportInput = {
  issueType: SupportIssueType;
  message: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type CreateSupportReplyInput = {
  message: Scalars['String']['input'];
  supportId: Scalars['ID']['input'];
};

export type CreateTagInput = {
  name: Scalars['String']['input'];
};

export type CreateTenantInput = {
  /** Optional description for the tenant */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique name for the tenant */
  name: Scalars['String']['input'];
  /** Type of tenant */
  type: TenantType;
};

export type CreateTriggerInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  appTriggerId: Scalars['ID']['input'];
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  params?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateVariableInput = {
  name: Scalars['String']['input'];
  sensitive: Scalars['Boolean']['input'];
  value: Scalars['String']['input'];
};

export type CreateWaitlistInput = {
  email: Scalars['String']['input'];
};

export type CreateWorkflowFromTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkflowInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type DeleteAgentToolInput = {
  id: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type DeleteConnectionInput = {
  id: Scalars['ID']['input'];
};

export type DeleteEdgeInput = {
  id: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type DeleteFileInput = {
  id: Scalars['ID']['input'];
};

export type DeleteNodeComponentInput = {
  id: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type DeleteNodeInput = {
  id: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type DeleteProjectInput = {
  id: Scalars['ID']['input'];
};

export type DeleteTenantInput = {
  /** Confirmation text - must be "DELETE" to proceed */
  confirmation: Scalars['String']['input'];
};

export type DeleteWorkflowInput = {
  id: Scalars['ID']['input'];
};

export type DeleteWorkflowLogInput = {
  /** The ID of the WorkflowLog to delete, including all its children and chat logs. */
  workflowLogId: Scalars['ID']['input'];
};

export type DisableTriggerInput = {
  nodeId: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type EdgeType = {
  __typename?: 'EdgeType';
  id: Scalars['ID']['output'];
  sourceColor: ProjectColor;
  sourceComponentId?: Maybe<Scalars['ID']['output']>;
  sourceNodeId: Scalars['ID']['output'];
  sourcePosition: TargetPositionType;
  targetNodeId: Scalars['ID']['output'];
  targetPosition: TargetPositionType;
};

export type EnableTriggerInput = {
  nodeId: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

/** Types of events in the worflow */
export enum EventType {
  AgentExecutionCompletedEvent = 'AgentExecutionCompletedEvent',
  AgentExecutionErrorEvent = 'AgentExecutionErrorEvent',
  AgentExecutionStartedEvent = 'AgentExecutionStartedEvent',
  AgentReasoningCompletedEvent = 'AgentReasoningCompletedEvent',
  AgentReasoningFailedEvent = 'AgentReasoningFailedEvent',
  AgentReasoningStartedEvent = 'AgentReasoningStartedEvent',
  ConnectorInputEvent = 'ConnectorInputEvent',
  CrewKickoffCompletedEvent = 'CrewKickoffCompletedEvent',
  CrewKickoffFailedEvent = 'CrewKickoffFailedEvent',
  CrewKickoffStartedEvent = 'CrewKickoffStartedEvent',
  CrewTestCompletedEvent = 'CrewTestCompletedEvent',
  CrewTestFailedEvent = 'CrewTestFailedEvent',
  CrewTestStartedEvent = 'CrewTestStartedEvent',
  CrewTrainCompletedEvent = 'CrewTrainCompletedEvent',
  CrewTrainFailedEvent = 'CrewTrainFailedEvent',
  CrewTrainStartedEvent = 'CrewTrainStartedEvent',
  FlowCreatedEvent = 'FlowCreatedEvent',
  FlowFinishedEvent = 'FlowFinishedEvent',
  FlowPlotEvent = 'FlowPlotEvent',
  FlowStartedEvent = 'FlowStartedEvent',
  KnowledgeQueryCompletedEvent = 'KnowledgeQueryCompletedEvent',
  KnowledgeQueryFailedEvent = 'KnowledgeQueryFailedEvent',
  KnowledgeQueryStartedEvent = 'KnowledgeQueryStartedEvent',
  KnowledgeRetrievalCompletedEvent = 'KnowledgeRetrievalCompletedEvent',
  KnowledgeRetrievalStartedEvent = 'KnowledgeRetrievalStartedEvent',
  KnowledgeSearchQueryFailedEvent = 'KnowledgeSearchQueryFailedEvent',
  LlmCallCompletedEvent = 'LLMCallCompletedEvent',
  LlmCallFailedEvent = 'LLMCallFailedEvent',
  LlmCallStartedEvent = 'LLMCallStartedEvent',
  LlmStreamChunkEvent = 'LLMStreamChunkEvent',
  MethodExecutionFailedEvent = 'MethodExecutionFailedEvent',
  MethodExecutionFinishedEvent = 'MethodExecutionFinishedEvent',
  MethodExecutionStartedEvent = 'MethodExecutionStartedEvent',
  TaskApprovalRequestEvent = 'TaskApprovalRequestEvent',
  TaskApprovalResponseEvent = 'TaskApprovalResponseEvent',
  TaskCompletedEvent = 'TaskCompletedEvent',
  TaskEvaluationEvent = 'TaskEvaluationEvent',
  TaskFailedEvent = 'TaskFailedEvent',
  TaskOutput = 'TaskOutput',
  TaskStartedEvent = 'TaskStartedEvent',
  ToolExecutionErrorEvent = 'ToolExecutionErrorEvent',
  ToolSelectionErrorEvent = 'ToolSelectionErrorEvent',
  ToolUsageErrorEvent = 'ToolUsageErrorEvent',
  ToolUsageFinishedEvent = 'ToolUsageFinishedEvent',
  ToolUsageStartedEvent = 'ToolUsageStartedEvent',
  ToolValidateInputErrorEvent = 'ToolValidateInputErrorEvent',
  UserInputEvent = 'UserInputEvent'
}

export type FilePaginationInput = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: Scalars['Int']['input'];
};

export type FileType = {
  __typename?: 'FileType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

/** Framework types */
export enum FrameworkType {
  Crewai = 'CREWAI',
  GoogleAdk = 'GOOGLE_ADK',
  OpenaiSdk = 'OPENAI_SDK'
}

export type GoogleAuthCallbackInput = {
  code: Scalars['String']['input'];
};

export type InviteUserToTenantInput = {
  /** Email address of the user to invite */
  email: Scalars['String']['input'];
  /** Role to assign to the invited user */
  role?: TenantUserRoleType;
};

/** Subscription limit types */
export enum LimitType {
  Executions = 'EXECUTIONS',
  Storage = 'STORAGE',
  VibeExecutions = 'VIBE_EXECUTIONS',
  Workflows = 'WORKFLOWS'
}

/** Types of logs in the system */
export enum LogType {
  Api = 'API',
  Chat = 'CHAT',
  Edge = 'EDGE',
  Test = 'TEST',
  Training = 'TRAINING'
}

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginType = {
  __typename?: 'LoginType';
  accessToken: Scalars['String']['output'];
  isVerified: Scalars['Boolean']['output'];
  profileCompleted: Scalars['Boolean']['output'];
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type MarketplaceCategoryType = {
  __typename?: 'MarketplaceCategoryType';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  templates?: Maybe<Array<MarketplaceTemplateType>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MarketplaceFiltersInput = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  freeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  minRating?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<MarketplaceSortBy>;
  sortOrder?: InputMaybe<QuerySortEnum>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MarketplacePaginationInput = {
  filters?: InputMaybe<MarketplaceFiltersInput>;
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};

export type MarketplaceReviewType = {
  __typename?: 'MarketplaceReviewType';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  template: MarketplaceTemplateType;
  templateId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
  userId: Scalars['String']['output'];
};

/** Available sorting options for marketplace templates */
export enum MarketplaceSortBy {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME',
  Popularity = 'POPULARITY',
  Price = 'PRICE',
  Rating = 'RATING',
  UpdatedAt = 'UPDATED_AT'
}

export type MarketplaceTagType = {
  __typename?: 'MarketplaceTagType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MarketplaceTemplateType = {
  __typename?: 'MarketplaceTemplateType';
  acquiredBy: Array<UserAcquiredTemplateType>;
  acquisitionCount: Scalars['Int']['output'];
  author?: Maybe<UserType>;
  authorId?: Maybe<Scalars['String']['output']>;
  averageRating?: Maybe<Scalars['Float']['output']>;
  category?: Maybe<MarketplaceCategoryType>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isFeatured: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parentTemplate?: Maybe<MarketplaceTemplateType>;
  parentTemplateId?: Maybe<Scalars['String']['output']>;
  prerequisites?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  reviewCount: Scalars['Int']['output'];
  reviews: Array<MarketplaceReviewType>;
  status: TemplateStatus;
  tags: Array<MarketplaceTagType>;
  updatedAt: Scalars['DateTime']['output'];
  usageInstructions?: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
  versions: Array<MarketplaceTemplateType>;
  workflowData: Scalars['String']['output'];
};

export type MessageWorkflowInput = {
  id: Scalars['ID']['input'];
  input: Scalars['JSON']['input'];
  inputType: LogType;
  inputVariables?: InputMaybe<Scalars['JSON']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept a tenant invitation */
  acceptTenantInvitation: TenantUserType;
  /** Acquire/purchase a template */
  acquireTemplate: AcquireTemplateResponseType;
  /** Adds a new agent tool for the authenticated user */
  addAgentTool: WorkflowNodeType;
  /** Adds a new component to a node for the authenticated user */
  addNodeComponent: WorkflowNodeType;
  /** Create a new marketplace category (admin only) */
  adminCreateCategory: AdminMarketplaceCategoryType;
  adminCreateSupportReply: AdminSupportReplyType;
  /** Delete marketplace category (admin only) */
  adminDeleteCategory: Scalars['Boolean']['output'];
  adminDeleteUser: Scalars['Boolean']['output'];
  adminGoogleCallback: AdminLoginType;
  adminLogin: AdminLoginType;
  adminMarkSupportReplyRead: Scalars['Boolean']['output'];
  /** Toggle featured status of template (admin only) */
  adminToggleFeaturedTemplate: AdminFeaturedToggleResponse;
  /** Update marketplace category (admin only) */
  adminUpdateCategory: AdminMarketplaceCategoryType;
  adminUpdateSupport: Scalars['Boolean']['output'];
  /** Update template status (admin only) */
  adminUpdateTemplateStatus: AdminTemplateStatusUpdateResponse;
  adminUpdateUser: AdminUserType;
  /** Sends a message to an AI assistant workflow */
  assistantWorkflow: ChatMessageType;
  /** Cancel an active subscription */
  cancelSubscription: CancelSubscriptionResponse;
  /** Cancel a workflow run */
  cancelWorkflow: Scalars['Boolean']['output'];
  checkUser: Scalars['Boolean']['output'];
  /** Continue a waiting workflow run with a message */
  continueWorkflow: WorkflowChatEventType;
  /** Creates a new API key for the authenticated user */
  createApiKey: ApiKeyType;
  /** Creates a new app connection for the authenticated user */
  createConnection: ConnectionUrlType;
  /** Creates a new edge for the authenticated user */
  createEdge: EdgeType;
  /** Creates a new file entry for the authenticated user */
  createFile: FileType;
  /** Creates a new node for the authenticated user */
  createNode: WorkflowNodeType;
  /** Creates a new project for the authenticated user */
  createProject: ProjectType;
  /** Create a Stripe checkout session for subscription */
  createSubscriptionSession: CheckoutSessionResponse;
  createSupport: Scalars['String']['output'];
  createSupportReply: Scalars['String']['output'];
  /** Create a new marketplace tag */
  createTag: MarketplaceTagType;
  /** Create a new tenant */
  createTenant: TenantTypeDto;
  createUser: AuthType;
  /** Creates a new variable for the authenticated user */
  createVariable: VariableType;
  /** Add an email to the waitlist */
  createWaitlist: Scalars['Boolean']['output'];
  /** Creates a new workflow for the authenticated user */
  createWorkflow: WorkflowType;
  /** Create workflow from acquired template */
  createWorkflowFromTemplate: Scalars['Boolean']['output'];
  /** Deletes an existing agent tool for the authenticated user */
  deleteAgentTool: Scalars['Boolean']['output'];
  /** Deletes an API key for the authenticated user */
  deleteApiKey: Scalars['Boolean']['output'];
  /** Deletes an app connection for the authenticated user */
  deleteConnection: Scalars['Boolean']['output'];
  /** Deletes an existing edge for the authenticated user */
  deleteEdge: Scalars['Boolean']['output'];
  /** Deletes a file of the authenticated user */
  deleteFile: Scalars['Boolean']['output'];
  /** Deletes an existing node for the authenticated user */
  deleteNode: Scalars['Boolean']['output'];
  /** Deletes an existing node component for the authenticated user */
  deleteNodeComponent: Scalars['Boolean']['output'];
  /** Deletes a project for the authenticated user */
  deleteProject: Scalars['Boolean']['output'];
  /** Delete a review */
  deleteReview: Scalars['Boolean']['output'];
  /** Delete template (soft delete by deactivating) */
  deleteTemplate: Scalars['Boolean']['output'];
  /** Delete current tenant (admin only, all members must be removed first) */
  deleteTenant: Scalars['String']['output'];
  /** Deletes the account of the authenticated user */
  deleteUser: Scalars['Boolean']['output'];
  /** Deletes a variable for the authenticated user */
  deleteVariable: Scalars['Boolean']['output'];
  /** Deletes an existing workflow for the authenticated user */
  deleteWorkflow: Scalars['Boolean']['output'];
  deleteWorkflowLog: Scalars['Boolean']['output'];
  /** Disables an app trigger for the authenticated user */
  disableTrigger: Scalars['Boolean']['output'];
  /** Enables an app trigger for the authenticated user */
  enableTrigger: Scalars['Boolean']['output'];
  googleAuthCallback: LoginType;
  /** Invite a user to the current tenant (admin only) */
  inviteTenantUser: Scalars['String']['output'];
  login: LoginType;
  /** Logs out the user by invalidating their tokens */
  logout: Scalars['Boolean']['output'];
  /** Sends a message to a workflow node */
  messageWorkflow: ChatMessageType;
  /** Publish a new template to the marketplace */
  publishTemplate: PublishTemplateResponseType;
  /** Reactivate a cancelled subscription */
  reactivateSubscription: CancelSubscriptionResponse;
  /** Remove user from current tenant (admin only) */
  removeTenantUser: Scalars['String']['output'];
  resendVerificationEmail: AuthType;
  resetPassword: AuthType;
  resetPasswordRequest: AuthType;
  resetPasswordVerification: AuthType;
  /** Submit a review for an acquired template */
  submitReview: MarketplaceReviewType;
  support: Scalars['String']['output'];
  /** Switch to a specific tenant context */
  switchTenant: TenantAuthResponseType;
  /** Switch back to personal account context */
  switchToPersonalAccount: LoginType;
  /** Updates an existing agent tool for the authenticated user */
  updateAgentTool: WorkflowNodeType;
  /** Updates an existing app connection for the authenticated user */
  updateConnection: AppConnectionType;
  /** Updates an existing edge for the authenticated user */
  updateEdge: EdgeType;
  /** Updates an existing node for the authenticated user */
  updateNode: WorkflowNodeType;
  /** Updates an existing node component for the authenticated user */
  updateNodeComponent: WorkflowNodeType;
  /** Updates the onboarding information of the authenticated user */
  updateOnboarding: OnboardingType;
  /** Updates the password of the authenticated user */
  updatePassword: UserType;
  /** Updates the preference information of the authenticated user */
  updatePreference: PreferenceType;
  /** Updates an existing project for the authenticated user */
  updateProject: ProjectType;
  /** Update an existing review */
  updateReview: MarketplaceReviewType;
  /** Update template by creating a new version */
  updateTemplate: MarketplaceTemplateType;
  /** Update current tenant (admin only) */
  updateTenant: TenantTypeDto;
  /** Update user role in current tenant (admin only) */
  updateTenantUserRole: TenantUserType;
  /** Updates a trigger for the authenticated user */
  updateTrigger: WorkflowNodeType;
  /** Updates the profile of the authenticated user */
  updateUser: UserType;
  /** Updates a variable for the authenticated user */
  updateVariable: VariableType;
  /** Updates an existing workflow for the authenticated user */
  updateWorkflow: WorkflowType;
  verifyEmail: AuthType;
};


export type MutationAcceptTenantInvitationArgs = {
  input: AcceptTenantInvitationInput;
};


export type MutationAcquireTemplateArgs = {
  templateId: Scalars['ID']['input'];
};


export type MutationAddAgentToolArgs = {
  input: AddAgentToolInput;
};


export type MutationAddNodeComponentArgs = {
  input: AddNodeComponentInput;
};


export type MutationAdminCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationAdminCreateSupportReplyArgs = {
  input: AdminCreateSupportReplyInput;
};


export type MutationAdminDeleteCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};


export type MutationAdminDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAdminGoogleCallbackArgs = {
  input: AdminGoogleCallbackInput;
};


export type MutationAdminLoginArgs = {
  input: AdminLoginInput;
};


export type MutationAdminMarkSupportReplyReadArgs = {
  input: SupportReplyIdInput;
};


export type MutationAdminToggleFeaturedTemplateArgs = {
  input: ToggleFeaturedTemplateInput;
};


export type MutationAdminUpdateCategoryArgs = {
  categoryId: Scalars['ID']['input'];
  input: UpdateCategoryInput;
};


export type MutationAdminUpdateSupportArgs = {
  input: UpdateSupportInput;
};


export type MutationAdminUpdateTemplateStatusArgs = {
  input: UpdateTemplateStatusInput;
};


export type MutationAdminUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: AdminUpdateUserInput;
};


export type MutationAssistantWorkflowArgs = {
  input: AiMessageInput;
};


export type MutationCancelSubscriptionArgs = {
  input: CancelSubscriptionInput;
};


export type MutationCancelWorkflowArgs = {
  input: CancelWorkflowInput;
};


export type MutationCheckUserArgs = {
  input: CheckUserInput;
};


export type MutationContinueWorkflowArgs = {
  input: ContinueWorkflowInput;
};


export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationCreateConnectionArgs = {
  input: CreateConnectionInput;
};


export type MutationCreateEdgeArgs = {
  input: CreateEdgeInput;
};


export type MutationCreateFileArgs = {
  input: CreateFileInput;
};


export type MutationCreateNodeArgs = {
  input: CreateNodeInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateSubscriptionSessionArgs = {
  input: CreateCheckoutSessionInput;
};


export type MutationCreateSupportArgs = {
  input: CreateSupportInput;
};


export type MutationCreateSupportReplyArgs = {
  input: CreateSupportReplyInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTenantArgs = {
  input: CreateTenantInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateVariableArgs = {
  input: CreateVariableInput;
};


export type MutationCreateWaitlistArgs = {
  input: CreateWaitlistInput;
};


export type MutationCreateWorkflowArgs = {
  input: CreateWorkflowInput;
};


export type MutationCreateWorkflowFromTemplateArgs = {
  input: CreateWorkflowFromTemplateInput;
  templateId: Scalars['ID']['input'];
};


export type MutationDeleteAgentToolArgs = {
  input: DeleteAgentToolInput;
};


export type MutationDeleteApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteConnectionArgs = {
  input: DeleteConnectionInput;
};


export type MutationDeleteEdgeArgs = {
  input: DeleteEdgeInput;
};


export type MutationDeleteFileArgs = {
  input: DeleteFileInput;
};


export type MutationDeleteNodeArgs = {
  input: DeleteNodeInput;
};


export type MutationDeleteNodeComponentArgs = {
  input: DeleteNodeComponentInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['ID']['input'];
};


export type MutationDeleteTemplateArgs = {
  templateId: Scalars['ID']['input'];
};


export type MutationDeleteTenantArgs = {
  input: DeleteTenantInput;
};


export type MutationDeleteVariableArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteWorkflowArgs = {
  input: DeleteWorkflowInput;
};


export type MutationDeleteWorkflowLogArgs = {
  input: DeleteWorkflowLogInput;
};


export type MutationDisableTriggerArgs = {
  input: DisableTriggerInput;
};


export type MutationEnableTriggerArgs = {
  input: EnableTriggerInput;
};


export type MutationGoogleAuthCallbackArgs = {
  input: GoogleAuthCallbackInput;
};


export type MutationInviteTenantUserArgs = {
  input: InviteUserToTenantInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMessageWorkflowArgs = {
  input: MessageWorkflowInput;
};


export type MutationPublishTemplateArgs = {
  input: PublishTemplateInput;
};


export type MutationRemoveTenantUserArgs = {
  input: RemoveUserFromTenantInput;
};


export type MutationResendVerificationEmailArgs = {
  input: ResendVerificationInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationResetPasswordRequestArgs = {
  input: ResetPasswordRequestInput;
};


export type MutationResetPasswordVerificationArgs = {
  input: ResetPasswordVerificationInput;
};


export type MutationSubmitReviewArgs = {
  input: SubmitReviewInput;
  templateId: Scalars['ID']['input'];
};


export type MutationSupportArgs = {
  input: UaCreateSupportInput;
};


export type MutationSwitchTenantArgs = {
  input: SwitchTenantInput;
};


export type MutationUpdateAgentToolArgs = {
  input: UpdateAgentToolInput;
};


export type MutationUpdateConnectionArgs = {
  input: UpdateConnectionInput;
};


export type MutationUpdateEdgeArgs = {
  input: UpdateEdgeInput;
};


export type MutationUpdateNodeArgs = {
  input: UpdateNodeInput;
};


export type MutationUpdateNodeComponentArgs = {
  input: UpdateNodeComponentInput;
};


export type MutationUpdateOnboardingArgs = {
  input: UpdateOnboardingInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdatePreferenceArgs = {
  input: UpdatePreferenceInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
  reviewId: Scalars['ID']['input'];
};


export type MutationUpdateTemplateArgs = {
  input: UpdateTemplateInput;
  templateId: Scalars['ID']['input'];
};


export type MutationUpdateTenantArgs = {
  input: UpdateTenantInput;
};


export type MutationUpdateTenantUserRoleArgs = {
  input: UpdateTenantUserRoleInput;
};


export type MutationUpdateTriggerArgs = {
  input: UpdateTriggerInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateVariableArgs = {
  input: UpdateVariableInput;
};


export type MutationUpdateWorkflowArgs = {
  input: UpdateWorkflowInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type MyTemplatesPaginationInput = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  sortBy?: MarketplaceSortBy;
  sortOrder?: QuerySortEnum;
};

export type NodeComponentType = {
  __typename?: 'NodeComponentType';
  color: ProjectColor;
  configurations?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['JSON']['output'];
  type: ComponentType;
};

/** Node types */
export enum NodeType {
  Task = 'TASK',
  Team = 'TEAM',
  Tool = 'TOOL',
  Trigger = 'TRIGGER'
}

export type OnboardingEntryType = {
  __typename?: 'OnboardingEntryType';
  answer: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type OnboardingListType = {
  __typename?: 'OnboardingListType';
  onboardingEntries: Array<OnboardingEntryType>;
  totalCount: Scalars['Int']['output'];
};

export type OnboardingType = {
  __typename?: 'OnboardingType';
  answer: Array<Scalars['String']['output']>;
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type PaginatedAdminSupportsType = {
  __typename?: 'PaginatedAdminSupportsType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AdminSupportType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAdminUsersType = {
  __typename?: 'PaginatedAdminUsersType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AdminUserType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAppConnectionType = {
  __typename?: 'PaginatedAppConnectionType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AppConnectionType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAppToolType = {
  __typename?: 'PaginatedAppToolType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AppToolType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAppTriggerType = {
  __typename?: 'PaginatedAppTriggerType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AppTriggerType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAppType = {
  __typename?: 'PaginatedAppType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AppType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedFilesType = {
  __typename?: 'PaginatedFilesType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<FileType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedMarketplaceReviewsType = {
  __typename?: 'PaginatedMarketplaceReviewsType';
  data: Array<MarketplaceReviewType>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedMarketplaceTemplatesType = {
  __typename?: 'PaginatedMarketplaceTemplatesType';
  data: Array<MarketplaceTemplateType>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedProjectsType = {
  __typename?: 'PaginatedProjectsType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<ProjectType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedUserAcquiredTemplatesType = {
  __typename?: 'PaginatedUserAcquiredTemplatesType';
  data: Array<UserAcquiredTemplateType>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedWorkflowsType = {
  __typename?: 'PaginatedWorkflowsType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<WorkflowType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

/** Available language options for user preferences */
export enum PreferenceLanguage {
  De = 'DE',
  En = 'EN',
  Es = 'ES',
  Fr = 'FR',
  It = 'IT',
  Ja = 'JA',
  Ko = 'KO',
  Pt = 'PT',
  Ru = 'RU',
  Zh = 'ZH'
}

export type PreferenceType = {
  __typename?: 'PreferenceType';
  activeWorkflowId?: Maybe<Scalars['String']['output']>;
  data: Scalars['JSON']['output'];
  fontSize?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<PreferenceLanguage>;
  sideBarMode?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
};

/** Available colors for projects */
export enum ProjectColor {
  Black = 'BLACK',
  Blue = 'BLUE',
  Brown = 'BROWN',
  Cyan = 'CYAN',
  Gold = 'GOLD',
  Gray = 'GRAY',
  Green = 'GREEN',
  Indigo = 'INDIGO',
  Lime = 'LIME',
  Magenta = 'MAGENTA',
  Navy = 'NAVY',
  Olive = 'OLIVE',
  Orange = 'ORANGE',
  Pink = 'PINK',
  Purple = 'PURPLE',
  Red = 'RED',
  Teal = 'TEAL',
  Turquoise = 'TURQUOISE',
  Violet = 'VIOLET',
  Yellow = 'YELLOW'
}

export type ProjectPaginationInput = {
  /** Cursor for pagination (ID of the last project from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of projects to return */
  limit?: Scalars['Float']['input'];
  /** Filter projects by name or date */
  sort?: QuerySortEnum;
};

export type ProjectType = {
  __typename?: 'ProjectType';
  color?: Maybe<ProjectColor>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pinned: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workflows?: Maybe<Array<WorkflowType>>;
};

/** Channel on which events are published */
export enum PubSubChannel {
  Edge = 'EDGE',
  Node = 'NODE',
  Project = 'PROJECT',
  Support = 'SUPPORT',
  Upload = 'UPLOAD',
  Workflow = 'WORKFLOW'
}

/** Type of event being published */
export enum PubSubEvent {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Initiating = 'INITIATING',
  Log = 'LOG',
  Message = 'MESSAGE',
  Response = 'RESPONSE'
}

export type PubSubType = {
  __typename?: 'PubSubType';
  channel: PubSubChannel;
  /** Arbitrary payload data */
  data: Scalars['JSON']['output'];
  event: PubSubEvent;
};

export type PublishTemplateInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  currency?: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentTemplateId?: InputMaybe<Scalars['String']['input']>;
  prerequisites?: InputMaybe<Scalars['String']['input']>;
  price?: Scalars['Float']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  usageInstructions?: InputMaybe<Scalars['String']['input']>;
  version?: Scalars['String']['input'];
  workflowData: Scalars['String']['input'];
};

export type PublishTemplateResponseType = {
  __typename?: 'PublishTemplateResponseType';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  template: MarketplaceTemplateType;
};

export type Query = {
  __typename?: 'Query';
  /** Get all marketplace categories with template counts (admin only) */
  adminGetAllCategories: Array<AdminMarketplaceCategoryType>;
  /** Get all templates for admin review (admin only) */
  adminGetAllTemplates: Array<MarketplaceTemplateType>;
  /** Get template analytics (admin only) */
  adminGetTemplateAnalytics: Scalars['String']['output'];
  /** Get version history for a template (admin only) */
  adminGetTemplateVersionHistory: Array<MarketplaceTemplateType>;
  /** Get templates by category (admin view) */
  adminGetTemplatesByCategory: Array<AdminMarketplaceCategoryType>;
  /** Get templates pending approval (admin only) */
  adminGetTemplatesPendingApproval: Array<MarketplaceTemplateType>;
  adminGoogleAuthUrl: Scalars['String']['output'];
  adminSupport: AdminSupportType;
  adminSupports: PaginatedAdminSupportsType;
  adminUser: AdminUserType;
  adminUsers: PaginatedAdminUsersType;
  /** Get all marketplace categories */
  getAllCategories: Array<MarketplaceCategoryType>;
  /** Fetches all the API keys information of the authenticated user */
  getApiKeys: Array<ApiKeyType>;
  /** Fetches all app connections for the authenticated user */
  getAppConnections: PaginatedAppConnectionType;
  /** Fetches all app tools for the authenticated user */
  getAppTools: PaginatedAppToolType;
  /** Fetches all app triggers for the authenticated user */
  getAppTriggers: PaginatedAppTriggerType;
  /** Fetches all apps for the authenticated user */
  getApps: PaginatedAppType;
  /** Fetches the profile of the authenticated user */
  getCurrentUser: UserType;
  /** Get featured marketplace templates */
  getFeaturedTemplates: Array<MarketplaceTemplateType>;
  /** Gets paginated files of the authenticated user, ordered by file name */
  getFiles: PaginatedFilesType;
  /** Browse marketplace templates with filters */
  getMarketplaceTemplates: PaginatedMarketplaceTemplatesType;
  /** Get user's acquired templates library */
  getMyAcquiredTemplates: PaginatedUserAcquiredTemplatesType;
  /** Get user's published templates */
  getMyTemplates: PaginatedMarketplaceTemplatesType;
  /** Gets all onboarding questions and answers for the authenticated user */
  getOnboarding: OnboardingListType;
  /** Get popular marketplace tags */
  getPopularTags: Array<MarketplaceTagType>;
  /** Fetches the preference information of the authenticated user */
  getPreference: PreferenceType;
  /** Fetches all projects of the authenticated user */
  getProjects: PaginatedProjectsType;
  /** Get subscription limits, optionally filtered by limit type */
  getSubscriptionLimit: CheckLimitType;
  /** Get all available marketplace tags */
  getTags: Array<MarketplaceTagType>;
  /** Get template details by ID */
  getTemplateById: MarketplaceTemplateType;
  /** Get reviews for a template */
  getTemplateReviews: PaginatedMarketplaceReviewsType;
  /** Get templates by category */
  getTemplatesByCategory: PaginatedMarketplaceTemplatesType;
  /** Get templates by tag name */
  getTemplatesByTag: PaginatedMarketplaceTemplatesType;
  /** Get pending invitations for current tenant (admin only) */
  getTenantInvitations: Array<TenantInvitationType>;
  /** Get current user subscription details */
  getUserSubscription: UserSubscriptionResponse;
  /** Get all tenants for the current user */
  getUserTenants: Array<TenantTypeDto>;
  /** Fetches all the variables information of the authenticated user */
  getVariables: Array<VariableType>;
  /** Fetches a workflow by ID for the authenticated user */
  getWorkflow: WorkflowType;
  /** Fetches all workflows of the authenticated user */
  getWorkflows: PaginatedWorkflowsType;
  googleAuthUrl: Scalars['String']['output'];
  hello: Scalars['String']['output'];
  /** Search templates by query string */
  searchTemplates: PaginatedMarketplaceTemplatesType;
  workflowChatEvents: WorkflowLogType;
  workflowLogs: WorkflowLogPaginatedType;
};


export type QueryAdminGetTemplateAnalyticsArgs = {
  templateId: Scalars['ID']['input'];
};


export type QueryAdminGetTemplateVersionHistoryArgs = {
  parentTemplateId: Scalars['ID']['input'];
};


export type QueryAdminGetTemplatesByCategoryArgs = {
  categoryName: Scalars['String']['input'];
  includeInactive?: Scalars['Boolean']['input'];
};


export type QueryAdminSupportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminSupportsArgs = {
  input: AdminSupportPaginationInput;
};


export type QueryAdminUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminUsersArgs = {
  input: AdminUserPaginationInput;
};


export type QueryGetAppConnectionsArgs = {
  input: AppConnectionPaginationInput;
};


export type QueryGetAppToolsArgs = {
  input: AppToolPaginationInput;
};


export type QueryGetAppTriggersArgs = {
  input: AppTriggerPaginationInput;
};


export type QueryGetAppsArgs = {
  input: AppPaginationInput;
};


export type QueryGetFilesArgs = {
  input: FilePaginationInput;
};


export type QueryGetMarketplaceTemplatesArgs = {
  pagination: MarketplacePaginationInput;
};


export type QueryGetMyAcquiredTemplatesArgs = {
  pagination: MarketplacePaginationInput;
};


export type QueryGetMyTemplatesArgs = {
  pagination: MyTemplatesPaginationInput;
};


export type QueryGetProjectsArgs = {
  input: ProjectPaginationInput;
};


export type QueryGetSubscriptionLimitArgs = {
  input?: InputMaybe<CheckLimitInput>;
};


export type QueryGetTemplateByIdArgs = {
  templateId: Scalars['ID']['input'];
};


export type QueryGetTemplateReviewsArgs = {
  pagination: ReviewsPaginationInput;
  templateId: Scalars['ID']['input'];
};


export type QueryGetTemplatesByCategoryArgs = {
  categoryName: Scalars['String']['input'];
  pagination?: InputMaybe<MarketplacePaginationInput>;
};


export type QueryGetTemplatesByTagArgs = {
  pagination?: InputMaybe<MarketplacePaginationInput>;
  tagName: Scalars['String']['input'];
};


export type QueryGetWorkflowArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetWorkflowsArgs = {
  input: WorkflowPaginationInput;
};


export type QuerySearchTemplatesArgs = {
  pagination?: InputMaybe<MarketplacePaginationInput>;
  query: Scalars['String']['input'];
};


export type QueryWorkflowChatEventsArgs = {
  input: QueryWorkflowChatEventsInput;
};


export type QueryWorkflowLogsArgs = {
  input: QueryWorkflowLogsInput;
};

/** Sorting options for workflows */
export enum QuerySortEnum {
  Date = 'DATE',
  Name = 'NAME'
}

/** Type of tool action (tools or trigger) */
export enum QueryToolType {
  Tools = 'TOOLS',
  Trigger = 'TRIGGER'
}

export type QueryWorkflowChatEventsInput = {
  /** The ID of the WorkflowLog whose chat (and its childrens chat) you want */
  workflowLogId: Scalars['ID']['input'];
};

export type QueryWorkflowLogsInput = {
  /** Cursor (last-seen log ID) for pagination */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Only include logs created ≤ this date/time */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Number of logs to return per page */
  limit?: Scalars['Float']['input'];
  /** Only include logs created ≥ this date/time */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter by external task ID */
  taskId?: InputMaybe<Scalars['ID']['input']>;
  /** Filter by workflow instance ID */
  workflowId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemoveUserFromTenantInput = {
  /** User ID to remove */
  userId: Scalars['String']['input'];
};

export type ResendVerificationInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ResetPasswordRequestInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordVerificationInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type ReviewsPaginationInput = {
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  sortOrder?: QuerySortEnum;
};

/** User status */
export enum Status {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED'
}

export type SubmitReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToPubSubEvents: PubSubType;
};


export type SubscriptionSubscribeToPubSubEventsArgs = {
  input: SubscriptionInput;
};

export type SubscriptionInput = {
  /** Channel to subscribe to (omit to receive from every channel). */
  channel?: InputMaybe<Array<PubSubChannel>>;
  /** Event type to subscribe to (omit to receive every event type). */
  event?: InputMaybe<Array<PubSubEvent>>;
};

/** Subscription statuses */
export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  PastDue = 'PAST_DUE',
  Trialing = 'TRIALING'
}

/** Available subscription types */
export enum SubscriptionType {
  Canceled = 'CANCELED',
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Pro = 'PRO',
  ProTrial = 'PRO_TRIAL',
  Starter = 'STARTER',
  StarterTrial = 'STARTER_TRIAL',
  Team = 'TEAM',
  TeamTrial = 'TEAM_TRIAL'
}

/** Subscription types */
export enum SubscriptionTypeInput {
  Enterprise = 'ENTERPRISE',
  Pro = 'PRO',
  Starter = 'STARTER',
  Team = 'TEAM'
}

/** Support issue types */
export enum SupportIssueType {
  Feedback = 'FEEDBACK',
  Framework = 'FRAMEWORK',
  General = 'GENERAL',
  Tool = 'TOOL',
  Trigger = 'TRIGGER'
}

/** Support priorities */
export enum SupportPriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Urgent = 'URGENT'
}

export type SupportReplyIdInput = {
  id: Scalars['ID']['input'];
};

/** Support statuses */
export enum SupportStatus {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN',
  Resolved = 'RESOLVED'
}

export type SwitchTenantInput = {
  /** Tenant ID to switch to */
  tenantId: Scalars['String']['input'];
};

/** Target position for nodes and components */
export enum TargetPositionType {
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export enum TaskContinueType {
  Approve = 'APPROVE',
  Reject = 'REJECT'
}

/** Template publication status */
export enum TemplateStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE',
  PendingApproval = 'PENDING_APPROVAL',
  Rejected = 'REJECTED'
}

export type TenantAuthResponseType = {
  __typename?: 'TenantAuthResponseType';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type TenantInvitationType = {
  __typename?: 'TenantInvitationType';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  tenant?: Maybe<TenantTypeDto>;
  tenantId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  user?: Maybe<UserType>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** Types of tenant */
export enum TenantType {
  Admin = 'ADMIN',
  Enterprise = 'ENTERPRISE',
  Team = 'TEAM'
}

export type TenantTypeDto = {
  __typename?: 'TenantTypeDTO';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: Status;
  subscriptionType: SubscriptionType;
  type: TenantType;
  updatedAt: Scalars['DateTime']['output'];
  userRole?: Maybe<TenantUserRoleType>;
};

/** Tenant user roles */
export enum TenantUserRoleType {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type TenantUserType = {
  __typename?: 'TenantUserType';
  accessRole: TenantUserRoleType;
  tenant?: Maybe<TenantTypeDto>;
  tenantId: Scalars['ID']['output'];
  user?: Maybe<UserType>;
  userId: Scalars['ID']['output'];
};

export type ToggleFeaturedTemplateInput = {
  isFeatured: Scalars['Boolean']['input'];
  templateId: Scalars['ID']['input'];
};

export type TriggerType = {
  __typename?: 'TriggerType';
  active: Scalars['Boolean']['output'];
  configurations?: Maybe<Scalars['JSON']['output']>;
  params: Scalars['JSON']['output'];
  workflowAppConnection?: Maybe<AppConnectionType>;
  workflowAppTrigger?: Maybe<AppTriggerType>;
};

export type UaCreateSupportInput = {
  email: Scalars['String']['input'];
  issueType: SupportIssueType;
  message: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type UpdateAgentToolInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['JSON']['input']>;
  workflowId: Scalars['ID']['input'];
};

export type UpdateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConnectionInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  refreshConnection?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateEdgeInput = {
  id: Scalars['ID']['input'];
  sourceColor?: InputMaybe<ProjectColor>;
  sourceComponentId?: InputMaybe<Scalars['ID']['input']>;
  workflowId: Scalars['ID']['input'];
};

export type UpdateNodeComponentInput = {
  color: ProjectColor;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['JSON']['input']>;
  workflowId: Scalars['ID']['input'];
};

export type UpdateNodeInput = {
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['JSON']['input']>;
  workflowId: Scalars['ID']['input'];
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdatePreferenceInput = {
  activeWorkflowId?: InputMaybe<Scalars['String']['input']>;
  data: Scalars['JSON']['input'];
  fontSize?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<PreferenceLanguage>;
  sideBarMode?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSupportInput = {
  id: Scalars['ID']['input'];
  priority?: InputMaybe<SupportPriority>;
  status?: InputMaybe<SupportStatus>;
};

export type UpdateTemplateInput = {
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prerequisites?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  usageInstructions?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
  workflowData?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTemplateStatusInput = {
  status: TemplateStatus;
  templateId: Scalars['ID']['input'];
};

export type UpdateTenantInput = {
  /** Tenant description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Tenant name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTenantUserRoleInput = {
  /** New role for the user */
  role: TenantUserRoleType;
  /** User ID */
  userId: Scalars['String']['input'];
};

export type UpdateTriggerInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  nodeId: Scalars['ID']['input'];
  params: Scalars['JSON']['input'];
  workflowId: Scalars['ID']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVariableInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  sensitive?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkflowInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type UsageLimitType = {
  __typename?: 'UsageLimitType';
  limit?: Maybe<Scalars['String']['output']>;
  remaining?: Maybe<Scalars['String']['output']>;
  type: LimitType;
  usagePercentages?: Maybe<Scalars['String']['output']>;
  used?: Maybe<Scalars['String']['output']>;
};

export type UserAcquiredTemplateType = {
  __typename?: 'UserAcquiredTemplateType';
  acquiredAt: Scalars['DateTime']['output'];
  acquiredVersion: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pricePaid: Scalars['Float']['output'];
  template: MarketplaceTemplateType;
  templateId: Scalars['String']['output'];
  user: UserType;
  userId: Scalars['String']['output'];
};

export type UserInfoType = {
  __typename?: 'UserInfoType';
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type UserSubscriptionResponse = {
  __typename?: 'UserSubscriptionResponse';
  cancelAtPeriodEnd?: Maybe<Scalars['Boolean']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  nextBillingDate?: Maybe<Scalars['DateTime']['output']>;
  planType: SubscriptionType;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<SubscriptionStatus>;
  trialEndDate?: Maybe<Scalars['DateTime']['output']>;
  trialStartDate?: Maybe<Scalars['DateTime']['output']>;
};

export type UserType = {
  __typename?: 'UserType';
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  onboarding?: Maybe<Array<OnboardingEntryType>>;
  preferences?: Maybe<PreferenceType>;
  subscription?: Maybe<UserSubscriptionResponse>;
  subscriptionType: SubscriptionType;
  username?: Maybe<Scalars['String']['output']>;
};

export type VariableType = {
  __typename?: 'VariableType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sensitive: Scalars['Boolean']['output'];
  value: Scalars['String']['output'];
};

export type VerifyEmailInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

/** Workflow app connection statuses */
export enum WorkflowAppConnectionStatus {
  Active = 'ACTIVE',
  Failed = 'FAILED',
  Initiated = 'INITIATED'
}

/** Workflow app connection types */
export enum WorkflowAppConnectionType {
  ApiKey = 'API_KEY',
  BearerToken = 'BEARER_TOKEN',
  Oauth2 = 'OAUTH2'
}

/** Workflow app types */
export enum WorkflowAppType {
  Composio = 'COMPOSIO',
  Internal = 'INTERNAL'
}

/** One message in the chat history for a node */
export type WorkflowChatEventType = {
  __typename?: 'WorkflowChatEventType';
  createdAt: Scalars['DateTime']['output'];
  /** Arbitrary JSON payload of the event */
  eventData?: Maybe<Scalars['JSON']['output']>;
  eventType: EventType;
  id: Scalars['ID']['output'];
};

/** Paginated list of workflow logs */
export type WorkflowLogPaginatedType = {
  __typename?: 'WorkflowLogPaginatedType';
  /** Whether more pages exist */
  hasMore: Scalars['Boolean']['output'];
  items?: Maybe<Array<WorkflowLogType>>;
  /** Cursor for next page */
  nextCursor?: Maybe<Scalars['String']['output']>;
};

/** Workflow log statuses */
export enum WorkflowLogStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  Running = 'RUNNING',
  Waiting = 'WAITING'
}

/** One node-execution record in a workflow run */
export type WorkflowLogType = {
  __typename?: 'WorkflowLogType';
  chatLogs?: Maybe<Array<WorkflowChatEventType>>;
  /** Any direct child logs (sub-nodes) of this execution */
  children?: Maybe<Array<WorkflowLogType>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  node?: Maybe<WorkflowNodeType>;
  status: WorkflowLogStatus;
  taskId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workflow?: Maybe<WorkflowType>;
};

export type WorkflowNodeType = {
  __typename?: 'WorkflowNodeType';
  agentTools?: Maybe<Array<AgentToolType>>;
  components?: Maybe<Array<NodeComponentType>>;
  configurations?: Maybe<Scalars['JSON']['output']>;
  framework?: Maybe<FrameworkType>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position: Scalars['JSON']['output'];
  trigger?: Maybe<TriggerType>;
  type: NodeType;
};

export type WorkflowPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Whether to return only pinned workflows */
  pinned?: Scalars['Boolean']['input'];
  /** Project ID to filter workflows */
  projectId?: InputMaybe<Scalars['ID']['input']>;
  /** Filter workflows by name or date */
  sort?: QuerySortEnum;
};

export type WorkflowType = {
  __typename?: 'WorkflowType';
  color?: Maybe<ProjectColor>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  edges?: Maybe<Array<EdgeType>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nodes?: Maybe<Array<WorkflowNodeType>>;
  pinned?: Maybe<Scalars['Boolean']['output']>;
  project?: Maybe<ProjectType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UpdateOnboardingInput = {
  answer?: InputMaybe<Array<Scalars['String']['input']>>;
  question?: InputMaybe<Scalars['String']['input']>;
  step?: InputMaybe<Scalars['Float']['input']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginType', accessToken: string } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AiMessageInput = {
  input: Scalars['JSON']['input'];
};

export type AcceptTenantInvitationInput = {
  /** Invitation token */
  token: Scalars['String']['input'];
};

export type AcquireTemplateResponseType = {
  __typename?: 'AcquireTemplateResponseType';
  acquisition: UserAcquiredTemplateType;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type AddAgentToolInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  appToolId: Scalars['ID']['input'];
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  nodeId: Scalars['ID']['input'];
  position: Scalars['JSON']['input'];
  workflowId: Scalars['ID']['input'];
};

export type AddNodeComponentInput = {
  color: ProjectColor;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  nodeId: Scalars['ID']['input'];
  position: Scalars['JSON']['input'];
  type: ComponentType;
  workflowId: Scalars['ID']['input'];
};

export type AdminCreateSupportReplyInput = {
  message: Scalars['String']['input'];
  supportId: Scalars['ID']['input'];
};

export type AdminFeaturedToggleResponse = {
  __typename?: 'AdminFeaturedToggleResponse';
  isFeatured: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  templateId: Scalars['ID']['output'];
};

export type AdminGoogleCallbackInput = {
  code: Scalars['String']['input'];
};

export type AdminLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminLoginType = {
  __typename?: 'AdminLoginType';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type AdminMarketplaceCategoryType = {
  __typename?: 'AdminMarketplaceCategoryType';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  templateCount: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AdminSupportPaginationInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  /** Cursor for previous page */
  prevCursor?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<SupportPriority>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SupportStatus>;
};

export type AdminSupportReplyType = {
  __typename?: 'AdminSupportReplyType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  supportId: Scalars['ID']['output'];
  tenantUserId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
  userInfo?: Maybe<UserInfoType>;
};

export type AdminSupportType = {
  __typename?: 'AdminSupportType';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  issueType: SupportIssueType;
  message: Scalars['String']['output'];
  priority: SupportPriority;
  replies?: Maybe<Array<AdminSupportReplyType>>;
  status: SupportStatus;
  subject: Scalars['String']['output'];
  tenantId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
  userInfo?: Maybe<UserInfoType>;
};

export type AdminTemplateStatusUpdateResponse = {
  __typename?: 'AdminTemplateStatusUpdateResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  templateId: Scalars['ID']['output'];
};

export type AdminUpdateUserInput = {
  status?: InputMaybe<Status>;
  subscriptionType?: InputMaybe<SubscriptionType>;
};

export type AdminUserPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of users to return */
  limit?: Scalars['Float']['input'];
  /** Cursor for reverse pagination (previous page) */
  prevCursor?: InputMaybe<Scalars['String']['input']>;
  /** Search term for name or email */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort users by name or creation date */
  sort?: QuerySortEnum;
  status?: InputMaybe<Status>;
  /** Filter users by subscription type */
  subscriptionType?: InputMaybe<SubscriptionType>;
};

export type AdminUserType = {
  __typename?: 'AdminUserType';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  status: Status;
  subscriptionType: SubscriptionType;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type AgentToolType = {
  __typename?: 'AgentToolType';
  configurations?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  position: Scalars['JSON']['output'];
  workflowAppConnection?: Maybe<AppConnectionType>;
  workflowAppTool?: Maybe<AppToolType>;
};

export type ApiKeyType = {
  __typename?: 'ApiKeyType';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AppConnectionPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Tool connection id to filter tool connections. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Query connection for the type. */
  status?: InputMaybe<WorkflowAppConnectionStatus>;
  /** Tool id to filter tool connections. */
  toolId?: InputMaybe<Scalars['ID']['input']>;
};

export type AppConnectionType = {
  __typename?: 'AppConnectionType';
  connectionStatus?: Maybe<WorkflowAppConnectionStatus>;
  connectionType?: Maybe<WorkflowAppConnectionType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  params: Scalars['JSON']['output'];
  workflowApp: AppType;
};

export type AppPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Tool name to filter tools by. If not provided, all tools are returned. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tool id to filter tools by. */
  toolId?: InputMaybe<Scalars['ID']['input']>;
  /** Query the tools for either action or trigger. */
  type?: InputMaybe<QueryToolType>;
};

export type AppToolPaginationInput = {
  /** Tool action id to filter tool actions. */
  actionId?: InputMaybe<Scalars['ID']['input']>;
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Action name to filter actions by. If not provided, all actions are returned. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tool id to filter tool actions. */
  toolId?: InputMaybe<Scalars['ID']['input']>;
};

export type AppToolType = {
  __typename?: 'AppToolType';
  active: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enum: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  workflowApp: AppType;
  workflowAppId: Scalars['String']['output'];
};

export type AppTriggerPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Trigger name to filter trigger by. If not provided, all triggers are returned. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tool id to filter tool triggers. */
  toolId?: InputMaybe<Scalars['ID']['input']>;
  /** Tool trigger id to filter tool triggers. */
  triggerId?: InputMaybe<Scalars['ID']['input']>;
};

export type AppTriggerType = {
  __typename?: 'AppTriggerType';
  active: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enum: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  params: Scalars['JSON']['output'];
  properties?: Maybe<Scalars['JSON']['output']>;
  workflowApp: AppType;
  workflowAppId: Scalars['String']['output'];
};

export type AppType = {
  __typename?: 'AppType';
  appId?: Maybe<Scalars['String']['output']>;
  appType: WorkflowAppType;
  authParams: Scalars['JSON']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type AuthType = {
  __typename?: 'AuthType';
  email: Scalars['String']['output'];
};

/** Billing intervals */
export enum BillingInterval {
  Month = 'MONTH',
  Year = 'YEAR'
}

export type CancelSubscriptionInput = {
  cancellationReason?: InputMaybe<Scalars['String']['input']>;
};

export type CancelSubscriptionResponse = {
  __typename?: 'CancelSubscriptionResponse';
  success: Scalars['Boolean']['output'];
};

export type CancelWorkflowInput = {
  taskId: Scalars['ID']['input'];
  workflowLogId: Scalars['ID']['input'];
};

export type ChatMessageType = {
  __typename?: 'ChatMessageType';
  message: Scalars['String']['output'];
  taskid: Scalars['ID']['output'];
};

export type CheckLimitInput = {
  limitType?: InputMaybe<LimitType>;
};

export type CheckLimitType = {
  __typename?: 'CheckLimitType';
  limits: Array<UsageLimitType>;
};

export type CheckUserInput = {
  email: Scalars['String']['input'];
};

export type CheckoutSessionResponse = {
  __typename?: 'CheckoutSessionResponse';
  checkoutUrl: Scalars['String']['output'];
};

/** Types of components in the system */
export enum ComponentType {
  Agent = 'AGENT',
  Task = 'TASK'
}

export type ConnectionUrlType = {
  __typename?: 'ConnectionURLType';
  id: Scalars['ID']['output'];
  redirectURL?: Maybe<Scalars['String']['output']>;
};

export type ContinueWorkflowInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  taskId: Scalars['ID']['input'];
  type: TaskContinueType;
  workflowLogId: Scalars['ID']['input'];
};

export type CreateAgentToolInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  appToolId: Scalars['ID']['input'];
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  position: Scalars['JSON']['input'];
};

export type CreateApiKeyInput = {
  name: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCheckoutSessionInput = {
  billingInterval: BillingInterval;
  cancelUrl: Scalars['String']['input'];
  subscriptionType: SubscriptionTypeInput;
  successUrl: Scalars['String']['input'];
};

export type CreateConnectionInput = {
  authParams: Scalars['JSON']['input'];
  name: Scalars['String']['input'];
  redirectPath?: InputMaybe<Scalars['String']['input']>;
  workflowAppId: Scalars['ID']['input'];
};

export type CreateEdgeInput = {
  sourceColor: ProjectColor;
  sourceComponentId?: InputMaybe<Scalars['ID']['input']>;
  sourceNodeId: Scalars['ID']['input'];
  sourcePosition: TargetPositionType;
  targetNodeId: Scalars['ID']['input'];
  targetPosition: TargetPositionType;
  workflowId: Scalars['ID']['input'];
};

export type CreateFileInput = {
  file: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};

export type CreateNodeInput = {
  agentTools?: InputMaybe<Array<CreateAgentToolInput>>;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  framework?: InputMaybe<FrameworkType>;
  name?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['JSON']['input'];
  trigger?: InputMaybe<CreateTriggerInput>;
  type: NodeType;
  workflowId: Scalars['ID']['input'];
};

export type CreateProjectInput = {
  color: ProjectColor;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateSupportInput = {
  issueType: SupportIssueType;
  message: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type CreateSupportReplyInput = {
  message: Scalars['String']['input'];
  supportId: Scalars['ID']['input'];
};

export type CreateTagInput = {
  name: Scalars['String']['input'];
};

export type CreateTenantInput = {
  /** Optional description for the tenant */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique name for the tenant */
  name: Scalars['String']['input'];
  /** Type of tenant */
  type: TenantType;
};

export type CreateTriggerInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  appTriggerId: Scalars['ID']['input'];
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  params?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateVariableInput = {
  name: Scalars['String']['input'];
  sensitive: Scalars['Boolean']['input'];
  value: Scalars['String']['input'];
};

export type CreateWaitlistInput = {
  email: Scalars['String']['input'];
};

export type CreateWorkflowFromTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkflowInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type DeleteAgentToolInput = {
  id: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type DeleteConnectionInput = {
  id: Scalars['ID']['input'];
};

export type DeleteEdgeInput = {
  id: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type DeleteFileInput = {
  id: Scalars['ID']['input'];
};

export type DeleteNodeComponentInput = {
  id: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type DeleteNodeInput = {
  id: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type DeleteProjectInput = {
  id: Scalars['ID']['input'];
};

export type DeleteTenantInput = {
  /** Confirmation text - must be "DELETE" to proceed */
  confirmation: Scalars['String']['input'];
};

export type DeleteWorkflowInput = {
  id: Scalars['ID']['input'];
};

export type DeleteWorkflowLogInput = {
  /** The ID of the WorkflowLog to delete, including all its children and chat logs. */
  workflowLogId: Scalars['ID']['input'];
};

export type DisableTriggerInput = {
  nodeId: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

export type EdgeType = {
  __typename?: 'EdgeType';
  id: Scalars['ID']['output'];
  sourceColor: ProjectColor;
  sourceComponentId?: Maybe<Scalars['ID']['output']>;
  sourceNodeId: Scalars['ID']['output'];
  sourcePosition: TargetPositionType;
  targetNodeId: Scalars['ID']['output'];
  targetPosition: TargetPositionType;
};

export type EnableTriggerInput = {
  nodeId: Scalars['ID']['input'];
  workflowId: Scalars['ID']['input'];
};

/** Types of events in the worflow */
export enum EventType {
  AgentExecutionCompletedEvent = 'AgentExecutionCompletedEvent',
  AgentExecutionErrorEvent = 'AgentExecutionErrorEvent',
  AgentExecutionStartedEvent = 'AgentExecutionStartedEvent',
  AgentReasoningCompletedEvent = 'AgentReasoningCompletedEvent',
  AgentReasoningFailedEvent = 'AgentReasoningFailedEvent',
  AgentReasoningStartedEvent = 'AgentReasoningStartedEvent',
  ConnectorInputEvent = 'ConnectorInputEvent',
  CrewKickoffCompletedEvent = 'CrewKickoffCompletedEvent',
  CrewKickoffFailedEvent = 'CrewKickoffFailedEvent',
  CrewKickoffStartedEvent = 'CrewKickoffStartedEvent',
  CrewTestCompletedEvent = 'CrewTestCompletedEvent',
  CrewTestFailedEvent = 'CrewTestFailedEvent',
  CrewTestStartedEvent = 'CrewTestStartedEvent',
  CrewTrainCompletedEvent = 'CrewTrainCompletedEvent',
  CrewTrainFailedEvent = 'CrewTrainFailedEvent',
  CrewTrainStartedEvent = 'CrewTrainStartedEvent',
  FlowCreatedEvent = 'FlowCreatedEvent',
  FlowFinishedEvent = 'FlowFinishedEvent',
  FlowPlotEvent = 'FlowPlotEvent',
  FlowStartedEvent = 'FlowStartedEvent',
  KnowledgeQueryCompletedEvent = 'KnowledgeQueryCompletedEvent',
  KnowledgeQueryFailedEvent = 'KnowledgeQueryFailedEvent',
  KnowledgeQueryStartedEvent = 'KnowledgeQueryStartedEvent',
  KnowledgeRetrievalCompletedEvent = 'KnowledgeRetrievalCompletedEvent',
  KnowledgeRetrievalStartedEvent = 'KnowledgeRetrievalStartedEvent',
  KnowledgeSearchQueryFailedEvent = 'KnowledgeSearchQueryFailedEvent',
  LlmCallCompletedEvent = 'LLMCallCompletedEvent',
  LlmCallFailedEvent = 'LLMCallFailedEvent',
  LlmCallStartedEvent = 'LLMCallStartedEvent',
  LlmStreamChunkEvent = 'LLMStreamChunkEvent',
  MethodExecutionFailedEvent = 'MethodExecutionFailedEvent',
  MethodExecutionFinishedEvent = 'MethodExecutionFinishedEvent',
  MethodExecutionStartedEvent = 'MethodExecutionStartedEvent',
  TaskApprovalRequestEvent = 'TaskApprovalRequestEvent',
  TaskApprovalResponseEvent = 'TaskApprovalResponseEvent',
  TaskCompletedEvent = 'TaskCompletedEvent',
  TaskEvaluationEvent = 'TaskEvaluationEvent',
  TaskFailedEvent = 'TaskFailedEvent',
  TaskOutput = 'TaskOutput',
  TaskStartedEvent = 'TaskStartedEvent',
  ToolExecutionErrorEvent = 'ToolExecutionErrorEvent',
  ToolSelectionErrorEvent = 'ToolSelectionErrorEvent',
  ToolUsageErrorEvent = 'ToolUsageErrorEvent',
  ToolUsageFinishedEvent = 'ToolUsageFinishedEvent',
  ToolUsageStartedEvent = 'ToolUsageStartedEvent',
  ToolValidateInputErrorEvent = 'ToolValidateInputErrorEvent',
  UserInputEvent = 'UserInputEvent'
}

export type FilePaginationInput = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: Scalars['Int']['input'];
};

export type FileType = {
  __typename?: 'FileType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

/** Framework types */
export enum FrameworkType {
  Crewai = 'CREWAI',
  GoogleAdk = 'GOOGLE_ADK',
  OpenaiSdk = 'OPENAI_SDK'
}

export type GoogleAuthCallbackInput = {
  code: Scalars['String']['input'];
};

export type InviteUserToTenantInput = {
  /** Email address of the user to invite */
  email: Scalars['String']['input'];
  /** Role to assign to the invited user */
  role?: TenantUserRoleType;
};

/** Subscription limit types */
export enum LimitType {
  Executions = 'EXECUTIONS',
  Storage = 'STORAGE',
  VibeExecutions = 'VIBE_EXECUTIONS',
  Workflows = 'WORKFLOWS'
}

/** Types of logs in the system */
export enum LogType {
  Api = 'API',
  Chat = 'CHAT',
  Edge = 'EDGE',
  Test = 'TEST',
  Training = 'TRAINING'
}

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginType = {
  __typename?: 'LoginType';
  accessToken: Scalars['String']['output'];
  isVerified: Scalars['Boolean']['output'];
  profileCompleted: Scalars['Boolean']['output'];
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type MarketplaceCategoryType = {
  __typename?: 'MarketplaceCategoryType';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  templates?: Maybe<Array<MarketplaceTemplateType>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MarketplaceFiltersInput = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  freeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  minRating?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<MarketplaceSortBy>;
  sortOrder?: InputMaybe<QuerySortEnum>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MarketplacePaginationInput = {
  filters?: InputMaybe<MarketplaceFiltersInput>;
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};

export type MarketplaceReviewType = {
  __typename?: 'MarketplaceReviewType';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  template: MarketplaceTemplateType;
  templateId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
  userId: Scalars['String']['output'];
};

/** Available sorting options for marketplace templates */
export enum MarketplaceSortBy {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME',
  Popularity = 'POPULARITY',
  Price = 'PRICE',
  Rating = 'RATING',
  UpdatedAt = 'UPDATED_AT'
}

export type MarketplaceTagType = {
  __typename?: 'MarketplaceTagType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MarketplaceTemplateType = {
  __typename?: 'MarketplaceTemplateType';
  acquiredBy: Array<UserAcquiredTemplateType>;
  acquisitionCount: Scalars['Int']['output'];
  author?: Maybe<UserType>;
  authorId?: Maybe<Scalars['String']['output']>;
  averageRating?: Maybe<Scalars['Float']['output']>;
  category?: Maybe<MarketplaceCategoryType>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isFeatured: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parentTemplate?: Maybe<MarketplaceTemplateType>;
  parentTemplateId?: Maybe<Scalars['String']['output']>;
  prerequisites?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  reviewCount: Scalars['Int']['output'];
  reviews: Array<MarketplaceReviewType>;
  status: TemplateStatus;
  tags: Array<MarketplaceTagType>;
  updatedAt: Scalars['DateTime']['output'];
  usageInstructions?: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
  versions: Array<MarketplaceTemplateType>;
  workflowData: Scalars['String']['output'];
};

export type MessageWorkflowInput = {
  id: Scalars['ID']['input'];
  input: Scalars['JSON']['input'];
  inputType: LogType;
  inputVariables?: InputMaybe<Scalars['JSON']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept a tenant invitation */
  acceptTenantInvitation: TenantUserType;
  /** Acquire/purchase a template */
  acquireTemplate: AcquireTemplateResponseType;
  /** Adds a new agent tool for the authenticated user */
  addAgentTool: WorkflowNodeType;
  /** Adds a new component to a node for the authenticated user */
  addNodeComponent: WorkflowNodeType;
  /** Create a new marketplace category (admin only) */
  adminCreateCategory: AdminMarketplaceCategoryType;
  adminCreateSupportReply: AdminSupportReplyType;
  /** Delete marketplace category (admin only) */
  adminDeleteCategory: Scalars['Boolean']['output'];
  adminDeleteUser: Scalars['Boolean']['output'];
  adminGoogleCallback: AdminLoginType;
  adminLogin: AdminLoginType;
  adminMarkSupportReplyRead: Scalars['Boolean']['output'];
  /** Toggle featured status of template (admin only) */
  adminToggleFeaturedTemplate: AdminFeaturedToggleResponse;
  /** Update marketplace category (admin only) */
  adminUpdateCategory: AdminMarketplaceCategoryType;
  adminUpdateSupport: Scalars['Boolean']['output'];
  /** Update template status (admin only) */
  adminUpdateTemplateStatus: AdminTemplateStatusUpdateResponse;
  adminUpdateUser: AdminUserType;
  /** Sends a message to an AI assistant workflow */
  assistantWorkflow: ChatMessageType;
  /** Cancel an active subscription */
  cancelSubscription: CancelSubscriptionResponse;
  /** Cancel a workflow run */
  cancelWorkflow: Scalars['Boolean']['output'];
  checkUser: Scalars['Boolean']['output'];
  /** Continue a waiting workflow run with a message */
  continueWorkflow: WorkflowChatEventType;
  /** Creates a new API key for the authenticated user */
  createApiKey: ApiKeyType;
  /** Creates a new app connection for the authenticated user */
  createConnection: ConnectionUrlType;
  /** Creates a new edge for the authenticated user */
  createEdge: EdgeType;
  /** Creates a new file entry for the authenticated user */
  createFile: FileType;
  /** Creates a new node for the authenticated user */
  createNode: WorkflowNodeType;
  /** Creates a new project for the authenticated user */
  createProject: ProjectType;
  /** Create a Stripe checkout session for subscription */
  createSubscriptionSession: CheckoutSessionResponse;
  createSupport: Scalars['String']['output'];
  createSupportReply: Scalars['String']['output'];
  /** Create a new marketplace tag */
  createTag: MarketplaceTagType;
  /** Create a new tenant */
  createTenant: TenantTypeDto;
  createUser: AuthType;
  /** Creates a new variable for the authenticated user */
  createVariable: VariableType;
  /** Add an email to the waitlist */
  createWaitlist: Scalars['Boolean']['output'];
  /** Creates a new workflow for the authenticated user */
  createWorkflow: WorkflowType;
  /** Create workflow from acquired template */
  createWorkflowFromTemplate: Scalars['Boolean']['output'];
  /** Deletes an existing agent tool for the authenticated user */
  deleteAgentTool: Scalars['Boolean']['output'];
  /** Deletes an API key for the authenticated user */
  deleteApiKey: Scalars['Boolean']['output'];
  /** Deletes an app connection for the authenticated user */
  deleteConnection: Scalars['Boolean']['output'];
  /** Deletes an existing edge for the authenticated user */
  deleteEdge: Scalars['Boolean']['output'];
  /** Deletes a file of the authenticated user */
  deleteFile: Scalars['Boolean']['output'];
  /** Deletes an existing node for the authenticated user */
  deleteNode: Scalars['Boolean']['output'];
  /** Deletes an existing node component for the authenticated user */
  deleteNodeComponent: Scalars['Boolean']['output'];
  /** Deletes a project for the authenticated user */
  deleteProject: Scalars['Boolean']['output'];
  /** Delete a review */
  deleteReview: Scalars['Boolean']['output'];
  /** Delete template (soft delete by deactivating) */
  deleteTemplate: Scalars['Boolean']['output'];
  /** Delete current tenant (admin only, all members must be removed first) */
  deleteTenant: Scalars['String']['output'];
  /** Deletes the account of the authenticated user */
  deleteUser: Scalars['Boolean']['output'];
  /** Deletes a variable for the authenticated user */
  deleteVariable: Scalars['Boolean']['output'];
  /** Deletes an existing workflow for the authenticated user */
  deleteWorkflow: Scalars['Boolean']['output'];
  deleteWorkflowLog: Scalars['Boolean']['output'];
  /** Disables an app trigger for the authenticated user */
  disableTrigger: Scalars['Boolean']['output'];
  /** Enables an app trigger for the authenticated user */
  enableTrigger: Scalars['Boolean']['output'];
  googleAuthCallback: LoginType;
  /** Invite a user to the current tenant (admin only) */
  inviteTenantUser: Scalars['String']['output'];
  login: LoginType;
  /** Logs out the user by invalidating their tokens */
  logout: Scalars['Boolean']['output'];
  /** Sends a message to a workflow node */
  messageWorkflow: ChatMessageType;
  /** Publish a new template to the marketplace */
  publishTemplate: PublishTemplateResponseType;
  /** Reactivate a cancelled subscription */
  reactivateSubscription: CancelSubscriptionResponse;
  /** Remove user from current tenant (admin only) */
  removeTenantUser: Scalars['String']['output'];
  resendVerificationEmail: AuthType;
  resetPassword: AuthType;
  resetPasswordRequest: AuthType;
  resetPasswordVerification: AuthType;
  /** Submit a review for an acquired template */
  submitReview: MarketplaceReviewType;
  support: Scalars['String']['output'];
  /** Switch to a specific tenant context */
  switchTenant: TenantAuthResponseType;
  /** Switch back to personal account context */
  switchToPersonalAccount: LoginType;
  /** Updates an existing agent tool for the authenticated user */
  updateAgentTool: WorkflowNodeType;
  /** Updates an existing app connection for the authenticated user */
  updateConnection: AppConnectionType;
  /** Updates an existing edge for the authenticated user */
  updateEdge: EdgeType;
  /** Updates an existing node for the authenticated user */
  updateNode: WorkflowNodeType;
  /** Updates an existing node component for the authenticated user */
  updateNodeComponent: WorkflowNodeType;
  /** Updates the onboarding information of the authenticated user */
  updateOnboarding: OnboardingType;
  /** Updates the password of the authenticated user */
  updatePassword: UserType;
  /** Updates the preference information of the authenticated user */
  updatePreference: PreferenceType;
  /** Updates an existing project for the authenticated user */
  updateProject: ProjectType;
  /** Update an existing review */
  updateReview: MarketplaceReviewType;
  /** Update template by creating a new version */
  updateTemplate: MarketplaceTemplateType;
  /** Update current tenant (admin only) */
  updateTenant: TenantTypeDto;
  /** Update user role in current tenant (admin only) */
  updateTenantUserRole: TenantUserType;
  /** Updates a trigger for the authenticated user */
  updateTrigger: WorkflowNodeType;
  /** Updates the profile of the authenticated user */
  updateUser: UserType;
  /** Updates a variable for the authenticated user */
  updateVariable: VariableType;
  /** Updates an existing workflow for the authenticated user */
  updateWorkflow: WorkflowType;
  verifyEmail: AuthType;
};


export type MutationAcceptTenantInvitationArgs = {
  input: AcceptTenantInvitationInput;
};


export type MutationAcquireTemplateArgs = {
  templateId: Scalars['ID']['input'];
};


export type MutationAddAgentToolArgs = {
  input: AddAgentToolInput;
};


export type MutationAddNodeComponentArgs = {
  input: AddNodeComponentInput;
};


export type MutationAdminCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationAdminCreateSupportReplyArgs = {
  input: AdminCreateSupportReplyInput;
};


export type MutationAdminDeleteCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};


export type MutationAdminDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAdminGoogleCallbackArgs = {
  input: AdminGoogleCallbackInput;
};


export type MutationAdminLoginArgs = {
  input: AdminLoginInput;
};


export type MutationAdminMarkSupportReplyReadArgs = {
  input: SupportReplyIdInput;
};


export type MutationAdminToggleFeaturedTemplateArgs = {
  input: ToggleFeaturedTemplateInput;
};


export type MutationAdminUpdateCategoryArgs = {
  categoryId: Scalars['ID']['input'];
  input: UpdateCategoryInput;
};


export type MutationAdminUpdateSupportArgs = {
  input: UpdateSupportInput;
};


export type MutationAdminUpdateTemplateStatusArgs = {
  input: UpdateTemplateStatusInput;
};


export type MutationAdminUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: AdminUpdateUserInput;
};


export type MutationAssistantWorkflowArgs = {
  input: AiMessageInput;
};


export type MutationCancelSubscriptionArgs = {
  input: CancelSubscriptionInput;
};


export type MutationCancelWorkflowArgs = {
  input: CancelWorkflowInput;
};


export type MutationCheckUserArgs = {
  input: CheckUserInput;
};


export type MutationContinueWorkflowArgs = {
  input: ContinueWorkflowInput;
};


export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationCreateConnectionArgs = {
  input: CreateConnectionInput;
};


export type MutationCreateEdgeArgs = {
  input: CreateEdgeInput;
};


export type MutationCreateFileArgs = {
  input: CreateFileInput;
};


export type MutationCreateNodeArgs = {
  input: CreateNodeInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateSubscriptionSessionArgs = {
  input: CreateCheckoutSessionInput;
};


export type MutationCreateSupportArgs = {
  input: CreateSupportInput;
};


export type MutationCreateSupportReplyArgs = {
  input: CreateSupportReplyInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTenantArgs = {
  input: CreateTenantInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateVariableArgs = {
  input: CreateVariableInput;
};


export type MutationCreateWaitlistArgs = {
  input: CreateWaitlistInput;
};


export type MutationCreateWorkflowArgs = {
  input: CreateWorkflowInput;
};


export type MutationCreateWorkflowFromTemplateArgs = {
  input: CreateWorkflowFromTemplateInput;
  templateId: Scalars['ID']['input'];
};


export type MutationDeleteAgentToolArgs = {
  input: DeleteAgentToolInput;
};


export type MutationDeleteApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteConnectionArgs = {
  input: DeleteConnectionInput;
};


export type MutationDeleteEdgeArgs = {
  input: DeleteEdgeInput;
};


export type MutationDeleteFileArgs = {
  input: DeleteFileInput;
};


export type MutationDeleteNodeArgs = {
  input: DeleteNodeInput;
};


export type MutationDeleteNodeComponentArgs = {
  input: DeleteNodeComponentInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['ID']['input'];
};


export type MutationDeleteTemplateArgs = {
  templateId: Scalars['ID']['input'];
};


export type MutationDeleteTenantArgs = {
  input: DeleteTenantInput;
};


export type MutationDeleteVariableArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteWorkflowArgs = {
  input: DeleteWorkflowInput;
};


export type MutationDeleteWorkflowLogArgs = {
  input: DeleteWorkflowLogInput;
};


export type MutationDisableTriggerArgs = {
  input: DisableTriggerInput;
};


export type MutationEnableTriggerArgs = {
  input: EnableTriggerInput;
};


export type MutationGoogleAuthCallbackArgs = {
  input: GoogleAuthCallbackInput;
};


export type MutationInviteTenantUserArgs = {
  input: InviteUserToTenantInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMessageWorkflowArgs = {
  input: MessageWorkflowInput;
};


export type MutationPublishTemplateArgs = {
  input: PublishTemplateInput;
};


export type MutationRemoveTenantUserArgs = {
  input: RemoveUserFromTenantInput;
};


export type MutationResendVerificationEmailArgs = {
  input: ResendVerificationInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationResetPasswordRequestArgs = {
  input: ResetPasswordRequestInput;
};


export type MutationResetPasswordVerificationArgs = {
  input: ResetPasswordVerificationInput;
};


export type MutationSubmitReviewArgs = {
  input: SubmitReviewInput;
  templateId: Scalars['ID']['input'];
};


export type MutationSupportArgs = {
  input: UaCreateSupportInput;
};


export type MutationSwitchTenantArgs = {
  input: SwitchTenantInput;
};


export type MutationUpdateAgentToolArgs = {
  input: UpdateAgentToolInput;
};


export type MutationUpdateConnectionArgs = {
  input: UpdateConnectionInput;
};


export type MutationUpdateEdgeArgs = {
  input: UpdateEdgeInput;
};


export type MutationUpdateNodeArgs = {
  input: UpdateNodeInput;
};


export type MutationUpdateNodeComponentArgs = {
  input: UpdateNodeComponentInput;
};


export type MutationUpdateOnboardingArgs = {
  input: UpdateOnboardingInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdatePreferenceArgs = {
  input: UpdatePreferenceInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
  reviewId: Scalars['ID']['input'];
};


export type MutationUpdateTemplateArgs = {
  input: UpdateTemplateInput;
  templateId: Scalars['ID']['input'];
};


export type MutationUpdateTenantArgs = {
  input: UpdateTenantInput;
};


export type MutationUpdateTenantUserRoleArgs = {
  input: UpdateTenantUserRoleInput;
};


export type MutationUpdateTriggerArgs = {
  input: UpdateTriggerInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateVariableArgs = {
  input: UpdateVariableInput;
};


export type MutationUpdateWorkflowArgs = {
  input: UpdateWorkflowInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type MyTemplatesPaginationInput = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  sortBy?: MarketplaceSortBy;
  sortOrder?: QuerySortEnum;
};

export type NodeComponentType = {
  __typename?: 'NodeComponentType';
  color: ProjectColor;
  configurations?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['JSON']['output'];
  type: ComponentType;
};

/** Node types */
export enum NodeType {
  Task = 'TASK',
  Team = 'TEAM',
  Tool = 'TOOL',
  Trigger = 'TRIGGER'
}

export type OnboardingEntryType = {
  __typename?: 'OnboardingEntryType';
  answer: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type OnboardingListType = {
  __typename?: 'OnboardingListType';
  onboardingEntries: Array<OnboardingEntryType>;
  totalCount: Scalars['Int']['output'];
};

export type OnboardingType = {
  __typename?: 'OnboardingType';
  answer: Array<Scalars['String']['output']>;
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type PaginatedAdminSupportsType = {
  __typename?: 'PaginatedAdminSupportsType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AdminSupportType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAdminUsersType = {
  __typename?: 'PaginatedAdminUsersType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AdminUserType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAppConnectionType = {
  __typename?: 'PaginatedAppConnectionType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AppConnectionType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAppToolType = {
  __typename?: 'PaginatedAppToolType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AppToolType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAppTriggerType = {
  __typename?: 'PaginatedAppTriggerType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AppTriggerType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedAppType = {
  __typename?: 'PaginatedAppType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<AppType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedFilesType = {
  __typename?: 'PaginatedFilesType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<FileType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedMarketplaceReviewsType = {
  __typename?: 'PaginatedMarketplaceReviewsType';
  data: Array<MarketplaceReviewType>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedMarketplaceTemplatesType = {
  __typename?: 'PaginatedMarketplaceTemplatesType';
  data: Array<MarketplaceTemplateType>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedProjectsType = {
  __typename?: 'PaginatedProjectsType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<ProjectType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedUserAcquiredTemplatesType = {
  __typename?: 'PaginatedUserAcquiredTemplatesType';
  data: Array<UserAcquiredTemplateType>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedWorkflowsType = {
  __typename?: 'PaginatedWorkflowsType';
  hasMore: Scalars['Boolean']['output'];
  items: Array<WorkflowType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

/** Available language options for user preferences */
export enum PreferenceLanguage {
  De = 'DE',
  En = 'EN',
  Es = 'ES',
  Fr = 'FR',
  It = 'IT',
  Ja = 'JA',
  Ko = 'KO',
  Pt = 'PT',
  Ru = 'RU',
  Zh = 'ZH'
}

export type PreferenceType = {
  __typename?: 'PreferenceType';
  activeWorkflowId?: Maybe<Scalars['String']['output']>;
  data: Scalars['JSON']['output'];
  fontSize?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<PreferenceLanguage>;
  sideBarMode?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
};

/** Available colors for projects */
export enum ProjectColor {
  Black = 'BLACK',
  Blue = 'BLUE',
  Brown = 'BROWN',
  Cyan = 'CYAN',
  Gold = 'GOLD',
  Gray = 'GRAY',
  Green = 'GREEN',
  Indigo = 'INDIGO',
  Lime = 'LIME',
  Magenta = 'MAGENTA',
  Navy = 'NAVY',
  Olive = 'OLIVE',
  Orange = 'ORANGE',
  Pink = 'PINK',
  Purple = 'PURPLE',
  Red = 'RED',
  Teal = 'TEAL',
  Turquoise = 'TURQUOISE',
  Violet = 'VIOLET',
  Yellow = 'YELLOW'
}

export type ProjectPaginationInput = {
  /** Cursor for pagination (ID of the last project from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of projects to return */
  limit?: Scalars['Float']['input'];
  /** Filter projects by name or date */
  sort?: QuerySortEnum;
};

export type ProjectType = {
  __typename?: 'ProjectType';
  color?: Maybe<ProjectColor>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pinned: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workflows?: Maybe<Array<WorkflowType>>;
};

/** Channel on which events are published */
export enum PubSubChannel {
  Edge = 'EDGE',
  Node = 'NODE',
  Project = 'PROJECT',
  Support = 'SUPPORT',
  Upload = 'UPLOAD',
  Workflow = 'WORKFLOW'
}

/** Type of event being published */
export enum PubSubEvent {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Initiating = 'INITIATING',
  Log = 'LOG',
  Message = 'MESSAGE',
  Response = 'RESPONSE'
}

export type PubSubType = {
  __typename?: 'PubSubType';
  channel: PubSubChannel;
  /** Arbitrary payload data */
  data: Scalars['JSON']['output'];
  event: PubSubEvent;
};

export type PublishTemplateInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  currency?: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentTemplateId?: InputMaybe<Scalars['String']['input']>;
  prerequisites?: InputMaybe<Scalars['String']['input']>;
  price?: Scalars['Float']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  usageInstructions?: InputMaybe<Scalars['String']['input']>;
  version?: Scalars['String']['input'];
  workflowData: Scalars['String']['input'];
};

export type PublishTemplateResponseType = {
  __typename?: 'PublishTemplateResponseType';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  template: MarketplaceTemplateType;
};

export type Query = {
  __typename?: 'Query';
  /** Get all marketplace categories with template counts (admin only) */
  adminGetAllCategories: Array<AdminMarketplaceCategoryType>;
  /** Get all templates for admin review (admin only) */
  adminGetAllTemplates: Array<MarketplaceTemplateType>;
  /** Get template analytics (admin only) */
  adminGetTemplateAnalytics: Scalars['String']['output'];
  /** Get version history for a template (admin only) */
  adminGetTemplateVersionHistory: Array<MarketplaceTemplateType>;
  /** Get templates by category (admin view) */
  adminGetTemplatesByCategory: Array<AdminMarketplaceCategoryType>;
  /** Get templates pending approval (admin only) */
  adminGetTemplatesPendingApproval: Array<MarketplaceTemplateType>;
  adminGoogleAuthUrl: Scalars['String']['output'];
  adminSupport: AdminSupportType;
  adminSupports: PaginatedAdminSupportsType;
  adminUser: AdminUserType;
  adminUsers: PaginatedAdminUsersType;
  /** Get all marketplace categories */
  getAllCategories: Array<MarketplaceCategoryType>;
  /** Fetches all the API keys information of the authenticated user */
  getApiKeys: Array<ApiKeyType>;
  /** Fetches all app connections for the authenticated user */
  getAppConnections: PaginatedAppConnectionType;
  /** Fetches all app tools for the authenticated user */
  getAppTools: PaginatedAppToolType;
  /** Fetches all app triggers for the authenticated user */
  getAppTriggers: PaginatedAppTriggerType;
  /** Fetches all apps for the authenticated user */
  getApps: PaginatedAppType;
  /** Fetches the profile of the authenticated user */
  getCurrentUser: UserType;
  /** Get featured marketplace templates */
  getFeaturedTemplates: Array<MarketplaceTemplateType>;
  /** Gets paginated files of the authenticated user, ordered by file name */
  getFiles: PaginatedFilesType;
  /** Browse marketplace templates with filters */
  getMarketplaceTemplates: PaginatedMarketplaceTemplatesType;
  /** Get user's acquired templates library */
  getMyAcquiredTemplates: PaginatedUserAcquiredTemplatesType;
  /** Get user's published templates */
  getMyTemplates: PaginatedMarketplaceTemplatesType;
  /** Gets all onboarding questions and answers for the authenticated user */
  getOnboarding: OnboardingListType;
  /** Get popular marketplace tags */
  getPopularTags: Array<MarketplaceTagType>;
  /** Fetches the preference information of the authenticated user */
  getPreference: PreferenceType;
  /** Fetches all projects of the authenticated user */
  getProjects: PaginatedProjectsType;
  /** Get subscription limits, optionally filtered by limit type */
  getSubscriptionLimit: CheckLimitType;
  /** Get all available marketplace tags */
  getTags: Array<MarketplaceTagType>;
  /** Get template details by ID */
  getTemplateById: MarketplaceTemplateType;
  /** Get reviews for a template */
  getTemplateReviews: PaginatedMarketplaceReviewsType;
  /** Get templates by category */
  getTemplatesByCategory: PaginatedMarketplaceTemplatesType;
  /** Get templates by tag name */
  getTemplatesByTag: PaginatedMarketplaceTemplatesType;
  /** Get pending invitations for current tenant (admin only) */
  getTenantInvitations: Array<TenantInvitationType>;
  /** Get current user subscription details */
  getUserSubscription: UserSubscriptionResponse;
  /** Get all tenants for the current user */
  getUserTenants: Array<TenantTypeDto>;
  /** Fetches all the variables information of the authenticated user */
  getVariables: Array<VariableType>;
  /** Fetches a workflow by ID for the authenticated user */
  getWorkflow: WorkflowType;
  /** Fetches all workflows of the authenticated user */
  getWorkflows: PaginatedWorkflowsType;
  googleAuthUrl: Scalars['String']['output'];
  hello: Scalars['String']['output'];
  /** Search templates by query string */
  searchTemplates: PaginatedMarketplaceTemplatesType;
  workflowChatEvents: WorkflowLogType;
  workflowLogs: WorkflowLogPaginatedType;
};


export type QueryAdminGetTemplateAnalyticsArgs = {
  templateId: Scalars['ID']['input'];
};


export type QueryAdminGetTemplateVersionHistoryArgs = {
  parentTemplateId: Scalars['ID']['input'];
};


export type QueryAdminGetTemplatesByCategoryArgs = {
  categoryName: Scalars['String']['input'];
  includeInactive?: Scalars['Boolean']['input'];
};


export type QueryAdminSupportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminSupportsArgs = {
  input: AdminSupportPaginationInput;
};


export type QueryAdminUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminUsersArgs = {
  input: AdminUserPaginationInput;
};


export type QueryGetAppConnectionsArgs = {
  input: AppConnectionPaginationInput;
};


export type QueryGetAppToolsArgs = {
  input: AppToolPaginationInput;
};


export type QueryGetAppTriggersArgs = {
  input: AppTriggerPaginationInput;
};


export type QueryGetAppsArgs = {
  input: AppPaginationInput;
};


export type QueryGetFilesArgs = {
  input: FilePaginationInput;
};


export type QueryGetMarketplaceTemplatesArgs = {
  pagination: MarketplacePaginationInput;
};


export type QueryGetMyAcquiredTemplatesArgs = {
  pagination: MarketplacePaginationInput;
};


export type QueryGetMyTemplatesArgs = {
  pagination: MyTemplatesPaginationInput;
};


export type QueryGetProjectsArgs = {
  input: ProjectPaginationInput;
};


export type QueryGetSubscriptionLimitArgs = {
  input?: InputMaybe<CheckLimitInput>;
};


export type QueryGetTemplateByIdArgs = {
  templateId: Scalars['ID']['input'];
};


export type QueryGetTemplateReviewsArgs = {
  pagination: ReviewsPaginationInput;
  templateId: Scalars['ID']['input'];
};


export type QueryGetTemplatesByCategoryArgs = {
  categoryName: Scalars['String']['input'];
  pagination?: InputMaybe<MarketplacePaginationInput>;
};


export type QueryGetTemplatesByTagArgs = {
  pagination?: InputMaybe<MarketplacePaginationInput>;
  tagName: Scalars['String']['input'];
};


export type QueryGetWorkflowArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetWorkflowsArgs = {
  input: WorkflowPaginationInput;
};


export type QuerySearchTemplatesArgs = {
  pagination?: InputMaybe<MarketplacePaginationInput>;
  query: Scalars['String']['input'];
};


export type QueryWorkflowChatEventsArgs = {
  input: QueryWorkflowChatEventsInput;
};


export type QueryWorkflowLogsArgs = {
  input: QueryWorkflowLogsInput;
};

/** Sorting options for workflows */
export enum QuerySortEnum {
  Date = 'DATE',
  Name = 'NAME'
}

/** Type of tool action (tools or trigger) */
export enum QueryToolType {
  Tools = 'TOOLS',
  Trigger = 'TRIGGER'
}

export type QueryWorkflowChatEventsInput = {
  /** The ID of the WorkflowLog whose chat (and its childrens chat) you want */
  workflowLogId: Scalars['ID']['input'];
};

export type QueryWorkflowLogsInput = {
  /** Cursor (last-seen log ID) for pagination */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Only include logs created ≤ this date/time */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Number of logs to return per page */
  limit?: Scalars['Float']['input'];
  /** Only include logs created ≥ this date/time */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter by external task ID */
  taskId?: InputMaybe<Scalars['ID']['input']>;
  /** Filter by workflow instance ID */
  workflowId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemoveUserFromTenantInput = {
  /** User ID to remove */
  userId: Scalars['String']['input'];
};

export type ResendVerificationInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ResetPasswordRequestInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordVerificationInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type ReviewsPaginationInput = {
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  sortOrder?: QuerySortEnum;
};

/** User status */
export enum Status {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED'
}

export type SubmitReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToPubSubEvents: PubSubType;
};


export type SubscriptionSubscribeToPubSubEventsArgs = {
  input: SubscriptionInput;
};

export type SubscriptionInput = {
  /** Channel to subscribe to (omit to receive from every channel). */
  channel?: InputMaybe<Array<PubSubChannel>>;
  /** Event type to subscribe to (omit to receive every event type). */
  event?: InputMaybe<Array<PubSubEvent>>;
};

/** Subscription statuses */
export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  PastDue = 'PAST_DUE',
  Trialing = 'TRIALING'
}

/** Available subscription types */
export enum SubscriptionType {
  Canceled = 'CANCELED',
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Pro = 'PRO',
  ProTrial = 'PRO_TRIAL',
  Starter = 'STARTER',
  StarterTrial = 'STARTER_TRIAL',
  Team = 'TEAM',
  TeamTrial = 'TEAM_TRIAL'
}

/** Subscription types */
export enum SubscriptionTypeInput {
  Enterprise = 'ENTERPRISE',
  Pro = 'PRO',
  Starter = 'STARTER',
  Team = 'TEAM'
}

/** Support issue types */
export enum SupportIssueType {
  Feedback = 'FEEDBACK',
  Framework = 'FRAMEWORK',
  General = 'GENERAL',
  Tool = 'TOOL',
  Trigger = 'TRIGGER'
}

/** Support priorities */
export enum SupportPriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Urgent = 'URGENT'
}

export type SupportReplyIdInput = {
  id: Scalars['ID']['input'];
};

/** Support statuses */
export enum SupportStatus {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN',
  Resolved = 'RESOLVED'
}

export type SwitchTenantInput = {
  /** Tenant ID to switch to */
  tenantId: Scalars['String']['input'];
};

/** Target position for nodes and components */
export enum TargetPositionType {
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export enum TaskContinueType {
  Approve = 'APPROVE',
  Reject = 'REJECT'
}

/** Template publication status */
export enum TemplateStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE',
  PendingApproval = 'PENDING_APPROVAL',
  Rejected = 'REJECTED'
}

export type TenantAuthResponseType = {
  __typename?: 'TenantAuthResponseType';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  tokenType: Scalars['String']['output'];
};

export type TenantInvitationType = {
  __typename?: 'TenantInvitationType';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  tenant?: Maybe<TenantTypeDto>;
  tenantId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  user?: Maybe<UserType>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** Types of tenant */
export enum TenantType {
  Admin = 'ADMIN',
  Enterprise = 'ENTERPRISE',
  Team = 'TEAM'
}

export type TenantTypeDto = {
  __typename?: 'TenantTypeDTO';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: Status;
  subscriptionType: SubscriptionType;
  type: TenantType;
  updatedAt: Scalars['DateTime']['output'];
  userRole?: Maybe<TenantUserRoleType>;
};

/** Tenant user roles */
export enum TenantUserRoleType {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type TenantUserType = {
  __typename?: 'TenantUserType';
  accessRole: TenantUserRoleType;
  tenant?: Maybe<TenantTypeDto>;
  tenantId: Scalars['ID']['output'];
  user?: Maybe<UserType>;
  userId: Scalars['ID']['output'];
};

export type ToggleFeaturedTemplateInput = {
  isFeatured: Scalars['Boolean']['input'];
  templateId: Scalars['ID']['input'];
};

export type TriggerType = {
  __typename?: 'TriggerType';
  active: Scalars['Boolean']['output'];
  configurations?: Maybe<Scalars['JSON']['output']>;
  params: Scalars['JSON']['output'];
  workflowAppConnection?: Maybe<AppConnectionType>;
  workflowAppTrigger?: Maybe<AppTriggerType>;
};

export type UaCreateSupportInput = {
  email: Scalars['String']['input'];
  issueType: SupportIssueType;
  message: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type UpdateAgentToolInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['JSON']['input']>;
  workflowId: Scalars['ID']['input'];
};

export type UpdateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConnectionInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  refreshConnection?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateEdgeInput = {
  id: Scalars['ID']['input'];
  sourceColor?: InputMaybe<ProjectColor>;
  sourceComponentId?: InputMaybe<Scalars['ID']['input']>;
  workflowId: Scalars['ID']['input'];
};

export type UpdateNodeComponentInput = {
  color: ProjectColor;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['JSON']['input']>;
  workflowId: Scalars['ID']['input'];
};

export type UpdateNodeInput = {
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['JSON']['input']>;
  workflowId: Scalars['ID']['input'];
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdatePreferenceInput = {
  activeWorkflowId?: InputMaybe<Scalars['String']['input']>;
  data: Scalars['JSON']['input'];
  fontSize?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<PreferenceLanguage>;
  sideBarMode?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSupportInput = {
  id: Scalars['ID']['input'];
  priority?: InputMaybe<SupportPriority>;
  status?: InputMaybe<SupportStatus>;
};

export type UpdateTemplateInput = {
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prerequisites?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  usageInstructions?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
  workflowData?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTemplateStatusInput = {
  status: TemplateStatus;
  templateId: Scalars['ID']['input'];
};

export type UpdateTenantInput = {
  /** Tenant description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Tenant name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTenantUserRoleInput = {
  /** New role for the user */
  role: TenantUserRoleType;
  /** User ID */
  userId: Scalars['String']['input'];
};

export type UpdateTriggerInput = {
  appConnectionId?: InputMaybe<Scalars['ID']['input']>;
  configurations?: InputMaybe<Scalars['JSON']['input']>;
  nodeId: Scalars['ID']['input'];
  params: Scalars['JSON']['input'];
  workflowId: Scalars['ID']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVariableInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  sensitive?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkflowInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type UsageLimitType = {
  __typename?: 'UsageLimitType';
  limit?: Maybe<Scalars['String']['output']>;
  remaining?: Maybe<Scalars['String']['output']>;
  type: LimitType;
  usagePercentages?: Maybe<Scalars['String']['output']>;
  used?: Maybe<Scalars['String']['output']>;
};

export type UserAcquiredTemplateType = {
  __typename?: 'UserAcquiredTemplateType';
  acquiredAt: Scalars['DateTime']['output'];
  acquiredVersion: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pricePaid: Scalars['Float']['output'];
  template: MarketplaceTemplateType;
  templateId: Scalars['String']['output'];
  user: UserType;
  userId: Scalars['String']['output'];
};

export type UserInfoType = {
  __typename?: 'UserInfoType';
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type UserSubscriptionResponse = {
  __typename?: 'UserSubscriptionResponse';
  cancelAtPeriodEnd?: Maybe<Scalars['Boolean']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  nextBillingDate?: Maybe<Scalars['DateTime']['output']>;
  planType: SubscriptionType;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<SubscriptionStatus>;
  trialEndDate?: Maybe<Scalars['DateTime']['output']>;
  trialStartDate?: Maybe<Scalars['DateTime']['output']>;
};

export type UserType = {
  __typename?: 'UserType';
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  onboarding?: Maybe<Array<OnboardingEntryType>>;
  preferences?: Maybe<PreferenceType>;
  subscription?: Maybe<UserSubscriptionResponse>;
  subscriptionType: SubscriptionType;
  username?: Maybe<Scalars['String']['output']>;
};

export type VariableType = {
  __typename?: 'VariableType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sensitive: Scalars['Boolean']['output'];
  value: Scalars['String']['output'];
};

export type VerifyEmailInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

/** Workflow app connection statuses */
export enum WorkflowAppConnectionStatus {
  Active = 'ACTIVE',
  Failed = 'FAILED',
  Initiated = 'INITIATED'
}

/** Workflow app connection types */
export enum WorkflowAppConnectionType {
  ApiKey = 'API_KEY',
  BearerToken = 'BEARER_TOKEN',
  Oauth2 = 'OAUTH2'
}

/** Workflow app types */
export enum WorkflowAppType {
  Composio = 'COMPOSIO',
  Internal = 'INTERNAL'
}

/** One message in the chat history for a node */
export type WorkflowChatEventType = {
  __typename?: 'WorkflowChatEventType';
  createdAt: Scalars['DateTime']['output'];
  /** Arbitrary JSON payload of the event */
  eventData?: Maybe<Scalars['JSON']['output']>;
  eventType: EventType;
  id: Scalars['ID']['output'];
};

/** Paginated list of workflow logs */
export type WorkflowLogPaginatedType = {
  __typename?: 'WorkflowLogPaginatedType';
  /** Whether more pages exist */
  hasMore: Scalars['Boolean']['output'];
  items?: Maybe<Array<WorkflowLogType>>;
  /** Cursor for next page */
  nextCursor?: Maybe<Scalars['String']['output']>;
};

/** Workflow log statuses */
export enum WorkflowLogStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  Running = 'RUNNING',
  Waiting = 'WAITING'
}

/** One node-execution record in a workflow run */
export type WorkflowLogType = {
  __typename?: 'WorkflowLogType';
  chatLogs?: Maybe<Array<WorkflowChatEventType>>;
  /** Any direct child logs (sub-nodes) of this execution */
  children?: Maybe<Array<WorkflowLogType>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  node?: Maybe<WorkflowNodeType>;
  status: WorkflowLogStatus;
  taskId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workflow?: Maybe<WorkflowType>;
};

export type WorkflowNodeType = {
  __typename?: 'WorkflowNodeType';
  agentTools?: Maybe<Array<AgentToolType>>;
  components?: Maybe<Array<NodeComponentType>>;
  configurations?: Maybe<Scalars['JSON']['output']>;
  framework?: Maybe<FrameworkType>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position: Scalars['JSON']['output'];
  trigger?: Maybe<TriggerType>;
  type: NodeType;
};

export type WorkflowPaginationInput = {
  /** Cursor for pagination (nextCursor from previous results) */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of workflows to return */
  limit?: Scalars['Float']['input'];
  /** Whether to return only pinned workflows */
  pinned?: Scalars['Boolean']['input'];
  /** Project ID to filter workflows */
  projectId?: InputMaybe<Scalars['ID']['input']>;
  /** Filter workflows by name or date */
  sort?: QuerySortEnum;
};

export type WorkflowType = {
  __typename?: 'WorkflowType';
  color?: Maybe<ProjectColor>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  edges?: Maybe<Array<EdgeType>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nodes?: Maybe<Array<WorkflowNodeType>>;
  pinned?: Maybe<Scalars['Boolean']['output']>;
  project?: Maybe<ProjectType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UpdateOnboardingInput = {
  answer?: InputMaybe<Array<Scalars['String']['input']>>;
  question?: InputMaybe<Scalars['String']['input']>;
  step?: InputMaybe<Scalars['Float']['input']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginType', accessToken: string } };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;