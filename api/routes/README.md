
# koa2-boilerplate routes #


### Development ###

Place your routers in this directory.

* Router middleware for koa
* Express-style routing using app.get, app.put, app.post, etc.
* Named URL parameters.
* Named routes with URL generation.
* Responds to OPTIONS requests with allowed methods.
* Multiple route middleware.
* Multiple routers.
* Nestable routers.
* ES7 async/await support (koa-router 7.x).


```javascript
const greetingsSch = require('../validations/greetings_schemes');
const greetingsController = require('../controllers/greetingsCTRL');
const validate = require('../validations/index');
greetingsRouter.get('/greetings',
  validate('params', greetingsSch.greet.params),
  validate('query', greetingsSch.greet.query),
  greetingsCTRL.greet);

```

--------------------------------------------------------
For an easy understanding use this structure for every resource:

    | Resource              GET                     POST                    PUT                         DELETE
                            read                   create                  update

    | /cars         Returns a list of cars 	    Create a new ticket 	Bulk update of cars 	    Delete all cars
    | /cars/711 	Returns a specific car 	    Method not allowed  	Updates a specific ticket 	Deletes a specific ticket


--------------------------------------------------------
Provide filtering, sorting, field selection and paging for collections

Filtering:
Use a unique query parameter for all fields or a query language for filtering.
`GET /cars?color=red` Returns a list of red cars
`GET /cars?seats<=2`  Returns a list of cars with a maximum of 2 seats

--------------------------------------------------------

Sorting:
Allow ascending and descending sorting over multiple fields.

`GET /cars?sort=-manufactorer,+model`

This returns a list of cars sorted by descending manufacturers and ascending models.

--------------------------------------------------------

Field selection

`GET /cars?fields=manufacturer,model,id,color`s

--------------------------------------------------------

Paging
Use limit and offset. It is flexible for the user and common in leading databases. The default should be limit=20 and offset=0

`GET /cars?offset=10&limit=5`

## Coding Conventions ##

* add "use strict;" to the top of your JS files
* you can use features ECMA6 JS
* please, just stick with lowercase file names for routes, eg 'my_router.js’.

### Testing ###

You can test endpoints via swagger


## Commenting Conventions ##

Commenting should be done following the conventions of [JSDoc][JSDOC]. 
