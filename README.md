# E-commerce-Back-End


<h1 align="center">Object-Relational Mapping (ORM): E-Commerce Back End 👋</h1>
  
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/Sequelize-blue"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/dotenv-green" />
</p>
   
## Description
This app is the backend portion of an E-Commerce website. Express.js was used for the server and MySQL for the database along with Sequelize as the ORM to run SQL models and queries. The SQL database includes tables for products, categories, tags, and product tags. RESTful API routes are used to make requests and updates from the database which are joined through Sequelize queries.

🔍 A mysql database and application backend for an e-commerce site. Built using MySQL2, Express, Sequelize and dotenv.
  
💻 Below is the walkthrough showing the functionality of the application:


🎥[GET All Categories products and tags](https://www.youtube.com/watch?v=jKRF7f0SeKQ&t=29s)

🎥[GET single categories, single product and single tag](https://www.youtube.com/watch?v=SB5ljLqZlso)

🎥[POST PUT DELETE Categories](https://www.youtube.com/watch?v=1O0LtFEks1o)

🎥[POST PUT DELETE Products](https://www.youtube.com/watch?v=wx0RgfW1xeE)

🎥[POST PUT DELETE Tags](https://www.youtube.com/watch?v=rArfPSaNfZs)


## User Story
  
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
  
## Acceptance Criteria
  
``` 
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
  
## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
💾   
  
`npm init`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`
  
## Usage
💻   
  
Run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

Enter PW when promted

`source db/schema.sql`

`quit`

`npm run seed`
  
`npm start`

## Testing
✏️

No testing is currently set up.

## Contributing
I would be pleased to talk with any on who loves to contribute.

## Questions
✉️ Contact me with any questions: [email](senutekie77@gmail.com) , [GitHub](https://github.com/senait77)<br />
