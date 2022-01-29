// TODO 4: SETUP CONTROLLER
// import models
const Patient = require("../models/patient.js");

// create class PatientController
class PatientController {
    async index(req, res) {
        try {
            const patients = await Patient.find();

            const data = {
                message: "Get All Resource",
                data: patients,
                kode_status: 200,
            };
            
            res.json(data);

        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async store(req, res) {
        const patient = new Patient(req.body);

        try {
            const storePatient = await patient.save();

            const data = {
                message: "Resource is added successfully",
                data: storePatient,
                kode_status: 201,
            };

            res.json(data);

        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async show(req, res) {
        try {
            const name = await Patient.findOne({name: req.params.name})

            // check if name do not match
            if (name != Patient.findOne({name: req.params.name}) ) return res.status(404).json({ message: "Data Not Found!" });

            const data = {
                message: "Get Searched Resources",
                data: showPatient,
                kode_status: 200,
            };

            res.status(200).json(data);

        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    }

    async update(req, res) {
        const id = await Patient.findById(req.params.id);
        // check if id do not match

        if (!id) return res.status(404).json({ message: "Data Not Found!" });

        try {
            const updatePatient = await Patient.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );

            const data = {
                message: "Resource is update successfully",
                data: updatePatient,
                kode_status: 200,
            };

            res.status(200).json(data);

        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async destroy(req, res) {

        const id = await Patient.findById(req.params.id);
        // check if id do not match
        if (!id) return res.status(404).json({ message: "Data Not Found!" });

        try {
            await Patient.deleteOne({ _id: req.params.id });
            const data = {
                message: "Resource is delete successfully",
                kode_status: 200,
            };

            res.status(200).json(data);

        } catch (err) {
            res.status(404).json({ message: error.message });
        }
    }

    async positive(req, res) {
        try {
            const positive = await Patient.find({status: 'Positive'});

            // check if positive is empty
            if (positive == '') return res.status(404).json({ message: "Data Not Found!" });

            const data = {
                message: "Get Positive Resources",
                data: positive,
                kode_status: 200,
            };

            res.status(200).json(data);


        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }


    async negative(req, res) {

        try {
            const negative = await Patient.find({status: 'Negative'});
            
            // check if status negative is empty
            if (negative == '') return res.status(404).json({ message: "Data Not Found!" });

            const data = {
                message: "Get Negative Resources",
                data: negative,
                kode_status: 200,
            };

            res.status(200).json(data);
            
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }


    async recovered(req, res) {
        try {
            const recovered= await Patient.find({status: 'Recovered'});

            // check if status recovered empty
            if (recovered == '') return res.status(404).json({ message: "Data Not Found!" });

            const data = {
                message: "Get Recovered Resources",
                data: recovered,
                kode_status: 200,
            };

            res.status(200).json(data);

        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async dead(req, res) {
        try {
            const dead = await Patient.find({status: 'Dead'});

            // check if status dead empty
            if (dead == '') return res.status(404).json({ message: "Data Not Found!" });
            const data = {
                message: "Get Dead Resources",
                data: dead,
                kode_status: 200,
            };
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }


}

// instance object
const object = new PatientController();

// export
module.exports = object;
