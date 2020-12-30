import {useState, useEffect} from 'react'
import {Story} from '../libs/story'
import { extractStory } from '../utils/utils'

export const Item = ({item}) => {
  const [story, setStory] = useState({})
  
  useEffect(() => {
    Story(item).then(s => setStory(extractStory(s)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div key={story.id} className="card">
      <div className="card-body">
        <h5 className="card-title"><a href={story.url} target="_blank" rel="noreferrer">{story.title}</a></h5>
        <p className="card-text">
          {story.text}
          <br/>Published {story.time}
          <br/>By {story.by}
          <br/>Score {story.score}
        </p>
      </div>
    </div>
  )
}