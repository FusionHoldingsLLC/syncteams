import CryptoJS from 'crypto-js'
import { PersistStorage, StorageValue } from 'zustand/middleware'

const SECRET_KEY = 'my-secret-key' // 🔑 ideally from env vars

export function createEncryptedStorage<T>(): PersistStorage<T> {
  return {
    getItem: (name): StorageValue<T> | null => {
      const encryptedData = localStorage.getItem(name)
      if (!encryptedData) return null

      try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY)
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
        return JSON.parse(decryptedData) as StorageValue<T>
      } catch (e) {
        console.error('Decryption error:', e)
        return null
      }
    },

    setItem: (name, value): void => {
      try {
        const stringified = JSON.stringify(value)
        const encryptedData = CryptoJS.AES.encrypt(stringified, SECRET_KEY).toString()
        localStorage.setItem(name, encryptedData)
      } catch (e) {
        console.error('Encryption error:', e)
      }
    },

    removeItem: (name): void => {
      localStorage.removeItem(name)
    },
  }
}
