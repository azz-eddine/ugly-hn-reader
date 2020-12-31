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
    <Media key={story.id} as="li" className="shadow-sm p-3 pb-1 mb-2 bg-white rounded">
      <Media.Body>
        <h6>
          <a href={story.url} target="_blank" rel="noreferrer">{story.title}</a>
        </h6>
        <span class="text-muted">
          {story.score} Pts{` `}
          By @{story.by}{` `}
          {story.kids.length} Comments{` `}
        </span>
        {story.text && <p>{story.text}</p>}
      </Media.Body>
    </Media>
  )
}