# Homework-17

For this assignment, it was necessary to create a workout tracker.  All of the front end code was provided, so it was required to create a Mongo database, schema and create the routes.

I structured a workout model that matches the data in the seed.js file.  I also created a server.js file along with html routes and api routes.  Lastly, I set up the mongo database and created the collection.  I am able to navigate to the workouts collection in the workout database and return all the seeded information.

When I run the server the last workout is fetched from the api and presented to the user.  If there is no last workout, the information is blank.  If the user chooses to create a new workout, an api post route handles that.  For a continued workout, a put route adds the information to the current workout for accurate totals and the page is reloaded.

Lastly, I added an api/workouts/range route, which gets the workouts and presents charts to the user.