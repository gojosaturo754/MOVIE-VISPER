const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'NIRmFRyL#ztLXw5f3G6Tu_98rAfWDz5Uuxzpi1Xuy0PMNlhVS_Ps' : process.env.SESSION_ID, 
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'U8ynVEvTP4qMPYb82n3WzXMYVrBcsM0cV1RJ' : process.env.GITHUB_AUTH_TOKEN,  //🛑 Github token එක දැමීමේදී ghp_  කොටස ඉවර් කර දමන්න.  
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'gojosaturo754' : process.env.GITHUB_USER_NAME, // 🛑 Github user name එක ගද්දි ඔයාලා token එක ගත්ත Github එකේ user name එක දාන්න අනිවාරෙන්
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 


//🛑 Github token එක දැමීමේදී ghp_  කොටස ඉවර් කර දමන්න.
//🛑 Github user name එක ගද්දි ඔයාලා token එක ගත්ත Github එකේ user name එක දාන්න අනිවාරෙන්

};
