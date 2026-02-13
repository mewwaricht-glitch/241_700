/*
// ทำการ import โมดูล http
/*const http = require('http');
const host = 'localhost';
const port = 8000;*/

//กำหนดค่า server
/*const reqestListener = function(req, res) {
    res.writeHead(200);
    res.end('Hello, World! This is my first sever.');

}
// run sever
/*const server = http.createServer(reqestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://${host}:${port}');
});
//ค้นหาใน แถบ google url ว่า localhost:8000
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());
const port = 8000;

let users = [];
let counter = 1;
/*
GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
POST /users - เพิ่มผู้ใช้ใหม่
GET /users/:id - ดึงข้อมูลผู้ใช้ตาม ID
PUT /users/:id - แก้ไขข้อมูลผู้ใช้ตาม ID ที่บันทึก
DELETE /users/:id - ลบผู้ใช้ตาม ID ที่บันทึก
*/

// path: = /
app.get('/users', (req, res) => {
    res.json(users);
    
});


//path: = POST /user
app.post('/user', (req,res) => {
    let user = req.body;
    user.id = counter
    counter += 1;
    users.push(user);
    res.json({
    message: 'User added successfully',
    user: user
    });
});

//path: = PUT /users/:id
app.put('/users/:id', (req,res) => {
    let id = req.params.id;
    let updateUser = req.body;

    //หา user ที่จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    //อัพเดตข้อมูล users
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname ;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname ;


    res.json({
        message: 'User updateed successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    //ส่ง users ที่อัพเดตแล้วกลับไป
})   

//patch
app.patch('/users/:id', (req,res) => {
    let id = req.params.id;
    let updateUser = req.body;

    //หา user ที่จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    //อัพเดตข้อมูล users
    /*users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname ;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname ;*/

    // patch
    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'User updateed successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    //ส่ง users ที่อัพเดตแล้วกลับไป
})   
    
app.delete('/users/:id', (req,res) => {
    let id = req.params.id;
    //หา index จาก id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ user ออกจาก users
    users.splice(selectedIndex, 1);

    res.json({
        message: 'User deleted successfully',
        indexDelete: selectedIndex

    });
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
