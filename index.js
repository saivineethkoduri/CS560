const express = require("express");
const users = require("./routes/users")
const app = express();
app.listen(8080, () => {
    console.log("server is running in port  8080")

})

app.use('/', users)