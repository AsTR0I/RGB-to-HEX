// RGB to HEX
function rgb(r, g, b){
    let arr = [r,g,b];
     let res = ''
     for (let i = 0; i < arr.length; i++){
       if (arr[i] < 0){
        arr[i] = 0;
        res += (arr[i].toString(16).padStart(2, "0")).toUpperCase(); 
       }    else if(arr[i] > 255){
            arr[i] = 255;
            res += (arr[i].toString(16).padStart(2, "0")).toUpperCase(); 
       }    else{
        res += (arr[i].toString(16).padStart(2, "0")).toUpperCase();
       }
     }
     return res;
   }