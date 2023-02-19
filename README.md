# smart-trolley
## To install and run:

### go into client directory using ```cd client```
### install packages using ```npm i```
### After install run using ```npm start```

## Documentation
## for development

## Pakages

### server
express
bcrypt
dotenv
mysql2
cors
cookie-parser
jsonwebtoken

### client
react
flowbite
flowbite-react
react-router-dom
axios

## file structure
```sh
server
    database
        config
    controllers
        user
        item
        product
    middlewares
        asyncWrapper
        auth
    modles
        User
        Item
        Products
    routes
        user
        item
        products
    utils
        token
        password
        dbLogger
```
! work to be done
>Note: create files as '.\controller.user.js' and not just '.\controllers\user.js'  for the server files
```sh
client
    
```
## api's

### user

```sh
    \api\signin \\post
    \api\signup \\post
    \api\signout \\get
```
payloads

```js
signup = { username, email, phone, password }
signin = { email or phone, password }
```
work to be done! (update using sockets)

```sh
    #by consumer
    \api\item      \\get and post
    \api\item\:id  \\get and delete
```
work to be done! (update using sockets)

### admin

```sh
    #by admin
    \api\product \\get and post
    \api\product\:id \\get, post and delete
```

### jwt payload

work to be done!

```sh
    payload = { username, phone, role }
```