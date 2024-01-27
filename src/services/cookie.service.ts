import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor() { }

  setSession<T>(key: string, data: T): void {
    const dataString = JSON.stringify(data)

    sessionStorage.setItem(key, dataString)
  }

  getSession<T>(key: string): T | undefined {
    const dataString = sessionStorage.getItem(key)

    const data: T = dataString ? JSON.parse(dataString) : undefined

    return data
  }

  removeSession(key: string): void {
    sessionStorage.removeItem(key)
  }

  clearSession(): void {
    sessionStorage.clear()
  }

  setLocal<T>(key: string, data: T): void {
    const dataString = JSON.stringify(data)

    localStorage.setItem(key, dataString)
  }

  getLocal<T>(key: string): T | undefined {
    const dataString = localStorage.getItem(key)

    const data: T = dataString ? JSON.parse(dataString) : undefined

    return data
  }

  removeLocal(key: string): void {
    localStorage.removeItem(key)
  }

  clearLocal(): void {
    localStorage.clear()
  }
}
