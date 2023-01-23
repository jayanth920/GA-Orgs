const API_KEY = 'AIzaSyDmlQU5ljwvW0_30ek5Kg5ySbwLEXWCdgg'
const CALENDAR_ID = 'generalassemb.ly_57ic4eirpctgb7pp11jfdqngno@group.calendar.google.com'
const CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

getCalendar()
  .then(data => {
    makeSchedule(data.events)
    let date = moment(new Date()).format('YYYY-MM-DD')
    window.location.href=`#${date}`
  })

function getCalendar (priorResponse) {
  let tokenQueryString = (priorResponse && priorResponse.nextPageToken)
    ? `&pageToken=${priorResponse.nextPageToken}` : ''
  let requestUrl = CALENDAR_URL + tokenQueryString

  return fetch(requestUrl)
    .then(stream => stream.json())
    .then(response => {
      const events = response.items
      let eventsWithParsedDescriptions = parseDescription(events)
      return {
        events: eventsWithParsedDescriptions,
        nextPageToken: response.nextPageToken || null
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

function make (thing, html, appendDest) {
  //TODO: add object handler for applying attributes and styles
  const thingMade = document.createElement(thing)
  thingMade.innerHTML = html
  if (appendDest) appendDest.appendChild(thingMade)
  return thingMade
}

function makeEvent (dayEvent, dayEl) {
  let eventDiv = make('div', null, dayEl)
  eventDiv.style.background = dayEvent.color || EVENT_COLORS.DEFAULT

  let dayHeader = make('h2', null, eventDiv)
  let eventLinkEl = make('a', dayEvent.title, dayHeader)
  let eventDuration = `${dayEvent.startTime} - ${dayEvent.endTime}`
  let timeElement = make('time', eventDuration, eventDiv)
  let unorderedList = make('ul', null, eventDiv)

  if (dayEvent.lead) {
    let leadListItem = make('li', dayEvent.lead, unorderedList)
  }

  if (dayEvent.support) {
    let supportListItem = make('li', dayEvent.support, unorderedList)
  }


  if (dayEvent.link && dayEvent.link.constructor === Array) {
    dayHeader.innerHTML = dayEvent.title
    dayEvent.link.forEach(urlObj => {
      let url = Object.values(urlObj)[0]
      let linkText = Object.keys(urlObj)[0]
      let urlListItem = make('li', null, unorderedList)
      let linkForListItem = make('a', linkText, urlListItem)
      linkForListItem.setAttribute('href', url || '#no_url_from_series')
    })

  } else {
    eventLinkEl.setAttribute('href', dayEvent.link || '#no_url')
  }
}

function makeDay (weekNum, dayEvents) {
  dayEvents.sort(sortDates)
  let date = dayEvents[0].date
  let dateForHtmlId = (moment(new Date(date)).format('YYYY-MM-DD'))
  let targetWeek = document.getElementById(`${weekNum}`)
  let newDay = make('div', date, targetWeek)
  newDay.setAttribute('class', 'day')
  newDay.setAttribute('id', dateForHtmlId)
  let jumplink = make('a', '', newDay)
  jumplink.setAttribute('href', `#${dateForHtmlId}`)
  dayEvents.forEach( dayEvent => {
    makeEvent(dayEvent, newDay)
  })
}

function makeWeek (weekNum = 0, weeklyScheduleArr) {
  // WEEKDAYS from cohort-config.js
  const main = document.getElementById('appRoot')
  let weekEl = make('div', '', main)
  weekEl.setAttribute('class', 'week')
  weekEl.setAttribute('id', `${weekNum}`)
  let header = make('h1', `Week ${weekNum}`, weekEl)
  weeklyScheduleArr.forEach( dayEvents => {
    makeDay(weekNum, dayEvents)
  })
}

function makeSchedule (schedule) {
  let parsedDays = parseDaysFromEvents(schedule)
  let parsedWeeks = parseWeeksFromDays(parsedDays)
  Object.values(parsedWeeks).forEach( (weekArr, weekNumMinusOne) => {
    let weekNum = weekNumMinusOne + 1
    makeWeek(weekNum, weekArr)
  })
}

//first as tragedy, then as parse
function parseDaysFromEvents (schedule) {
  return schedule
    .reduce( (calendarObj, calEvent) => {
      if (!calendarObj[calEvent.date]) {
        calendarObj[calEvent.date] = []
      }
      calendarObj[calEvent.date].push(calEvent)
      return calendarObj
    }, {})
}

function parseWeeksFromDays (daysObj) {
  let dates = Object
    .keys(daysObj)
    .sort(sortDates)
    .map(dateKey => daysObj[dateKey])
    .reduce( (acc, cur, index) => {
      let weekNum = Math.floor(index / WEEKDAYS) + 1
      let keyWeek = `week${weekNum}`
      if (!acc[keyWeek]) acc[keyWeek] = []
      acc[keyWeek].push(cur)
      return acc
    }, {})
  return dates
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
          try {
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
  console.log(`${parseErrors.length} parsing errors`)
  console.log(parseErrors);
  return eventsWithParsedDescriptions
}

function sortDates (day, nextDay) {
  if (day.constructor === Object && nextDay.constructor === Object){
    day = `${day.date} ${day.startTime}`
    nextDay = `${nextDay.date} ${nextDay.startTime}`
  }
  day = moment(day)
  nextDay = moment(nextDay)
  if (day.isSame(nextDay)) {
    return 0
  } else if (day.isBefore(nextDay)) {
    return -1
  } else {
    return 1
  }
}
