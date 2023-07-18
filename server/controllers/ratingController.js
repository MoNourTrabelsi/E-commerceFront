const Rating = require('../models/rating');


// Find all ratings
const getAllRating = async (req, res) => {
    try {
      const ratings = await Rating.findAll();
      res.status(200).json(ratings);
    } catch (error) {
      console.error('Error while finding all ratings:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // Create a new rating
  const AddRating = async (req, res) => {
    try {
      const { rating, review } = req.body;
      const { UserId , productId } = req.params;
      const newRating = await Rating.create({ rating, review,UserId,productId });
      res.status(201).json(newRating);
    } catch (error) {
      console.error('Error while creating a rating:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // Update a rating
  

  // Delete a rating
  const deleteRating =  (req, res) => {
    const ratingId = req.params.id;

  Rating.destroy({
    where: {
      id: ratingId,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
  };

  module.exports = {
    getAllRating,
    AddRating,
    
    deleteRating,
  };