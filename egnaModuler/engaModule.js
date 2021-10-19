const sayName=name=>{
return `Tjs ${name}.`
};
const showAge=age=>{
    return `youa are ${age}`
};
const calc=(num1,num2)=>{
    return num1*num2;
};

const genomSnitt=(num1,num2)=>{
    return(num1+num2)/2;
};

exports.name={sayName,showAge,calc,genomSnitt};