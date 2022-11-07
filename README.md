<a name="readme-top"></a>

# iFitness

## Table of contents

- [Overview](#overview)
    - [Features](#features)
    - [Demo](#demo)
- [Want To Try Out The App?](#want-to-try-out-the-app)
    - [Installation](#installation)
    - [How to try out the app](#download-the-expo-app-from-the-app-store-and-login-with-the-following-credentials)
    - [Built with](#built-with)
    - [Deployment](#deployment)
    - [License](#license)
- [Author](#author)


## Overview

### [Click Here To View Prototype On Figma](https://www.figma.com/proto/DfM12QFmp1UaJXW7bAwraG/iFitness?node-id=1%3A2&scaling=scale-down&page-id=0%3A1)


## Features

Users should be able to:

- Register / Login / Authenticate
- Set their daily macro goal/limit (calories, fat, protein, carbs)
- Track their daily macros goal each day through a progress bar
- Add daily entry that consist of 
    - Adding a list of exercises that contains type of work out, amount of sets, reps, weight
    - Add macros for the day
    - Add body weight for the day
- Display a chart showing the progress of their body weight by month
- Users can search for different type of exercises based on muscle part, type of exercise, and difficulty level

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Demo

Click on this [Link](https://youtu.be/_Dc5uGm0aaQ) to view a small demo of this app

## Want To Try Out The App? 

### Download the Expo App from the app store and login with the following credentials

- Username: ifitness
- Password: Ifitnessdemo123 

### iFitness App Login Credential / Register 

- Username: test
- Password: test

### Installation

1. Get a free API Key from [API Ninjas](https://api-ninjas.com/api)
2. Clone the repo
   ```sh
   git clone https://github.com/Mister-Zeng/iFitness.git
   ```
3. On the front end, install NPM packages
   ```sh
   npm install
   ```
4. In the root directory, create a file called `.env` and add your API Key
   ```js
   API_KEY = 'ENTER YOUR API';
   ```
5. On the backend, create your public and private pem file and add that to the certs folder: 
    ```bash
    ├── iFitness                   
        ├── src
            ├── main
                ├── resources
                    ├── certs

6. To use your own database for MySQL: Inside of application.properties file, add your database credentials
    ```sh
    spring.datasource.url=jdbc:mysql://
    spring.datasource.username = 
    spring.datasource.password = 
    ```
7. Run the app
   ```sh
   expo start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built with

- React Native
- TypeScript
- Expo
- Java
- Spring Boot
- MySQL
- 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deployment

Front end deployment is hosted on the Expo App Store. Backend deployment is hosted on Heroku.

## Author

- Email - [Jason Zeng](mailto:officialjasonzeng@gmail.com?subject=[GitHub]%20iFitness%20App)
- Website - [Jason Zeng](https://jasonz.dev/)
- Twitter - [Misterzeng](https://www.twitter.com/misterzeng)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>