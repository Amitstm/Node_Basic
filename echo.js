const args = process.argv.slice(2);
args.forEach(arg => {
    let envVar = process.env[args];
    if(envVar === undefined){
        console.error(`Could not find "{args}" in environemt`);
    
    }
    else {
        console.log(envVar)
    }
    
});