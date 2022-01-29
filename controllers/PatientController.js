// TODO 4: SETUP CONTROLLER
// import models
const Patient = require("../models/patient.js");

// import express validator
const { body, validationResult } = require("express-validator");

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
            res.status(200).json(data);
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
            res.status(201).json(data);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async show(req, res) {
        const id = await Patient.findById(req.params.id);
        if (!id) return res.status(404).json({ message: "Data Not Found!" });
        try {
            const showPatient = await Patient.findOne({_id: req.params.id})
            const data = {
                message: "Resource is update successfully",
                data: showPatient,
                kode_status: 200,
            };
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async update(req, res) {
        const id = await Patient.findById(req.params.id);
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

    async findByStatus(req, res) {
        try {
            const patients = await Patient.find()
            const data = {
                message: "Get All Resource",
                data: patients,
                kode_status: 200,
            };
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

// instance object
const object = new PatientController();

// export
module.exports = object;
