import {HN_ITEM_URL} from '../constants/constants'

export const Story = async (storyId) => {
  const res = await fetch(`${HN_ITEM_URL}${storyId}.json`)
  const story = await res.json()
  return story
}