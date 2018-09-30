// This is the backend reading component
// containing the CRUD for the backend
// Everything related to the back reading API lives here
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Reading = require('../models/Reading');

// Here this router.get('/') actually means /api/reading/ since the previous
// portion of the URL is already build on app.js
router.get('/', (req, res, next) => {
    Reading.find((err, testSectionData)=>{
      if (err) {
        return next(err);
      }     
      res.json(testSectionData);
    });
});

router.get('/:id', (req, res, next) => {
  Reading.findById(req.params.id,(err, selectTestSectionData) => {
    if (err) {
      return next(err);
    }    
    res.json(selectTestSectionData);
  });
});
// note that findById is returning selectTestSectionData, 
// a new we have assigned to what it returns.

// next defines what happens after the request/response 
// cycle is completed and goes on the next portion.
// here res.json is defining the response datatype. Here json.
router.post('/', (req, res, next) => {
  Reading.create(req.body, (err, post)=>{
    if (err) {
      return next(err); 
    }
    
    res.json(post);
  });
});
  
router.put('/:id', (req, res, next) => {
  Reading.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) {
      return next(err);
    } 
    
    res.json(post);
  });
});

router.delete('/:id', (req, res, next) => {
  Reading.findByIdAndRemove(req.params.id, (err, post) => {
    if (err) {
      return next(err);
    }     
    res.json(post);
  });
});

module.exports = router;
