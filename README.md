# RIDE ROUTER

## USE

A map app that lets users share and rate fun riding/driving routes. 

## SET-UP

1. navigate to desired directory and enter 'git clone https://github.com/loewymalkov/ride-router.git' in command line
2. enter 'cd ride-router' in command line
3. ente 'npm i', then 'npm run start' in command line

## SPECS

- Register/Log-in Page
- About this app page
- Browse routes page, gives results for specific search paramaters and shows ratings
- On Browse page can select an individual route which brings user to a map with directions from Google Maps
- On a routes details, it can be reviewed or rated and previous reviews edited
- information is stored in a database

| Behavior | Input | Output | 
|-|-|-|
| user can register for a new account | 'Email, Password - Register' | _on click will regsiter user with email and password |
| user can log in when account is created | 'Email, Password - Log In '| _log's in user, redirects to browse routes_ |
| user can upload a new route from google maps | 'Upload link' | _uploads users map, adds it to routes list_ |
| user can rate and add a review for a route | 'Portland to Salem - 2h14m, 4.5 stars, 3 reviews' | _provides user with list of routes and the option to read the reviews/see the details_ |
| user can view details for a route | 'View Details' | _gives google maps based directions + reivews, rating_ |
| user can delete the routes hes uploaded | 'Delete' | _will remove the route from the database_ |

## DATABASE

Ride Router stores user account, map and rating/review information via FireBase. Here is an example of the database structure:

- User:
  - username: aRider
  - password: ******
  - Route:
    - Google Map Direction: https://maps.google.com...
    - Time: 2h14m
    - Rating: ****
    - Reviews: 
      - "awesome route"
      - "had a hard time with my current bike but overall fun"


## TECHNOLOGIES

JavaScript, React, Materialize, CSS, VS Code, Google Maps API

## AUTHOR

Loewy Malkovich, loewymalkov@gmail.com


## LICENSE

Open Source, 2019 (MIT)