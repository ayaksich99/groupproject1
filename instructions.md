## Classwork

Working with a partner. Rather than split this up into small chunks and having the group pick different pieces of the puzzle,work together in tandem on the same problems. We will be working with larger group projects towards the end of the week with a shared github repository. For now though this will be more collaborative in the moment. Ideally this should be done in TypeScript but the goal is to get the skills down. If it would make more sense to do in JS for the time being and then convert later, that is acceptable.

## Guidelines

### Initial Practice

Utilize Postman and [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to ensure that you understand how to access information via get and/or post requests. Review both XHR and Fetch requests to see which would be better and why. Be prepared to discuss why you went with what you did.

### Actual Project

You will be taking what you have learned so far this week to build a mobile responsive movie database search engine. Taking the following steps, allow for a user to search for a movie on OMDB to see what movies share that title. 

* Sign up for a personal API key from [OMDBAPi](http://www.omdbapi.com/)
* Utilize the information on the page to see what kind of format a request needs to be made in to return correct information.
* Create a simple search box that allows for the user to search for a movie. They should be able to enter ANY of the following information but a search field is required for you to send a request to the API:
    * Search Field - Do not allow for an API call without at least 3 characters in this field
    * Type (Make a select box for this)
    * Year - Your choice of input type
* If an error occurred, let the user know. Otherwise display the data to the page.
* Since only 10 items are returned, figure out how many items WOULD have been sent and let the user know. 

## BONUS GOALS
* Then let the user pick a page out of that many to select to. This will be a lesson in the wonders / frustrations of pagination.
* Add styling and additional functionality as time permits.

## Needs to be done:

1. Come up with layout
2. Come up with breakpoints
3. Build form elements / containers / etc
4. Event listener to submit button to do the things
5. Count amount of letters they input and do appropriate action
6. Read API Documentation to see what format you will get a response in / what you need to send
7. Fetch data from the API
8. Display error message to DOM if something went wrong
9. Use data to display to DOM