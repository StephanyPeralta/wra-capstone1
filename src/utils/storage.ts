const storage = {
  get(key: string) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue || '');
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string) {
    window.localStorage.removeItem(key);
  },
};

export { storage };
