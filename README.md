# Authentication And Authorization
This is the auth subdomain or the model of My ecommerce project which is based on them microservice architectures.

## Technologies Used
- MongoDb for Database 
- Fastify for making routes 
- Integrated all apis with swagger 
- With NodeJs to run javascript at runtime Environment 
- Mongoose for mongodb and javascript

## About Project Setup
### Brief Overview 
1. Service Layer 
  - All the logic inside this layer which includes quering the database calling other Api.
2. Controller Layer  
 - To give response and error handling  Service Layer is called here
3. Validation Layer
  - To validate the incoming params ,query and body about the required input and other validations.
4. Schemas
 - Defining the structure of input and all the possible outputs indifferent cases with 200,201,400,500 status codes 
5. Routes
 - All the layers  combined inside the routes.js file provide url, validator, schema. Aggregation of All the layers
6. Config 
 - There is config file for setting up 
    - env Variable schema
    - env configuration
    - swagger configuration
 
7. And finally app.js file for all the initial setups for mongodb , fastify routes, plugins etc .

> You can setup env file to store the Credentials like Mongodb url , Database Name ,etc

#### Run at localhost using 
   **npm run start** 

   **npm run dev**


> Visit Swagger To See [Authorization And Authntication Apis](https://colossalauth.herokuapp.com/documentation/static/index.html#) Related to this domain for an ecommerce site


