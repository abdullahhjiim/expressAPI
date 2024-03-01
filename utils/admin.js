const bcrypt = require('bcryptjs');
const admins = [
  {
    name:'Dorothy R. Brown',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
    email: "dorothy@gmail.com",
    password: bcrypt.hashSync("123456"),
    phone: "708-628-3122",
    role: "Admin",
    joiningData: new Date()
  },
  {
    name:'Alice B. Porter',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
    email: "porter@gmail.com",
    password: bcrypt.hashSync("123456"),
    phone: "708-628-3122",
    role: "Admin",
    joiningData: new Date()
  },
  {
    name:'Corrie H. Cates',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
    email: "corrie@gmail.com",
    password: bcrypt.hashSync("123456"),
    phone: "708-628-3122",
    role: "Admin",
    joiningData: new Date()
  },
  {
    name:'Shawn E. Palmer',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
    email: "palmer@gmail.com",
    password: bcrypt.hashSync("123456"),
    phone: "902-628-3122",
    role: "CEO",
    joiningData: new Date()
  },
  {
    name:'Stacey J. Meikle',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
    email: "meikle@gmail.com",
    password: bcrypt.hashSync("123456"),
    phone: "102-628-3122",
    role: "Manager",
    joiningData: new Date()
  }
];

module.exports = admins;
