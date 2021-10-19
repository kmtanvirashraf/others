async function someFunction(items){
    items.forEach(async(i) => {
        const res=await someApiCall(i);
        console.log('-->',res);
    });
}

function someApiCall(param){
    return new Promise((resolve)=>{
       setTimeout(()=>{
           resolve(''+param);
       },param);
    });
}

someFunction([1000,2000,3000,8000]);