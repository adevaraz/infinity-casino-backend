const { Admin } = require('../models')

const login = async (request, h) => {
  console.log("admin");
  try {
    const admin = await Admin.findAll()
    return admin
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  login
}