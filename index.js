function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const name = () => {
        console.log("name.name");
    }
    return name();
}



function returnsAnAnonymousFunction(){
    return function () {
        console.log("returning anonymous function");
    }
}
