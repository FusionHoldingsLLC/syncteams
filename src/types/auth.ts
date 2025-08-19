export interface FormLoginValue {
  email: string
  password: string
}

export interface SessionUser {
  email?: string
  firstName?: string
  token?: string
  lastName?: string
  iso2?: string
  country?: string
  role?: 'employee' | 'admin'
  phoneNumber?: string
  refreshToken?: string
  jobTitle?: string
  isOwner?: boolean
  agentAccess?: string[]
  _id?: string
}
