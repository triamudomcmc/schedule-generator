export const removeKey = (obj: Record<string, any>, key: string) => {
  const { [key]: foo, ...rest } = obj
  return rest
}
