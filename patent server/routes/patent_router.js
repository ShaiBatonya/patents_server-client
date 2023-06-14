const router = require('express').Router();

const {
    getAllPatents,
    getPatentById,
    addNewPatent,
    updatePatentById,
    deletePatentById
    
} = require('../controllers/patents_controller.js');

router.get('/all',getAllPatents);
router.get('/get_by_id/:patent_id',getPatentById);
router.post('/add',addNewPatent);
router.put('/update_by_id/:patent_id',updatePatentById);
router.delete('/delete_by_id/:patent_id',deletePatentById);



module.exports = router;