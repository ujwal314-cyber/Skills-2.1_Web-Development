
use('Mongodb');

db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "type": "Programming Language"
  },
  {
    "name": "Python",
    "type": "Programming Language"
  },
  {
    "name": "JavaScript",
    "type": "Programming Language"
  },
  {
    "name": "C",
    "type": "Programming Language"
  },
  {
    "name": "C++",
    "type": "Programming Language"
  },
  {
    "name": "C#",
    "type": "Programming Language"
  },
  {
    "name": "Go",
    "type": "Programming Language"
  },
  {
    "name": "Rust",
    "type": "Programming Language"
  },
  {
    "name": "PHP",
    "type": "Programming Language"
  },
  {
    "name": "Swift",
    "type": "Programming Language"
  }
]);

console.log(`Done Inserting`);
