function bmicalc(w,h){
    let ans=Math.round(w/(h*h));
    if (ans<18.50){
        console.log("UnderWeight");
    }
    else if (ans>18.50 && ans<24.9){
        console.log("NormalWeight");
    }
    else{
        console.log("OverWeight");
    }
}
bmicalc(65,1.8);