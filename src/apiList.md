# DevTinder APIS

## authRouter

- POST /signup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/passsword

## connectionRequestRouter

- POST /request/send/:status/:userId
- POST /request/review/:status/:requestId

## userRouter

- GET /user/requests/recieved
- GET /user/connections
- GET /feed - Gets you the profiles of other users on platform

Status: ignore, interested, accepted, rejected
