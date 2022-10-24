var isDivisible = (n) => {
    if (n % 6 ==0)
        return true;
    else
        return false;    

  }

  let diviRes = isDivisible(60);
        if (diviRes == true)
             console.log("it is divisble by 6");
        else
             console.log("it is not divisible by 6");
             