# UlamInterviewTask

This is an app for recruitment process. It's simple and clear. It has only drag & drop field and also map from Google Maps.
For getting locations by addresses it uses PositionStack API: https://positionstack.com/

![image](https://user-images.githubusercontent.com/37072902/129806672-04a0a3c4-a117-4111-bbbf-c543e44571f7.png)

![image](https://user-images.githubusercontent.com/37072902/129806884-6d750294-0a92-4448-923d-c6684f0bbc8c.png)

![image](https://user-images.githubusercontent.com/37072902/129806950-95d762d4-7751-45d8-a032-ebd5777b4440.png)

![image](https://user-images.githubusercontent.com/37072902/129807018-f36d08a8-6fb1-46eb-87a8-8a2a9c21885a.png)

## Setting up

It just needs basic commands:
```
npm install
```
and
```
npm start
```

## Is it deployed somewhere?

Yes, of course. It's on Netlify: https://ulam-interview-task.netlify.app/
But there's a problem with HTTPS and HTTP because the API of PositionStack is running on HTTP so there is a problem with calling it. It requires hosting with HTTP which is not supported on Netlify (I should search somewhere else) or upgrading PositionStack (but it requires money 💸💸💸).

So I would need some time to figure out how to solve it.
