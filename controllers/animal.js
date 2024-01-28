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
          { species: "Bear", lifeExpectancy: 40, extinct: false },
          { species: "Bee", lifeExpectancy: 50, extinct: false },
          { species: "Tiger", lifeExpectancy: 60, extinct: false },
          { species: "Wolf", lifeExpectancy: 70, extinct: false },
          { species: "Flamingo", lifeExpectancy: 80, extinct: false },
        ]
  
  
    Animal.remove({}, (err, data) => {
    
      Animal.create(startAnimals,(err, data) => {

          res.json(data);
        }
      );
    });
  });

// INDEX route
  router.get("/", async (req, res) => {
    try {
      const animals = await Animal.find({});
      res.render("animals/index.ejs", { animals});
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  });

  // NEW route
router.get("/new", (req, res) => {
    res.render("animals/new.ejs")
})

// CREATE route
router.post("/", (req, res) => {
    // check if the warm_blooded property should be true or false
    req.body.warm_blooded = req.body.warm_blooded === "on" ? true : false
    Animal.create(req.body, (err, animal) => {
        res.redirect("/animals")
    })
})

    //UPDATE route
router.put("/:id", (req, res) => {
    const id = req.params.id
    req.body.warm_blooded = req.body.warm_//////////////////////////////////////////
    // Export the Router
    //////////////////////////////////////////blooded === "on" ? true : false
    Animal.findByIdAndUpdate(id, req.body, {new: true}, (err, animal) => {
        res.redirect("/animals")
    })
})

// DELETE
router.delete("/:id", (req, res) => {
    const id = req.params.id
    Animal.findByIdAndRemove(id, (err, animal) => {
        res.redirect("/animals")
    })
})

  // SHOW route
  router.get("/:id", (req, res) => {
    const id = req.params.id
    // find the particular animal from the database
    Animal.findById(id, (err, animal) => {
        // render the template with the data from the database
        res.render("animals/show.ejs", {animal})
    })
})


module.exports = router