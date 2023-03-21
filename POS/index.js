const withdrawal = (availablebalance) => {
    const output = new Promise ((resolve,reject) =>{
        if(availablebalance < 1000 || !availablebalance) {
            reject({Message: "insufficient balance", status: "Transaction decline"});
        }
        else
        {
            setTimeout(() => {
                resolve({Message: "please take your", status: "Transaction completed successfully"})
            }, 1000);
        }
    });
    return output;
}

const asyncall = async (availablebalance) => {
    try{
        console.log("Transaction in progress");
        const result = await withdrawal(availablebalance);
        console.log(result)
        console.log("successful withdraw!")
    }
    catch(error){
        console.log(error)
        console.log("please take your card");
    }
}
asyncall(300);