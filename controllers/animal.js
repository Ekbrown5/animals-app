////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const Animal = require("../models/animal")

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
router.get("/animals/seed", (req, res) => {

   
    const startAnimals = [
          { name: "Bear", color: "black", warm_blooded: false },
          { name: "Bee", color: "yellow", warm_blooded: false },
          { name: "Tiger", color: "orange", warm_blooded: false },
          { name: "Wolf", color: "white", warm_blooded: false },
          { name: "Flamingo", color: "pink", warm_blooded: false },
        ]
  
  
    Animal.remove({}, (err, data) => {
    
      Animal.create(startAnimals,(err, data) => {

          res.json(data);
        }
      );
    });
  });


router.get("/animals", (req, res) => {
    Animals.find({}, (err, animals) => {
      res.render("animals/index.ejs", { animals });
    });
  });

  // new route
router.get("/animals/new", (req, res) => {
    res.render("animals/new.ejs")
})

// create route
router.post("/animals", (req, res) => {
    // check if the readyToEat property should be true or false
    req.body.warm_blooded = req.body.warm_blooded === "on" ? true : false
    // create the new fruit
    Fruit.create(req.body, (err, fruit) => {
        // redirect the user back to the main fruits page after fruit created
        res.redirect("/animals")
    })
})

  // show route
router.get("/animals/:id", (req, res) => {
    const id = req.params.id

    //update route
router.put("/animals/:id", (req, res) => {
    const id = req.params.id
    req.body.warm_blooded = req.body.warm_//////////////////////////////////////////
    // Export the Router
    //////////////////////////////////////////blooded === "on" ? true : false
    Animal.findByIdAndUpdate(id, req.body, {new: true}, (err, animal) => {
        res.redirect("/animals")
    })
})

router.delete("/animals/:id", (req, res) => {
    const id = req.params.id
    Animal.findByIdAndRemove(id, (err, animal) => {
        res.redirect("/animals")
    })
})

    // find the particular animal from the database
    Animals.findById(id, (err, animal) => {
        // render the template with the data from the database
        res.render("animals/show.ejs", {animal})
    })
})


module.exports = router