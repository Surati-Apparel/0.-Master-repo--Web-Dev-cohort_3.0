import express from 'express';
const app = express();

app.use(express.json());

const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    //store in global users []
    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "You are signed up",
        users: users
    })
})

app.post('/signin', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    //check if username and password are valid
    const foundUser = users.find(u => {
        if(u.username === username && u.password === password) {
            return true;
        }else{
            return false;
        }
    })

    if(foundUser) {
        const token = generateToken();
        foundUser.token = token;

        res.json({
            msg: "You are signed in",
            token: token,
            user: foundUser 
        })
    }else {
        res.json({
            msg: "Invalid usename and password"
        })
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const user = users.find(user => user.token === token);
    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});