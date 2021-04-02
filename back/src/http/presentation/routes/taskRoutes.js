var express = require('express');
const router = express.Router();

const { createTask, updateTask, destroyTask } = require('src/http/presentation/controllers/task');

router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', destroyTask);

module.exports = router;
