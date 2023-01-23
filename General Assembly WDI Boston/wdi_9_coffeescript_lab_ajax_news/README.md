# AJAXer News 2: CoffeeScript Boogaloo

This repo is a modified copy of the [AJAXer News](https://github.com/ga-wdi-boston/wdi_7_rails_lab_ajaxify_hacker_news) lab, which itself is a copy of the [example branch](https://github.com/ga-wdi-boston/wdi_4_rails_hw_hacker_news/tree/example) from the Week 4 Hacker News project. As before, it includes a full set of feature tests.

Your task once again is to "AJAXify" the process of submitting a new comment while keeping the rest of the app the same... but this time using only CoffeeScript. No plain JavaScript allowed! Make sure all the feature tests still pass and that you're inserting new comments at the correct position in the list, given that comments are sorted by score.

## Setup

CoffeeScript is available by default in any new Rails app &ndash; note the `coffee-rails` gem in the Gemfile. However, we'll also want to install the [CoffeeScript Rails Source Maps](https://github.com/markbates/coffee-rails-source-maps) gem for added debugging capabilities. To do so:

1. Add `gem 'coffee-rails-source-maps'` to the `:development` group in the Gemfile
2. In `.gitignore`, add the line: `/public/assets/source_maps`

This is already done in this repository; the steps are listed here for reference.

With `coffee-rails-source-maps` installed, Rails will automatically generate "source map" files that allow your browser's developer tools to directly view and debug your original CoffeeScript source code, instead of the JavaScript code it's compiled into.

## Gotchas

The [original README](https://github.com/ga-wdi-boston/wdi_7_rails_lab_ajaxify_hacker_news) lists some things to watch out for when performing this AJAX conversion.
