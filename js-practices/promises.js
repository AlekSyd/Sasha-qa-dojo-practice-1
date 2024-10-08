const promise = new Promise ((resolve, rejected) => {
    if(true){
        resolve('I want to return this as resolve')
    }
    else{
        rejected("Somthing went wrong...")
    }
});


promise.then((result) => console.log(result)).catch((rejected) => console.log(rejected));

async function fetchData() {
    console.log("Start fetching");
    const response = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Here is you data {user: rest, id: 1234}")
        }, 5_000)
    })

    console.log(response);
}

fetchData();
console.log("this is happening immediately");
