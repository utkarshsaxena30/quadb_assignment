// Make this class a singleton
export class LocalStorageHandler {
  saveItem = (key, value) => {
    localStorage.setItem(key, value)
  }

  getItem = (key) => {
    return localStorage.getItem(key)
  }
}
