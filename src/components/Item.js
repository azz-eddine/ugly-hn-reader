import {useState, useEffect} from 'react'
import {Media} from 'react-bootstrap'
import {Story} from '../libs/story'
import { extractStory } from '../utils/utils'

export const Item = ({item}) => {
  const [story, setStory] = useState({})
  
  useEffect(() => {
    Story(item).then(s => setStory(extractStory(s)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Media key={story.id} as="li" className="shadow-sm p-3 mb-3 bg-white rounded">
      <Media.Body>
        <h5>({story.score}) <a href={story.url} target="_blank" rel="noreferrer">{story.title}</a></h5>
        <p>
          {story.text}
        </p>
      </Media.Body>
    </Media>
  )
}