
const express = require("express")
const router = express.Router()

const {getAllRating,AddRating,deleteRating} = require("../controllers/ratingController")


router.get("/getAll",getAllRating)
router.post("/add/:UserId/:productId",AddRating)
router.delete("/:id",deleteRating)



module.exports = router