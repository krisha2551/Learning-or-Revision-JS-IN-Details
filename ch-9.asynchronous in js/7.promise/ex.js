const { useSyncExternalStore } = require("react");

const cart = ["shoes", "watch", "book", "phone"];

// const cart = "";

function createOrder(cart) {
  const order = new Promise((resolve, reject) => {
    if (cart.length === 0) {
      reject("cart is empty");
    }
    setTimeout(() => {
      resolve("12345");
    }, 3000);
  });

  return order;
}

const shop = createOrder(cart);

// console.log(shop);

shop
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    throw new Error("payment failed");
  })
  .then(() => {
    console.log("order placed successfully");
  })
  .catch((err) => {
    console.log(err);
  });


const paymentDetails =new Promise((resolve,reject)=>{
  console.log("payment initialized");
  setTimeout(()=>{
    console.log("checking payment details....");
  },2000);

  let payment = true;


})

const payment = new Promise ((reslove, reject)=>{
  let paymentInitiate = true;

  if (paymentInitiate){
    console.log("payment initiated");

    setTimeout(()=>{
      console.log("checking payment details....");
      let payment = true;

      if(payment){
        reslove("payment completed succesfully");
      }else{
        reject("payment failed");
      }
    },2000);
  }else{
    reject("payment intitiation failed");
  }
});

payment
  .then((checkPayment)=>{
    return new Promise((reslove)=>{
      setTimeout(()=>{
        console.log("success:" , checPayment);
        reslove();
      },2000);
    });
  })

  .then(()=>{
    return new Promise((reslove)=>{
      setTimeout(()=>{
        console.log("fetching blance after payment deduction");
      },2000);
    });
  })

  .then(()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log("balance is:","xxxxxx amount left");
        resolve();
      },2000);
    });
  })

  .catch((err)=>{
    console.log("error:",err);
  })

  .finally(()=>{
    setTimeout(()=>{
      console.log("do you want to explore more?");
    },2000);
  });


