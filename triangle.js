let col = 10;
let row = 5;
let strres = '';
for (let i = 1; i<= row; i++) {
     for (let j = 1; j<= col; j++) {
        strres =strres + '*'
     }

     strres =strres + '\n';
    }
    console.log(strres);