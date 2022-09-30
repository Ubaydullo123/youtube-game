export const getFromStorage = (field: string) => {
  const value = localStorage.getItem(field);
  return value ?? undefined
};

export const setToStorage = (field: string, value: any) =>
  localStorage.setItem(field,typeof value === 'string' ? value : JSON.stringify(value));
