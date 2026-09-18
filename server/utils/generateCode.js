
const generateCode = ()=>{

     const mainString= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

     let shortCode="";

     for(let i =0;i<6;i++){
        shortCode += mainString.charAt(Math.floor(Math.random()*62))

     }

     console.log("code=>",shortCode);
     

     return shortCode

}

export default generateCode;