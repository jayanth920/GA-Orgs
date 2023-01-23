"""
This document takes the schedule.json FrankenDataStructure and turns it into a 
Google calendar. Note, the client_secret.json has the API keys we are using right now
for WDI18.
"""

from __future__ import print_function
import httplib2
import os

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage

import datetime
import json

try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

# If modifying these scopes, delete your previously saved credentials
# at ~/.credentials/calendar-python-quickstart.json
SCOPES = 'https://www.googleapis.com/auth/calendar'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'Google Calendar API Python Quickstart'

def get_credentials():
    """Gets valid user credentials from storage. This function is entirely from the
    Google Calendar API quickstart.

    If nothing has been stored, or if the stored credentials are invalid,
    the OAuth2 flow is completed to obtain the new credentials.

    Returns:
        Credentials, the obtained credential.
    """
    home_dir = os.path.expanduser('~')
    credential_dir = os.path.join(home_dir, '.credentials')
    if not os.path.exists(credential_dir):
        os.makedirs(credential_dir)
    credential_path = os.path.join(credential_dir,
                                   'calendar-python-quickstart.json')

    store = Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        credentials = tools.run_flow(flow, store, flags)
        print('Storing credentials to ' + credential_path)
    return credentials


def get_events():
    with open('../schedule.json') as schedule:    
        data = json.load(schedule)
    return data['start-date'], data['weeks']


def parse_time(date, time):
    time = time.split(':')
    hr = int(time[0])
    if 'PM' in time[1] and hr < 12: hr += 12
    mins = int(time[1].replace('AM', '').replace('PM', ''))
    return date.replace(minute=int(mins), hour=hr)


def get_start_and_end(date, time):
    time = time.split(' - ')
    start = parse_time(date, time[0])
    end = parse_time(date, time[1]) if len(time) > 1 else start + datetime.timedelta(hours=1)
    return start, end


def create_event(event, current_date, service):
    for time, details in event.iteritems():
        start, end = get_start_and_end(current_date, time)
        formatted_details = 'lead: {}\nsupport: {}\nurl: {}'.format(
            details.get('lead', ''), details.get('support', ''), details.get('url', ''))
        data = {
            'summary': details['title'],
            'description': formatted_details,
            'start': {
                'dateTime': str(start).replace(' ', 'T'),
                'timeZone': 'America/New_York',
            },
            'end': {
                'dateTime': str(end).replace(' ', 'T'),
                'timeZone': 'America/New_York',
            }

        }
        event = service.events().insert(calendarId='primary', body=data).execute()


def main():
    """Shows basic usage of the Google Calendar API.

    Creates a Google Calendar API service object and outputs a list of the next
    10 events on the user's calendar.
    """
    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('calendar', 'v3', http=http)

    start_date, events = get_events()
    start_date = datetime.datetime.strptime(start_date, '%Y-%m-%d')

    for week in events:
        day_offset = 7 * (week[0]['week'] - 1)
        week_start = start_date + datetime.timedelta(days=day_offset)
        for day_num, day in enumerate(week):
            current_date = week_start + datetime.timedelta(days=day_num)
            for event in day['events']:
                create_event(event, current_date, service)
       
                
if __name__ == '__main__':
    main()
