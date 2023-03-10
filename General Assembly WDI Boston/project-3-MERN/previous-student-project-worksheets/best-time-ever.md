# Best Timer Ever ⏱️
## Description
Ever given a presentation and you've lost track of time? Well, here is a  multi-purpose timer to keep one right on time and reaching their talking points in adequate time. Our responsive web application helps out presenters by displaying an outline of their presentation and providing a timer to keep them on track. This app can be used by keynote speakers, instructors, radio show hosts, and/or anyone that needs to present information in a timely manner. It incorporates a form to let a user add his presentation. In the form, the presenter can add sections with talking points and the time allotted to that section. Once the user has included all their sections, the application will calculate the total amount of time. The user can then start a timer, which then will display the section the presenter should be at during that time.  
### Project Links
- [Back end git](https://github.com/pascuas/project3-backend) 
- [Front end git](https://github.com/alyssariah/project3-frontend)
### Wireframes and Architecture
- Wireframes: 
     -[Landing page and create new](https://res.cloudinary.com/mzprizm/image/upload/v1587159783/Screen_Shot_2020-04-17_at_2.41.10_PM_rfu3r2.png)
     - [Schema and updating](https://res.cloudinary.com/mzprizm/image/upload/v1587159783/Screen_Shot_2020-04-17_at_2.41.29_PM_qhxewr.png)
     - [During the presentation](https://res.cloudinary.com/mzprizm/image/upload/v1587159783/Screen_Shot_2020-04-17_at_2.41.21_PM_c6timx.png)
- Architecture: [Google Drawing](https://docs.google.com/drawings/d/1QnfQrfsA5B_Z0-H4OkIHzYKonrOfJGI1wSDYNjucwVM/edit)
### Time/Priority Matrix
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Git management | H | 8hrs | 10hrs | 10hrs |
| Q&A and bug fixes | H | 4hrs | 10hrs | 10hrs |
| Connection | H | 1hr | 1hrs | 2hrs |
| Express  | H | 1hr | 1hrs | 1hrs |
| Routes | H | 2hrs | 2hrs | 2hrs |
| Controllers | H | 3hrs | 8hrs | 8hrs |
| Seed | H | 4hrs | 1hrs | 1hrs |
| Deployment | H | 2hrs | 1hrs | 1hrs |
| Install and set up react router | H | 0.5hrs | 0.5hrs | 0.5hrs |
| Switch, Links, Routes | H | 2hrs | 1hrs | 1hrs |
| Header| H | 2hrs | 2hrs | 2hrs |
| Home Display List from Backend | H | 4hrs | 1hrs | 1hrs |
| CRUD options | H | 6hrs | 20hrs | 20hrs |
| Create Form | H | 5hrs | 10hrs | 10hrs |
| Connecting Form to backend | H | 4hrs | 6hrs | 6hrs |
| Presentation Outline | H | 4hrs| 1hrs | 1hrs |
| Timer | H | 8hrs | 7hrs | 7hrs |
| Talking point synchronized timer | H | 4hr s| 5hrs | 5hrs |
| Responsiveness | H | 5hrs | 8hrs | 8hrs |
| Progress Bar | L | 5hrs | 5hrs | 5hrs |
| Timer Interface | L | 4hrs | 6hrs | 6hrs |
| Dark mode/lightmode | L | 1hrs| 3hrs | 3hrs |
| Extra Styling | L | 2hrs | 4hrs | 4hrs |
| Talking points drop down menu | L | 2hrs | 0hrs | 0hrs |
| Confetti | L | 2hrs | 0hrs | 0hrs |
| Alert | L | 1hrs| 0hrs | 0hrs |
| Total | H | 86.5hrs| 114.5hrs | 114.5hrs |
## MVP/Post-MVP
### MVP
- Connection
- Models(2 schemas with association)
- Set up express server in index.js
- Routes
- Controllers
- Deployment to heroku
- Install and set up “react router” in index and app
- Sweet Header in App outside of Routes that gives option to go back to Home
- Switch Routes in App (Home, Form, Timers)
- Home Page
    - List of default presentations and user presentations(links to Presentation Page)
    - Option to delete presentation(connection to delete backend)
    - Option to add a presentation(links to Form component)
- Color palette/styling
- Form Page
    - Instructions
    - Input form(Connection to post database)
    - Calculate total time
- Presentation Page
    - Show talking points and time with option to update(connection to backend)
    - Talking Point
    - Timer
### Post-MVP
- dark/light mode
- Progress bar
- Mode
- Talking points drop down menu
- Animated timer
- Multiple use timer (save and use schema again)

## Components - Descriptions
- React hooks, states, etc
- Routes
- Index renders app
    - Header, footer
    - Instructions / about
    - Saved presentations
    - New presentation button takes you to Create Presentation Page
- Create Presentation Page
    - Form - notes, about, talking points
- Presentation Page
    - Has a timer and shows talking points and countdown
    - Ability to edit & delete
- Update Presentation Page
    - Form - can change section titles, talking points, and time
- Light / Dark -- usecontext
## Additional Libraries
- Bootstrap
- Axios
- React, react-router-dom
- Node
- Express
