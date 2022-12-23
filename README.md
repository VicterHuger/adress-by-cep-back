

<p align="center">
  <img  src="./assets/Screenshot from 2022-12-23 07-26-44.png">
</p>
<h1 align="center">
   Busca Cep Api
</h1>
<div align="center">

  <h3>Built With</h3>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" height="30px"/>
  
</div>

<br/>

# Description

### An api that aims find the address of a specific cep informed.

</br>

# Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
    - [Environment Variables](#environment-variables)
    - [Test](#test)
- [API Reference](#api-reference)
  - [Addresses](#addresses)
- [Lesson Learned](#lesson-learned)
- [Acknowledgements](#acknowledgements)
- [Authors](#authors)

# Features

-   Get Address by cep


</br>

# Getting Started

This Api can be used in two different ways: by cloning the project or by using your preferred client, such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/).

To clone the project, run the following command:

```git
git clone https://github.com/VicterHuger/adress-by-cep-back.git
```

Then, navigate to the project folder and run the following command:

```git
npm install
```

## Environment Variables

To run this project, you will need to create a `.env` file in root directory and
add the following environment variables to your .env file

```git
PORT = <number> #recommended:5000
```


Finally, run the server locally

```git
npm run dev 
```

You can now access the API's endpoints by navigating to `http://localhost:<PORT>/`

## Test

To apply automatized test on this project, you will need to run the integration tests

```git
npm run test:integration 
```

Or run the unit tests

```git
npm run test:unit 
```

<br/>


# API Reference
In this section, you will find the API's endpoints and their respective descriptions, along with the request and response examples. All data is sent and received as JSON.

## Routes

### [Addresses](#addresses) _`/addresses`_

- [Get address by cep](#---get-address-by-cep)


## Get address by cep

### &nbsp; ‣ &nbsp; Get address by cep

```http
GET /addresses
```

### &nbsp; ☰ &nbsp; Request

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `cep`           | `string` | **Required**. only numbers of a cep       |

<br/>

`Cep Format: 8 numbers`


#### Body Example

```json
{
  "cep": "12345678",
}
```


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { code, state, city, district,address}`    |
|   **400**   |    Bad Request    | `error: { message, details }` |
|   **404**   |    Not Found    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example User data:
```json
{
	"code": "22281100",
	"state": "RJ",
  "city": "Rio de Janeiro",
  "district": "Botafogo",
  "address": "Rua Dinis Cordeiro"
}
```
#

</br>

</br>

## Lessons Learned

In this project I learned  how to structure an API with TDD structure, consuming an API in back-end with axios, use elaborate interfaces with TypeScript, and test the API with automatized tests with Jest and Supertest

</br>

## Acknowledgements

-   [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

-   [Victor Hugo Simões](https://github.com/VicterHuger)
<br/>