//CONSTANTS
const WEEKDAYS = 5

//COHORT CONSTANTS
const COHORT_NUM      = 18
const START_DATE      = ''//moment()
const END_DATE        = ''//moment()
const COHORT_REPO_URL = 'https://git.generalassemb.ly/DC-WDI/WDI18'
const NUM_WEEKS = 12 //could be potentially be 13 if immersive spans 'winter break'

const COLOR_CAL_DICT = {
  "1": "#A4BDFC", // default
  "2": "#7AE7BF",
  "3": "#DBADFF", // campus event
  "4": "#FF887C", //outcomes
  "5":"#FBD75B",
  "6":"#FFB878",
  "7": "#46D6DB",
  "8": "#E1E1E1",
  "9": "#5484ED",
  "10": "#51B749", //office hours
  "11":"#DC2127" //due date
}

const EVENT_COLORS = {
  OUTCOMES: COLOR_CAL_DICT["4"],
  OFFICE_HOURS: COLOR_CAL_DICT["10"],
  DEFAULT: COLOR_CAL_DICT["1"],
  DUE_DATE: COLOR_CAL_DICT["11"],
  CAMPUS_EVENT: COLOR_CAL_DICT["3"],
}
