export function excludeProperty<T, Key extends keyof T>(object: T, ...keys: Key[]): Omit<T, Key> {
  const newObject = JSON.parse(JSON.stringify(object));
  for (const key of keys) {
    delete newObject[key];
  }
  return newObject;
}