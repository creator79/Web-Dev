const mongoose = require("mongoose");
let { DB_LINK } = require("../secrets");

// connnection form 
mongoose.connect(mongodb+srv//Vivek:<M2uZ9yXAN9kk1KOR>@cluster0.1izkg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority)
.then(function (db) {
    console.log(db);
}).catch(function (err) {
    console.log("err", err);
})