var func = (number) => {

    
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
        console.log(fact);
    }

}  


console.log(func(5));