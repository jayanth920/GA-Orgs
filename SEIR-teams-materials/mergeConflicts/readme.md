# Merge Conflicts

This is a guided exercise for a pair of students to work through together. It
will walk you through resolving merge conflicts. You will have to follow each
step exactly and in order.

With your pair, decide who will play the role of Student 1 and Student 2!

## Setting up the Repository

**Student 1**

- Create a new repository on GitHub named "workflow_practice". **Don't select the "Initialize this repository with a README" option on GitHub!**
- Add the second student as a collaborator to your repo by going to the Settings
  tab then selecting "Collaborators & Teams" on the left.

Once the repository is created on GitHub, follow these steps inside of your
local sandbox directory:

1. `mkdir workflow_practice`
2. `cd workflow_practice`
3. `npx create-react-app .`
4. `git add .`
5. `git commit -m "initial commit"`
6. `git remote add origin <the_url_to_your_repo>`
7. `git push -u origin master`
8. `code .`

**Student 2**

Once Student 1 has added you as a collaborator, you will receive and email to
confirm you as a collaborator to the repo Student 1 created. Check your email
(it could take a few minutes to come through) and click the confirmation link.

After Student 1 has pushed their code up to the repo, do this in your local sandbox directory:

1. `git clone <url>`
2. `cd workflow_practice`
3. `npm install`
4. `code .`

## Making Your First Contributions

**Both Students (pair program on one computer)**

- Create a new feature branch and create a Hello component. It should return `Hello` in a h1 element. Keep it simple!

- Commit your changes and push them to the remote repo using this command
  `git push origin <branch name>`. Open a pull request on Github to merge the
  changes from your feature branch into `master`.

- Each student should add a comment to the PR! It should be an inline comment
  asking a question about the code, a suggestion or just adding an observation!

- If there are no conflicts, merge your pull request and delete your feature
  branches!

- If there are merge conflicts resolve them through github. You will then need
  to `git pull` the latest changes, resolve any conflicts locally, then `commit`
  and push again.

### Creating A Merge Conflict

**Both Students**

- **Locally**, make sure you are checked out to our `master` branch.

- Then, do a `git pull origin master` to receive the latest changes.

- **Note** If you encounter a merge conflict, work together to resolve it before
  continuing. Then push up the changes!

**Both Students( pair program on one computer)**

- Check out a new feature branch, and create a new `Compliment` component. It
  should return a random compliment from the list below:

```js
let data = [
  "Good effort!",
  "What a fine sweater!",
  "I appreciate all of your opinions.",
  "I like your style.",
  "Your T-shirt smells fresh.",
  "I love what you've done with the place.",
  "You are like a spring flower; beautiful and vivacious.",
  "I am utterly disarmed by your wit.",
  "I really enjoy the way you pronounce the word 'ruby'.",
  "You complete me.",
  "Well done!",
  "I like your Facebook status.",
  "That looks nice on you.",
  "I like those shoes more than mine.",
  "Nice motor control!",
  "You have a good taste in websites.",
  "Your mouse told me that you have very soft hands.",
  "You are full of youth.",
  "I like your jacket.",
  "I like the way you move.",
  "You have a good web-surfing stance.",
  "You should be a poster child for poster children.",
  "Nice manners!",
  "I appreciate you more than Santa appreciates chimney grease.",
  "I wish I was your mirror.",
  "I find you to be a fountain of inspiration.",
  "You have perfect bone structure.",
  "I disagree with anyone who disagrees with you.",
  "Way to go!",
  "Have you been working out?",
  "With your creative wit, I'm sure you could come up with better compliments than me.",
  "I like your socks.",
  "You are so charming.",
  "Your cooking reminds me of my mother's.",
  "You're tremendous!",
  "You deserve a compliment!",
  "Hello, good looking."
];
```

- Push your branch and make a PR. Merge your changes in to `master` together.
  Both of you should then pull `master` to get the latest changes

**Both Students (individually)**

- Check out a feature branch locally. In this branch, and *in order:*

**Student 1**

- Rename the `Compliment` component class to `Compliments`.

**Student 2**

- Change `let data` to `const compliments`

**Student 1**

- Commit your changes and push them to the remote repo. Open a pull request on
  Github, and merge the changes on your feature branch into `master`.

**Student 2**

- Commit your change to your feature branch. Checkout `master` and pull the
  latest changes. Check out your `feature` branch and merge `master` to get the
  changes from GitHub.

**Both Students**

On Student 2's computer, look over the merge conflicts, resolve them locally and
commit.

**Student 2**

Push your feature branch to GitHub using `git push origin <branch>`. Then create
a PR, and merge your branch into master.

**Both Students (individually)**

Pull down the changes to `master`.

Congrats you solved a merge conflict! :tada:
