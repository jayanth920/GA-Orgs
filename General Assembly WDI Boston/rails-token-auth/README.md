![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Token authentication in rails

## Objectives

By the end of this lesson, students should be able to:

- Use token authentication to secure a rails based web API

## Prerequisites

Required reading

- http://api.rubyonrails.org/classes/ActiveModel/SecurePassword.html
- http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html

## Introduction

Effective security is broken down into three areas:

- **Authentication** - Who (or what) is accessing a resource (the principle).
- **Authorization** - What the principle has access to.
- **Auditing** - What the principle has actually done.

We'll focus primarily on authentication and touch on the simplest of authorization schemes.

What's important about each of these areas?

## Authentication in Rails

We'll exam a pre-built rails api with token based authentication implemented using rails built-in features.

