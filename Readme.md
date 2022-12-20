[x] Setup an empty NPM project with TypeScript and necessary dependencies based on the README
[x] Have a simple working API back-end in Express, just have a single simple route.
[x] Familiarize yourselves with Swagger Docs, and OpenAPI, create Swagger Doc based on the two APIs in the README file
     Links:
        - https://editor.swagger.io/
        - https://oai.github.io/Documentation/specification-structure.html
-- Checkpoint: Should spend no more than 2 hours on the task above, if you find yourself stuck, talk to a BFF dev

[  ] Create a basic structure of the project. Hint: handler, middleware, services, test etc. 
[x] Create and store the secret values (hint: api key) into environment file (.env file).
[  ] Start by implement the API call to OpenWeather. Create a service using Axios, and verify that it works as expected.
-- Checkpoint: Should spend no more than 1 hours on the task above, if you find yourself stuck, talk to a BFF dev

[  ] Implement POST /api/location endpoint.
      Think about:
        - What this API accepts, what validation you need to have, what this API will return
        - Store into an in-memory array. 
        - Verify this endpoint is working correctly using Postman or Insomnia
-- Checkpoint: Should spend no more than 1.5 hours on the task above, if you find yourself stuck, talk to a BFF dev

[  ] Implement GET /api/forecast endpoint.
      Think about:
        - What this API accepts, what validation you need to have, what this API will return 
        - How to handle error from downstream service (i.e. OpenWeather).
        - Verify this endpoint is working correctly using Postman or Insomnia 
-- Checkpoint: Should spend no more than 1.5 hours on the task above, if you find yourself stuck, talk to a BFF dev

[  ] Write some test (?)
      Goal: greater than 70% coverage, even better if you can achieve 100% coverage
      Think about:
        - Use Jest, msw, superagent, sinon.
        - Links to library Documentation:
            - https://jestjs.io/docs/getting-started
            - https://mswjs.io/docs/
            - https://sinonjs.org/
-- Checkpoint: Should spend no more than 2 hours on the task above, if you find
yourself stuck, talk to a BFF dev. Feel free to ask for a demo test from any of
the BFF devs if you are stuck

[  ] Optional: Read documentation on Docker and Dockerfile
      Goal: Get an idea of why Docker exist. Sicong will demo how to use Docker once you get to this point. 
      Links:
        - https://docs.docker.com/get-started/
      **WARNING**: don't install Docker Desktop, Spark don't have license for it.
-- Checkpoint: Should spend no more than .5 hours on the task above, if you find yourself stuck, talk to a BFF dev

Other reference that might be useful:
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook
Other thought:
- If you have spend more than 20 minutes on a question (and after having done some search), feel free to ask any of the BFF devs.