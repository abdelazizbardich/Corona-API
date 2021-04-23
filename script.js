let countryCode = document.querySelector('input[name="countryCode"]');
countryCode.addEventListener("keyup",(e)=>{
    let val = e.target.value;
    setData(val);
})