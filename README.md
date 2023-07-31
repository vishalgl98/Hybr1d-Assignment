# Hybr1d-Assignment

follow below steps

1. npm install
2. npm start


# About the structure

Using nodejs, mongoDB, express, jwt\
Server running on port 5000\
In routes all routes are defined which calls controllers where all logic is implemented\
In models schema has been defined\
In middleware role based auth logic is defined\

# User API

To register user /api/auth/register\
> {
>    "username" : "Test",
>    "email" : "Test@gmail.com",
>    "password" : "Test",
>    "role" : "buyer or seller"
> }\

To login user /api/auth/login
> {
>    "email" : "Test@gmail.com",
>    "password" : "Test",
> }\

# Seller API

To create catalog for a seller POST reques look like this api/seller/create-catalog\
> {
>    "products" : [
>    {
>        "name" : "Test",
>        "price" : "10"
>    }
> ]
> }\

To get orders of a seller hit api/seller/orders\

# Buyer API

To get list or sellers : /api/buyer/list-of-sellers\

To get seller's catalog : /api/buyer/seller-catalog/:seller_id\

To create order : /api/buyer/create-order/:seller_id\

