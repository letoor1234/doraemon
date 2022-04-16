const express= require("express");
require("dotenv").config();
const app= express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get( "/", async ( req, res) => {
    res.send("Hello World");
});

app.post("/form", async (req, res)=>{

    console.log("req is :: ", req);

    return res.send("Form Submitted !! :: " + req.body);
});
    
app.listen( port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("Process :: ", process);
});






