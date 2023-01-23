# Setting Up a Development Environment

## Introduction

This document will provide you with all the info you need to get your computer
configured for the General Assembly React course. Since you already have
development experience, you aren't required to follow every step here exactly,
especially if you already have the required software. If you do choose to use
different software or custom configurations, however, troubleshooting will be
your responsibility. 

Because you already have development experience, and because troubleshooting is a crucial skill in programming, this guide won't list every single step needed to set up your development environment, and it certainly won't anticpate all
the errors and snags that you may run into. Use your Google skills and your
intuition to fill in the gaps!

This guide assumes you have a computer than runs either macOS or a Linux
distribution, preferably Ubuntu. Windows is not supported.

## Checklist

This guide will walk you through installing the following software:

- [ ] [Git](https://git-scm.com/)
- [ ] [Atom](https://atom.io/)
- [ ] [NPM](https://www.npmjs.com/)
- [ ] [Slack](https://slack.com/)
- [ ] [Chrome](https://www.google.com/chrome/)

You will also need:

- [ ] a Github account
- [ ] a Slack account

## Installing

### Git

Git is a very popular and powerful version control system that's used from the
command line. We'll use it to save our work, to share our code, and even to 
deploy our completed applications.

If you already have Git, you can proceed on to the next step. Otherwise, if you
are on macOS and have OSX 10.9 or greater, open your terminal and type `git
--version`. If you don't have Git installed, an installer window will pop up and walk you through the steps to install it.

On Ubuntu, open a terminal and run `sudo apt-get install git-all`. Enter your
password when prompted. 

For both operating systems, you can check that Git is properly installed by
entering `git --version`. If it is, you should see something like `git version
2.7.4`. The version may be slightly different; that's OK.

### Atom

Atom is a highly extensible open source text editor created by the folks behind
Github. We chose it because it's free, easy to use, and highly customizable.
If you're more familiar with another text editor, like VS Code or Submlime Text
, you can use that, but you will be responsible for configuring your linter and
troubleshooting any issues that come up.

If you're on macOS, go [here](https://atom.io) and click "Download for Mac". 
When the download is finished, click on the file and follow the prompt that
appears.

If you're on Ubuntu, run the following commands in your terminal:

- `sudo add-apt-repository ppa:webupd8team/atom`
- `sudo apt update; sudo apt install atom`

Once Atom is installed, you'll need to install a few add-ons. Run this
command regardless of your operating system:

- `apm install linter linter-eslint aligner aligner-javascript`

If the above command results in an error message of some kind and you are on
macOS, open Atom, click on the "Atom" menu in the op left of the screen, and
click "Install shell commands". Then, close Atom and run the above command
again.

### NPM

NPM stands for Node Package Manager. It's a package manager for Javascript
projects. We'll use it to install some useful development tools. It is bundled
with NodeJS, a Javascript runtime environment, so we'll need to install that.

If you're on macOS, go [here](https://nodejs.org/en/download/) and click on the
"64 bit" button next to the words "macOS Installer". When the download is
finished, click on the file and follow the prompts.

For Ubuntu, enter the following commands:

- `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
- `sudo apt-get install -y nodejs` 

On either OS, you can check that everything was installed properly by running
`npm --version`.

If that's working, you'll need to use `npm` to install a few development tools.
Run the following command:

- `npm install -g create-react-app eslint`

### Slack

Slack is a handy collaboration and instant messaging tool for teams. You'll use
it for all your day-to-day communication with your instructors and your
classmates. Slack can be used in the browser, but we recommend using the 
desktop version instead.

To install it, go [here](https://slack.com/downloads/linux). It should detect
your operating system automatically. On macOS, click the big "Download" button.
On Ubuntu, click "Download .deb (64-bit)". Follow the prompts when the
download completes.

### Chrome

To develop a web app with a modern front-end framework like React, you'll need
a modern web browser. We recommend using Google Chrome, mostly because of its
excellent developer tools. Firefox is fine too. Other browsers, especially 
Internet Explorer, are not recommended. 

If you don't have Chrome or Firefox, go [here](https://www.google.com/chrome/)
to download Chrome.

## Account Setup

TODO: add this.
