import React, { JSX, ReactNode } from 'react'

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
  component?: JSX.Element
  icon?: JSX.Element
}

export interface CampaignConfig {
  btnText: string
  id: string
  priority: 'high' | 'medium' | 'low' // or just `string` if not restricted
  icon: ReactNode
  sectionList: SectionItem[]
}

export type BillItem = {
  price: number
  isPopulate: boolean
  type: string
  description: string
  sectionList: string[]
}

export type ApiError = {
  response?: {
    data?: {
      error?: string | Record<string, unknown>
      message?: string | Record<string, unknown>
      [key: string]: unknown
    }
    status?: number
    [key: string]: unknown
  }
  status?: number
  message?: string
  [key: string]: unknown
}
