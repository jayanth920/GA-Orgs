import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Sidebar = ({ getLesson }) => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    axios.get('lessons/sei-04.json')
      .then(response => setLessons(response.data.lessons))
      .catch(console.error)
  }, [])

  return (
    <nav>
      <h2 className="h6">SEI Lessons</h2>
      <ul className="file-list">
        {lessons.map((lesson, i) => (
          <li key={i} onClick={() => getLesson(lesson.name)}>
            {lesson.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
