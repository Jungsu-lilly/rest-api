const express = require('express');
const bodyParser = require('body-parser');
const server = express(); // 서버를 만듬
server.use(bodyParser.json());

// CRUD (Create, Read, Update, Delete)

const users = [{
        id: "matt1235",
        name: "Jungsu",
        email: "matt1235@naver.com",
    },
    {
        id: "jenny4536",
        name: 'jenny',
        email: "jenny@daum.net"
    },
    {
        id: 'lilmo',
        name: 'lilly',
        email: 'lilmo@gamil.com'
    }
];


// 유저 목록 조회
server.get("/api/user", (req, res) => { // 'api/user' endpoint
    res.json(users);
})


// Read (해당 유저 정보 조회)
server.get("/api/user/:id", (req, res) => {
    const user = users.find((u) => {
        return u.id === req.params.id;
    });
    if (user) { // user 가 존재한다면
        res.json(user);
    } else {
        res.status(404).json({
            errorMessage: 'User was not found'
        });
    }
});


// 유저 정보 생성.
server.post("/api/user", (req, res) => {
 //   console.log(req.body);
    users.push(req.body);
    res.json(users);
})


// 유저 정보 수정
server.put("/api/user/:id", (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if (foundIndex === -1) {
        res.status(404).json({
            errorMessage: "User was not FOund!"
        });
    } else {
        users[foundIndex] = {
            ...users[foundIndex],
            ...req.body
        };
        res.json(users[foundIndex]);
    }
});


// 유저 정보 삭제.
server.delete('/api/user/:id', (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if (foundIndex === -1) {
        res.status(404).json({
            errorMessage: "User was not found!"
        });
    } else {
        let foundUser = users.splice(foundIndex, 1);
        res.json(foundUser[0]);
    }
})

server.listen(3000, () => {
    console.log('The server is running!');
});  