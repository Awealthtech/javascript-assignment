const generateotp = () =>{
    let otp_code = [];
    for(let i=0; i < 5; i++){
        const element = Math.round(Math.random() * 9);
        otp_code.push(element);
    }
    const splitted = otp_code.join("");
    return splitted;
};
console.log(generateotp());
document.getElementsbyid("display_otp").innerhtml = generateotp();