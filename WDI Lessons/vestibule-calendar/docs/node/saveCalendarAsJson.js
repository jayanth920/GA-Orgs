const jsonfile = require('jsonfile')
const axios    = require('axios')
const moment   = require('moment')

const API_KEY = 'AIzaSyDmlQU5ljwvW0_30ek5Kg5ySbwLEXWCdgg'
const CALENDAR_ID = 'dc-wdi-calendar@generalassemb.ly'
const CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`


getCalendar()
  .then(data => {
    let events = data.events
    events.sort(sortEvents)
    let file = './calendarBackup.json'
    jsonfile.writeFile(file, events, {spaces: 2}, err => console.error(err))
  })

function getCalendar (priorResponse) {
  let tokenQueryString = (priorResponse && priorResponse.nextPageToken)
    ? `&pageToken=${priorResponse.nextPageToken}` : ''
  let requestUrl = CALENDAR_URL + tokenQueryString

  return axios.get(requestUrl)
    .then(response => {
      const events = response.data.items
      let eventsWithParsedDescriptions = parseDescription(events)
      return {
        events: eventsWithParsedDescriptions,
        nextPageToken: response.data.nextPageToken || null
      }
    }).then(response => {
      if (priorResponse) {
        return {
          events: [ ...priorResponse.events,...response.events ],
          nextPageToken: response.nextPageToken
        }
      } else {
        return response
      }
    })
    .then(response => {
      return response.nextPageToken // reternary (sorry) tail position
        ?  getCalendar(response)
        : response
    })
}

function parseDescription (events) {
  let parseErrors = []
  let eventsWithParsedDescriptions = events.map(calEvent => {
    let desc = calEvent.description || '\n\n\n' //comes from the description field for calendar events added to GoogleCalendar

    let parsedDesc = {}
    desc.split('\n').forEach(item => {
      //Regex uses capturing group to grab everything after the first ':'
      [key, value] = item.split(/:(.+)/)
      if (value) {
        parsedDesc[key] = value.trim()
        if (key === 'url') {
          try { // catch-try block for JSON.parse()
            // JSON parsing in python results in artefacts for js-parsed JSON
            let scrubbedPyJson = value
              .replace(/\{u\'/g,`{"`)
              .replace(/\:\su'/g,`: "`)
              //replace ' with ". JSON keys must be bounded by "
              .replace(/\'/g,'\"')
            let parsedUrl = JSON.parse(scrubbedPyJson) // jumps to catch if err
            parsedDesc[key] = parsedUrl
          } catch (err) {
            parseErrors.push(err)
          }
        }
      }
    })
    return {
      title: calEvent.summary,
      date: moment(calEvent.start.dateTime).format('ll'),
      startTime: moment(calEvent.start.dateTime).format('LT'),
      endTime: moment(calEvent.end.dateTime).format('LT'),
      lead: parsedDesc.lead,
      support: parsedDesc.support,
      color: calEvent.colorId,
      link: parsedDesc.url
    }
  })
  if (parseErrors.length) {
    console.warn(`${parseErrors.length} parsing errors`)
  }
  return eventsWithParsedDescriptions
}

function sortEvents (dayEvent, nextDayEvent) {
  if (dayEvent.constructor === Object && nextDayEvent.constructor === Object) {
    dayEvent = `${dayEvent.date} ${dayEvent.startTime}`
    nextDayEvent = `${nextDayEvent.date} ${nextDayEvent.startTime}`
  }
  dayEvent = moment(dayEvent)
  nextDayEvent = moment(nextDayEvent)
  if (dayEvent.isSame(nextDayEvent)) {
    return 0
  } else if (dayEvent.isBefore(nextDayEvent)) {
    return -1
  } else {
    return 1
  }
}
