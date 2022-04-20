# Challenge: FAVS API with JS

## Requirements
- Each user will have a unique id, and he will authenticate using a non-empty email and a password.
- Each user will be able to save a list of favs. Each fav will have an title , description and link, and each list will be defined by a unique id and a name.
- The system have to allow the following actions
  - Create a new list with a given name (auto-generate the unique id)
  - Get the users lists
  - Get an individual list for the user
  - Add items to a given list (based on the generated id)
  - All endpoints have to be secured with Bearer Auth (JWT)
- You should ensure that the password is strong enough

## What are we looking for?
- A well-designed solution and architecture Avoid duplication, extract re-usable code where makes sense. We want to see that you can create an easy-to-maintain codebase.
- Storage We need a MongoDB database implementation.
- Testing Try to create tests covering the main functionalities of your code. Feel free to create both unit tests and functional tests.
- Documentation The CEO has a non-tech background so try to explain your decisions, as well as any other technical requirement (how to run the API, external dependencies, etc ...)

# Questions
- Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone
> Answer:
- Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-
> Answer:
- When we talk about CRUD, what does it mean?
> Answer: