import express from "express"

const app = express();
const port = 3000;

// app.get("/",(req, res) => {
//     res.send("Hello I am learning express :)")
// })
// app.get("/another-route",(req, res) => {
//     res.send("Hello I am learning express and this is another route which I have tried :)")
// })
// app.get("/coffee",(req, res) => {
//     res.send("This is coffee page :)")
// })

app.use(express.json())
let coffeeData = []
let indexId = 1

//Add a new coffee
app.post("/coffee", (req, res) => {
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
    res.status(200).send(coffeeData)
})

//Get a coffee with id
app.get("/coffee/:id", (req, res) => {
    const coffee = coffeeData.find((coffee) => coffee.id === parseInt(req.params.id));
    if(!coffee){
        return res.status(404).send("Coffee not found")
    }
    res.status(200).send(coffee)
})

//Update coffee
app.put("/coffee/:id", (req, res) => {
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