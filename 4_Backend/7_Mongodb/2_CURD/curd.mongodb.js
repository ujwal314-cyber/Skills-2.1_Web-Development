use("Curd")
//=> CREATE

db.createCollection('courses')

// db.courses.insertOne({"course":"Web Development","fee":0,"From":"Code With Harry"})

// db.courses.insertMany([
//   {
//     "course": "Web Development",
//     "fee": 0,
//     "from": "Code With Harry"
//   },
//   {
//     "course": "Python Programming",
//     "fee": 499,
//     "from": "Udemy"
//   },
//   {
//     "course": "Java Masterclass",
//     "fee": 799,
//     "from": "Coursera"
//   },
//   {
//     "course": "Data Structures and Algorithms",
//     "fee": 999,
//     "from": "GeeksforGeeks"
//   },
//   {
//     "course": "Machine Learning",
//     "fee": 1499,
//     "from": "Andrew Ng"
//   },
//   {
//     "course": "React JS",
//     "fee": 699,
//     "from": "freeCodeCamp"
//   },
//   {
//     "course": "Node.js Backend Development",
//     "fee": 899,
//     "from": "Udemy"
//   },
//   {
//     "course": "Cyber Security Fundamentals",
//     "fee": 1299,
//     "from": "Cisco Networking Academy"
//   },
//   {
//     "course": "Cloud Computing with AWS",
//     "fee": 1999,
//     "from": "AWS Training"
//   },
//   {
//     "course": "Docker and Kubernetes",
//     "fee": 1199,
//     "from": "KodeKloud"
//   }
// ])//you must insert an array of elements [{...},{....},...]

//If you run this code again then these elements will be inserted again though they exist already


//=> READ

// let a=db.courses.find({"fee":0})
// console.log(a);
// // console.log(a.toArray());

// let b=db.courses.findOne({"fee":799})//returns the first element with that value
// console.log(b);


// => UPDATE

// db.courses.updateOne({"fee":0},{$set:{"fee":100}})
// db.courses.updateMany({"fee":899},{$set:{"price":1000}})


// => DELETE

// db.courses.deleteOne({"fee":0})
// db.courses.deleteMany({"price":1000})

//for operators refer mongodb website docs