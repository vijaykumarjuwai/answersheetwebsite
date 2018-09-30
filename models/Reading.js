const mongoose = require('mongoose');

// The goal of below is to build a schema below for the reading section.
const readingSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  testType: String,
  name: String,
  sections: [
    {
      sectionType: String,
      questions: [
        {
          answer: String
        }
      ]
    }
  ]     
});


module.exports = mongoose.model('Reading', readingSchema)
  // Here we are naming the readingSchema model Reading
  // & exporting it. mongoose.model will take a schema and convert it into a model.
  // here named reading.
  // the point of model is to be able to perform object relation model functions. 
  // so we can find & update, find by id etc.  

// #Database Schema for mongoose. It is a giant array with objects as elements of the DB. Designed as a single file.
// # Created for separations of concerns. So each concern has its own file.

// #https://expressjs.com/en/guide/routing.html

// #Mongoose Model
// [
//   {
//     "satTests": {
//         "testInstance": {
//             "id": 1,
//             "name": "SAT Cram 1",
//             "reading": {
//                 "questions": [
//                     {
//                         "answer": "a"
//                     },
//                     {
//                         "answer": "b"
//                     }
//                 ]
//             }
//         }
//     }
//   }
// ] 
