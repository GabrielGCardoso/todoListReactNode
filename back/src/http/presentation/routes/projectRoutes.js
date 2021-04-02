var express = require('express');
const router = express.Router();

const {
    destroyProject,
    getAllProjects,
    createProject,
    updateProject,
} = require('src/http/presentation/controllers/project');

router.get('/projects', getAllProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', destroyProject);

module.exports = router;
