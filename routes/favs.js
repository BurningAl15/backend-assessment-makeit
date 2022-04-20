const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields, isAuthenticated } = require('../middlewares/');
const { userExistsById, favExistsById } = require('../helpers/db-validators');

const {
    favGet,
    favsGetAll,
    favsPost,
    favsDelete,
} = require('../controllers/fav');
const router = Router();

router.get('/:id', [
    isAuthenticated,
    validateFields
], favGet);

router.get('/', [
    isAuthenticated,
    validateFields
], favsGetAll);

router.post('/', [
    isAuthenticated,
    validateFields,
], favsPost);

router.delete('/:id', [
    isAuthenticated,
    check('id', 'Not a valid ID').isMongoId(),
    check('id').custom(favExistsById),
    validateFields
], favsDelete);

module.exports = router;
