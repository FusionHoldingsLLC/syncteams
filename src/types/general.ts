import React, { ReactNode } from 'react'

export interface UserDetails {
  email?: string
  firstName?: string
  accessToken?: string
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

export interface NavItem {
  label: string
  icon: (active: boolean) => React.ReactNode
  route: string
}

export interface ErrorRes {
  response: {
    data: {
      message: string
    }
  }
}

export interface SectionItem {
  value: string
  label: string
}

export interface CampaignConfig {
  btnText: string
  id: string
  priority: 'high' | 'medium' | 'low' // or just `string` if not restricted
  icon: ReactNode
  sectionList: SectionItem[]
}
