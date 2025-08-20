'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export function useQueryParams() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // ✅ Get a single param
  const getParam = (key: string): string | null => {
    return searchParams.get(key)
  }

  // ✅ Set or update a single param
  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)
    router.push(`?${params.toString()}`)
  }

  // ✅ Batch update multiple params
  const setParams = (updates: Record<string, string | null | undefined>) => {
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })
    router.push(`?${params.toString()}`)
  }

  // ✅ Remove a single param
  const removeParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(key)
    router.push(`?${params.toString()}`)
  }

  // ✅ Clear all params
  const clearParams = () => {
    router.push('?')
  }

  return { getParam, setParam, setParams, removeParam, clearParams }
}
