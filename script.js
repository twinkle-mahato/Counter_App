const countValue=document.querySelector('#counter');

const increment=()=>{

    // const increment(){} we can also write in this way

    //get the value from UI
    let value=parseInt(countValue.innerText);

    //increment the value or update the value
    value=value+1;

    //set the value onto UI
    countValue.innerText=value;

};

const decrement=()=>{
    
    // const decrement(){} we can also write in this way

    //get the value from UI
    let value=parseInt(countValue.innerText);

    //increment the value or update the value
    value=value-1;

    //set the value onto UI
    countValue.innerText=value;

};