const router = require('express').Router();

const { getAllThought,
        getThoughtById,
        addThought,
        removeThought,
        updateThought,
        addReaction,
        removeReaction,
    } = require('../../controllers/thought-controller');

router
    .route('/:userId')
    .post(addThought);

router
    .route('/')
    .get(getAllThought);

router
    .route('/:thoughtId/')
    .get(getThoughtById)
    .put(updateThought)

router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

router
    .route('/:thoughtId/reactions/')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;