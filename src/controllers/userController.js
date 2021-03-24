const {DBCONNECTION}  = require('../config/DB_Config')
const signupController = (req,res) => {
    const {username,email,password}  = req.body;
}
const signinController = (req,res) => {
    const {email,password}  = req.body;

}
module.exports = {signinController,signupController}