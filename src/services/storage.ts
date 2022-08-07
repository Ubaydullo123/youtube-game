export const getFromStorage = (field: string) => {
  const value = localStorage.getItem(field);
  return value ?? undefined
};

export const setToStorage = (field: string, value: string) =>
  localStorage.setItem(field, value);
