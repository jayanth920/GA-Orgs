# React Router Diagnostic

The code in this repo is incomplete. Follow the directions below to fill in
the missing functionality.

Run the app with `npm start`. There are no tests for this diagnostic yet, use
your React skills and any errors to try to figure it out.

## Contact

Take a look at `src/components/Contact.js`.

This component should get its own route defined. It will also need a link
somewhere useful so users can visit the contact route without needing to type
it into the address bar. This component doesn't need any props.

## Careers

Also look at `src/Careers.js`.

This component is a little trickier. It will also need its own route defined,
as well as a useful link to it. The Careers component will also need a prop
passed to it, the commented out array in App.js starting on line 6. Make sure
you uncomment that line and use the array as a prop for the Careers component.

Once you have that working, you should be able to see a list of just the job
titles displayed at the careers route.

## JobListing

Finally, create a new component called JobListing. Each job title that is
rendered in the Careers component should be a link to see that individual job
listing. That means a new route will be needed, and each job title in the
Careers component should be clickable

From the JobListing component you can render the same generic JSX for each job,
just make sure you aren't rendering the Careers component in the job listing
route. There should also be a link that can take you back to the Careers
component.
