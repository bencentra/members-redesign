members-redesign
================

CSH Members Portal redesign. Uses [bootstrap-csh](https://github.com/bencentra/bootstrap-csh) for styles and [members-icons](https://github.com/bencentra/members-icons) for icons. Made with AngularJS.

CSHers can view a demo running here: https://members.csh.rit.edu/~bencentra/members-redesign/

Updating Links
--------------

Instead of updating the markup directly when adding a new link, just edit `data/links.json`.

Here's what a normal link looks like:

```json
[
  	{ 
    	"name": "Info", 
    	"links": [
    		...
        	{
        		"name": "Wiki",
        		"href": "https://wiki.csh.rit.edu", 
        		"icon": "wiki"
        	},
        	...
    	]
  	},
  	...
]
```

To have the link appear in the "popular" section, add `"popular": true` to the link object in `links.json`.

Some entries may link to multiple sites. Here's how to add a link with a dropdown:

```json
[
  	{ 
    	"name": "Info", 
    	"links": [
    		...
        	{ 
		        "name": "Events",
		        "dropdown": [
		            {
		            	"name": "Calendar",
		            	"href": "https://www.google.com/calendar/embed?src=rti648k5hv7j3ae3a3rum8potk%40group.calendar.google.com&ctz=America/New_York"
		          	},
		          	{
		            	"name": "XML",
		            	"href": "http://www.google.com/calendar/ical/rti648k5hv7j3ae3a3rum8potk%40group.calendar.google.com/public/basic"
		          	},
		          	{
		            	"name": "iCal",
		            	"href": "http://www.google.com/calendar/ical/rti648k5hv7j3ae3a3rum8potk%40group.calendar.google.com/public/basic.ics"
		          	}
		        ],
		        "icon": "events",
		        "popular": true
        	...
    	]
  	},
  	...
]
```

Using Grunt
-----------

Learn more about Grunt: http://gruntjs.com

First, install grunt-cli: `npm install -g grunt-cli`

Next, install dependencies: `npm install`

Available grunt tasks:
* `grunt` or `grunt serve`: Spin up a local web server at `http://localhost:9001` to test your changes