fetch ('https://api.frankfurter.app/currencies')
.then((data)=>data.json())
.then((data)=>{
  conversionCurrency(data);
});

function conversionCurrency(data){
  const currency = data.currencies;

  function conversion(amount, from, to) {
    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
    .then(resp => resp.json())
    .then((data) => {
      result.innerText = `${amount} ${from} = ${data.rates[to]} ${to}`;
    });
    
  }
  console.log(conversion(data));
  return result;
}



module.exports = conversionCurrency;