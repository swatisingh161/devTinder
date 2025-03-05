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

- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## userRouter

- GET /user/connections
- GET /user/requests
- GET /feed - Gets you the profiles of other users on platform

Status: ignore, interested, accepted, rejected
