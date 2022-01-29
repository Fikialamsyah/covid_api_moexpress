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
route.get('/patients/search/:name', PatientController.show);

// route search patient by status positive
route.get('/patients/status/positive', PatientController.positive);

// route search patient by status negative
route.get('/patients/status/negative', PatientController.negative);

// route search patient by status recovered
route.get('/patients/status/recovered', PatientController.recovered);

// route search patient by status dead
route.get('/patients/status/dead', PatientController.dead);



// export router
module.exports = route