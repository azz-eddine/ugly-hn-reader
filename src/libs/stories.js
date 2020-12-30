export const Stories = async (source) => {
  const res = await fetch(source)
  const stories = await res.json()
  return stories
}