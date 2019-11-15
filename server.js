const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "client/build"));
}

app.get('/', function (req, res, next) {
    console.log(req.body)
});

app.post('/', function (req, res, next) {
    console.log(req.body)
});

// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})