![img_2750](https://media.git.generalassemb.ly/user/16103/files/6cd6c480-e1d8-11e8-919c-bec170d7d8bf)

- Some devs did not understand the connection between the column/row classes and
the responsiveness of elements on the page. The diagram here tries to explain
that the syntax of `col-<breakpoint>-<size>` classes allows you to define what
breakpoint you want to listen for and what size your content should be.

- `col-xs-*` no longer exists. This has been replaced by `col-*` which will
cover anything below small screen sizes (https://getbootstrap.com/docs/4.0/migration/)

- Modal lab should be given 20-25 minutes since devs will need to add a modal,
form, nav component, and log the data from the form.

- Even though Bootstrap defines itself as a framework, be careful with using
"framework" as it may confuse devs who might immediately think of a front-end
framework like React or Vue

---

This worked well as a diagram in lieu of the one in the notes.md which still references the xs size for the classes from Bootstrap 3:

![bootstrap-responsive-breakpoints](https://media.git.generalassemb.ly/user/17300/files/550a9b80-2f92-11e9-9323-89700a07cb7d)

- I drew the images of the devices and talked about responsive design.
- I later layered in the breakpoints and the class size references of sm, md, lg, xl
- I purposely pointed out that the breakpoints don't necessarily correspond to devices that some devices will even fall inside one breakpoint at in one orientation and another in a different orientation.
- I finally layered in the container class max-width sizes for each breakpoint.

---

![bootstrap-wireframe-to-cols](https://media.git.generalassemb.ly/user/17300/files/f0573d00-2fa1-11e9-9e1e-4d139f998490)

I used one of the team's wireframe series to query folks about which col classes should be used.  The red and green was added by me.  It worked out really well.
