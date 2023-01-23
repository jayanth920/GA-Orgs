[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# react-template

A template for starting front-end projects. Build
pipeline and development server. Boostrap, react-router-dom, and gh-pages included.

## Installation

1. [Download](../../archive/main.zip) this template.
    - **Do Not Fork And Clone**
    - Click the "Clone or Download" button and select "Download Zip".
1. Move to the `sei/projects` directory, then unzip the template directory with
    `unzip /Users/<user-name>/Downloads/react-template-main.zip`.
1. Rename the template directory from `react-template-main` to
    `<project-name>-client`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.react-template` with the name of
    your project.
    - You can search for all instances of text in Atom by pressing
    `command + shift + f` on Mac or `ctrl + shift + f` on WSL.
1. Move into the new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.
1. Install dependencies with `npm install`.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.
1. Follow the instructions on your new repository's setup page. For details on
   how to push to Github, refer to the section on Github entitled **"…or push an existing
   repository from the command line."** Further documentation can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).
   > **Note:** This last step will rename your default branch to **main**. This branch name will be used when deploying.

## Structure

### SRC

Developers should store component files in [`src`](src).
The "manifest" or entry-point is
[`src/App.js`](src/App.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

### Styles

Developers should store styles in [`src/css`](src/css) and load them
from [`src/css/index.scss`](src/css/index.scss). React Bootstrap is
included in this template.

### Deployment


To deploy a react-template based SPA first:
- Replace `<git-name>` and `<repo-name>` in package.json with your github username and repo name
- 
  ```js
  "homepage": "http://<git-name>.github.io/<repo-name>"
  ```
- Then run `gh-pages -d build`.

## Tasks

Developers should run these often!

- `npm start`: generates bundles, watches, and live reloads
- `npm run build`: place bundled styles and scripts where `index.html` can find
    them
- `gh-pages -d build`: builds and deploys main branch


## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [gh-pages](https://www.npmjs.com/package/gh-pages)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.