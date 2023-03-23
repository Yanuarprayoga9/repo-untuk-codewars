function getCount(str) {
  
    //jika setiap ketemu huruf vokal maka +1
     //jika setiap ketemu huruf vokal maka +1
   let vowels=["a","i","u","e","o"]
    let strSplit = str.split("");
    
    // perulangan untuk menampilkan vowels
    for(let i = 0 ; i<vowels.length;i++){
        let sama=0;
        for(let a = 0;a<strSplit.length;a++){
            console.log(strSplit[a]);
            if(strSplit.includes(vowels[i])){
                sama=1;
               return sama++
            }else{
                return 0;
            }
        }
    }
    
  }
  console.log(getCount("saya ingin makan nasi padang   "))