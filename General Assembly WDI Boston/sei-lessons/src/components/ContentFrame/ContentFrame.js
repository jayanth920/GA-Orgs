import React, { Fragment, useState } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar/Sidebar'

const ContentFrame = props => {
  const [lesson, setLesson] = useState('')

  const getLesson = (lessonName) => {
    axios({
      url: `https://git.generalassemb.ly/api/v3/repos/ga-wdi-boston/${lessonName}/readme`,
      method: 'get',
      headers: {
        'Accept': 'application/vnd.github.VERSION.html'
      }
    })
      .then(res => {
        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(res.data, 'text/html')
        const links = htmlDoc.querySelectorAll('a')
        links.forEach(link => {
          const hrefVal = link.getAttribute('href')
          if (hrefVal.charAt(0) === '#') {
            link.setAttribute('href', `https://git.generalassemb.ly/ga-wdi-boston/${lessonName}/${hrefVal}`)
          }
        })
        const XMLS = new XMLSerializer()
        const htmlString = XMLS.serializeToString(htmlDoc)
        setLesson(htmlString)
      })
      .catch(console.error)
  }

  return (
    <Fragment>
      <Sidebar getLesson={getLesson}></Sidebar>
      <section dangerouslySetInnerHTML={{ __html: lesson }} />
    </Fragment>
  )
}

export default ContentFrame
