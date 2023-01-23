# Instructions

## Course Details

### Fields

- `name` _String_ Official name of the cohort.
- `org` _String_ GHE Organization name.
- `nickname` _String_ Unofficial name of the cohort. Used in the UI by default if it exists.
- `start` _String_ Date on which the course begins. Preferred format: YYYY-MM-DD.
- `end` _String_ The last classroom date. Preferred format: YYYY-MM-DD.
- `IANAtimezone` _String_ A valid [IANA time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) used to calculate and display course schedule times.
- `startTime` _String_ The normal class start time for students (24 hour time format). Preferred format is HH:MM.
- `endTime` _String_ The normal class end time for students (24 hour time format). Preferred format is HH:MM.
- `outcomesBlock` _Object_
  - `day` _Number_ Day of the week on which Outcomes is taught represented as a numerical value where 0 = Sunday and 7 = Saturday.
  - `startTime` _String_ The normal start time for outcomes instruction block (24 hour time format). Preferred format is HH:MM.
  - `endTime` _String_ The normal end time for outcomes instruction block (24 hour time format). Preferred format is HH:MM.
- `scheduleBlocks` _Array_ of time blocks
  - [block] _Object_
    - `name` _String_ A name for the schedule block
    - `startTime` _String_ The normal start time for the schedule block (24 hour time format). Preferred format is HH:MM.
    - `endTime` _String_ The normal end time for the schedule block (24 hour time format). Preferred format is HH:MM.

> Example `course-details.json`

```json
{
  "name": "seir-201",
  "org": "seir-201",
  "nickname": "coolkids",
  "start": "2021-02-01",
  "end": "2021-04-26",
  "IANAtimezone": "America/New_York",
  "startTime": "10:00",
  "endTime": "18:00",
  "outcomesBlock": {
    "day": 4,
    "startTime": "16:30",
    "endTime": "18:00"
  },
  "scheduleBlocks": [
    {
      "name": "Morning",
      "startTime": "10:00",
      "endTime": "11:00"
    },
    {
      "name": "Lecture AM",
      "startTime": "11:00",
      "endTime": "12:30"
    },
    {
      "name": "Lab AM",
      "startTime": "12:30",
      "endTime": "13:30"
    },
    {
      "name": "Lunch",
      "startTime": "13:30",
      "endTime": "14:30"
    },
    {
      "name": "Lecture PM",
      "startTime": "14:30",
      "endTime": "16:30"
    },
    {
      "name": "Lab PM",
      "startTime": "16:30",
      "endTime": "18:00"
    },
    {
      "name": "Homework",
      "startTime": "18:00",
      "endTime": "22:00"
    }
  ]
}
```
