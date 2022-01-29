// TODO 2: SETUP ROUTING (ROUTER)
// import express
const express = require("express");

// import PatientController
const PatientController = require('../controllers/PatientController');

// instance router
const route = express.Router();


// create router patient
// route get all patient
route.get('/patients', PatientController.index);

// route create patient
route.post('/patients', PatientController.store);

// route update patient
route.put('/patients/:id', PatientController.update);

//route delete patient
route.delete('/patients/:id', PatientController.destroy);

// route search patient by name
route.get('/patients/search/:id', PatientController.show);

// route search patient by status positive
route.get('/patients/search/positive', PatientController.findByStatus);

// route search patient by status negative
route.get('/patients/search/negative', PatientController.findByStatus);

// route search patient by status recovered
route.get('/patients/search/recovered', PatientController.show);

// route search patient by status dead
route.get('/patients/search/dead', PatientController.show);



// export router
module.exports = route