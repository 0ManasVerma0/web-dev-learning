import express from "express"
import 'dotenv/config'
const app = express();
const port = process.env.PORT ||  3000;

// app.get("/",(req, res) => {
//     res.send("Hello I am learning express :)")
// })
// app.get("/another-route",(req, res) => {
//     res.send("Hello I am learning express and this is another route which I have tried :)")
// })
// app.get("/coffee",(req, res) => {
//     res.send("This is coffee page :)")
// })


let coffeeData = []
let indexId = 1
app.use(express.json())

//Add a new coffee
app.post("/coffee", (req, res) => {
    console.log("POST")
    const {name, price} = req.body;
    const newCoffee = {
        id: indexId++,
        name,
        price
    };
    coffeeData.push(newCoffee);
    res.status(201).send(coffeeData);
})

//get all coffee 
app.get("/coffee", (req, res) => {
    console.log("GET")
    res.status(200).send(coffeeData)
})

//Get a coffee with id
app.get("/coffee/:id", (req, res) => {
    console.log("GET")
    const coffee = coffeeData.find((coffee) => coffee.id === parseInt(req.params.id));
    if(!coffee){
        return res.status(404).send("Coffee not found")
    }
    res.status(200).send(coffee)
})

//Update coffee
app.put("/coffee/:id", (req, res) => {
    console.log("PUT")
    const coffee = coffeeData.find((coffee) => coffee.id === parseInt(req.params.id));
    if(!coffee){
        return res.status(404).send("Coffee not found");
    }
    const {name, price} = req.body;
    coffee.name = name;
    coffee.price = price;
    res.status(200).send(coffee);
})

//Delete Coffee
app.delete("/coffee/:id", (req, res) => {
    console.log("DELETE")
    const index = coffeeData.findIndex((coffee) => coffee.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).send("Coffee not found")
    }
    coffeeData.splice(index, 1);
    res.status(204).send("Deleted")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`)
})