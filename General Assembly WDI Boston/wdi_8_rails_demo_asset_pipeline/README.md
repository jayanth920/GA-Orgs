## Asset pipeline basics
   * Provides
     * A framework to concatenate and minify or compress JavaScript and CSS assets. 
     * Adds the ability to write these assets in other languages such as CoffeeScript, Sass and ERB.
   * Concatenates Assets Javascript and CSS, each into one file.
     * Adds a "fingerprint", MD5 hash of the file contents, to the file name. 
       This allows the browser to cache the file. Anytime the Javascript OR CSS changes this 
       concatenated fingerprint will change and the browser cache will be updated.
   * Minifies the JS and CSS. 
     * We saw how this is done with libraries like jQuery. Reduces the file size so there is less
     to transfer over the "wire", internet.
   * Allows one to code assets to a higer level language.
     * Write Coffescript that will compile down to JS. 
     * Write SASS/SCSS that will compile down to CSS. 
     * Mix in Ruby, using ERB, with you Javascript, CSS, Coffeescript or SASS.
     * Scaffolding will generate Coffeescript and SCSS files in their respective directories.
       app/assets/javascript/project.js.coffee and app/assets/javascript/project.css.scss. 

## Concatenate Assets, Javascript and CSS.

### Step One

* Generate a scaffold controller for the Song model.
     
     <code>rails g scaffold Song name:string duration:integer price:float</code>

* Notice that 2 asset files have been generated. **We'll come back to this when looking at Coffeescript.**  

	``app/assets/javascripts/songs.js.coffee``  
	``app/assets/stylesheets/songs.css.scss``

* Start the server.
    
* Create a file named greeting.txt and enter some text.

	``touch app/assets/javascripts/greeting.txt``  

* Go to the URL http://localhost:3000/assets/greeting.txt .  
	 Notice it just displays the file at that location.

* Move the greeting.txt file to greeting.txt.erb and add this to the contents

     ``<% 5.times do %>``  
     ``Hello Cruel World.``  
     ``<% end %>``  

*  Go to the http://localhost:3000/assets/greeting.txt
    
    Notice how we ran ruby using ERB. The asset pipeline pre-processor maps the 
    file extensions to processors. It starts at the rightmost file extension, __.erb in this case__ , and passes the file thru each processor.
    
   This executed the ruby and created a text file, greeting.txt, with 5 "Hello, Cruel World." strings.

    This is how the asset pipeline works with SASS and Coffeescript files. It runs
    the SASS and Coffescript preprocessor to create css and js file.


### Step Two  
* Open the js manifest, app/assets/javascript/application.js. This contains commands that are processed by the "Sprockets" gem. 

* Goto the docs for the Sprockets gem and take a look at its [Directives](https://github.com/sstephenson/sprockets#the-directive-processor). We are using the require and require_tree directives.
    
	This application.js file 'requires', or adds, the jquery, jquery_ujs and turbolinks javascirpt libraries. But, where are these javacript files?

* Look for files in this rails app. Can you find them?  

 	These javascript files are added to the rails app via there respective gems. 
 
* Open up the Gemfile and look for gems that provide these javascript files. 

	The jquery-rails gem provides the jquery and jquery-ujs javascript files. The turbolinks gem provides the turbolink javascript file.
	
* These javascript files that are concatenated into  http://localhost:3000/assets/application.js

	This is done to increase the page load time. Instead of making a HTTP Request for each javascript file we only make **one** HTTP Request.


 * Start the server and goto 
     http://localhost:3000/assets/application.js
     
     We'll see a very large file with lots of js. This is the concatenation of all the app's js into one file. Done by the asset pipeline.

	In production mode this one big javascript file will be minimized before being sent back to the client.
	
* Let remove all the //= require lines

* goto http://localhost:3000/assets/application.js  

	Now there is no js shown, boohoo.

### Step Three
* Put the two jquery require lines back and add an alert to the end of applicaton.js
      ``alert("hey I'm in the application.js file");``

* goto http://localhost:3000/assets/application.js
      At the end of the file is our alert.

* goto http://localhost:3000/songs  
	The alert box will be shown. We are seeing that anything that we put in this manifest file is included in each page we visit. 
	
	
* open up the layout file. And find the below line.
     ``<%= javascript_include_tag "application", "data-turbolinks-track" => true %>``  

	This line uses a Rails method to include javascript files. 

* goto http://localhost:3000/songs and view the source.
	
	Notice how the jquery, jquery_ujs, turbolinks, songs.js and application.js files are including in the page. 

* click on the songs.js and the application.js in the source view.
	
	These files where:
	1. Including by the Sprockets directives in the manifest file.
	2. The songs.js was generated from the _Coffeescript_ file, songs.js.coffee. It was generated by the _Coffeescript_ preprocessor.

    
### Step Four  

* create a main.js in the javascript assets directory.
      touch app/assets/javascript/main.js

* replace the require_tree directive in the manifest, application.js with 

	``//= require main``  
	
* move the alert from the application.js to the main.js.

	``$(document).ready(function(){  ``  
    ``   alert("hey I'm in the main.js file");``  
    ``      });``  

* goto http://localhost:3000/songs

Some consider using the require_tree directive as sloppy. It just slurps up all 
the javascript files. It _MAY_ be better to explicitly include resources using other Sprockets directives such as require and require_directory.
	
This [Asset Pipeline Article](http://railsapps.github.io/rails-javascript-include-external.html) gives a good overview of how one can selectively add javascript files to a rails app.

## Resources

* Watch railscast for asset pipeline. Couple of thngs are outdated, but still very good.  
     [Railscast for Asset Pipeline](http://railscasts.com/episodes/279-understanding-the-asset-pipeline

* [Rails Guide for Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html)  

* [JQuery and Ajax](http://railscasts.com/episodes/136-jquery-ajax-revised)  
