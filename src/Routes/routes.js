

const router = require('express').Router();
const controller = require('../controllers/models.controllers');
const feedbackController = require('../controllers/feedback.controller');
const userController = require('../controllers/user.controller');
const {uploadNotes,uploadVideo,uploadPdf,uploadResearchFile} = require('../middleware/multer');

/**MATERIAL POST METHODS */

router.route('/notes').post(uploadNotes, controller.note);
router.route('/pdf').post(uploadPdf, controller.pdf);
router.route('/record').post(uploadVideo,controller.Record);
router.route('/research').post(uploadResearchFile, controller.research);

/**MATERIAL GET METHODS */

router.get('/allNotes',controller.getNotes);
router.get('/allPdf',controller.getPdf);
router.get('/allRecords',controller.getRecords);
router.get('/allResearch',controller.getResearches);

/**SPECIFIC MATERIAL GET METHODS */

router.get('/getNote/:subject/:grade',controller.getNote);
router.get('/viewNote/:id',controller.viewNote);
router.get('/getPdf/:subject/:grade',controller.getOnePdf);
router.get('/viewPdf/:id',controller.viewPdf);
router.get('/getRecord/:subject/:grade',controller.getRecord);
router.get('/viewRecord/:id',controller.viewRecord);
router.get('/getResearch/:teacher',controller.getResearch);
router.get('/viewResearch/:id',controller.viewResearch);

/**SPECIFIC MATERIAL PUT METHODS */

router.put('/updateNote/:id',uploadNotes,controller.updateNote);
router.put('/updatePdf/:id',uploadPdf,controller.updatePdf);
router.put('/updateResearch/:id',uploadResearchFile,controller.updateResearch);
router.put('/updateRecord/:id',uploadVideo,controller.updateRecord);

/**MATERIAL DELETE METHODS */

router.delete('/deleteNote/:id',controller.deleteNote);
router.delete('/deletePdf/:id',controller.deletePdf);
router.delete('/deleteRecord/:id',controller.deleteRecord);
router.delete('/deleteResearch/:id',controller.deleteResearch);

/**MATERIAL DOWNLOAD METHODS */

router.get('/downloadNote/:id',controller.DownloadNote);
router.get('/downloadPdf/:id',controller.DownloadPdf);
router.get('/downloadResearch/:id',controller.DownloadResearch);



/**FEEDBACK POST METHODS */

router.post('/feedback',feedbackController.feedback);

/**FEEDBACK GET METHODS */

router.get('/allFeedback',feedbackController.getFeedbacks);
router.get('/getFeedback/:id',feedbackController.getFeedback);

/**FEEDBACK PUT METHODS */

router.put('/updateFeedback/:id',feedbackController.updateFeedback);

/**FEEDBACK DELETE METHODS */

router.delete('/deleteFeedback/:id',feedbackController.DeleteFeedback);


/**USER POST METHODS */

router.post('/plogin',userController.User);

module.exports = router;
