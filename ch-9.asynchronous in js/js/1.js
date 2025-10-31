function callbackFunc(){
    console.log("",result);
}

function totalSumOfNumbers(a,b,callBackFunc){
    let result= a+b;
    callBackFunc(result);
}

totalSumOfNumbers(14,10,callbackFunc);

function callbackFunc(){
    console.log("",result);
}

function  totalSumofNumbers(a,b,callBackFunc){
    let result = a+b;
    callBackFunc
}


const paymentDetails = new Promise((resolve, reject)=>{
    console.log("payment initialized");
    setTimeout(() => {
        console.log("checking payment details");
    }, 2000);

    let payment = true;

    setTimeout(()=>{
        if(payment === true){
            resolve("payment successful completed");
        }else {
            reject("payment failed")
        }
    },3000);
});


paymentDetails
    .then((message)=>{
        console.log("success :", message);
    })
    .then(()=>{
        console.log("quit now");
    }).then(()=>{

    });

paymentDetails.catch((err)=>{
        console.log("reject : ",err);
});



