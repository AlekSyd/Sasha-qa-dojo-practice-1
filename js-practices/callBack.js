function greeting(name){
    console.log(`Hello, ${name}`);
};

//working in the browser console
greeting("Sandra");

function userInput(callback){
    const name = prompt("Please ebter your name.");
    callback(name);
    
}

userInput(greeting);



