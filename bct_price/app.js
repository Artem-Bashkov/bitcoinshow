fetch('https://api.coinbase.com/v2/prices/spot?currency=UAH')
.then(function(resp){return resp.json()})
.then(function(data){
  console.log(data);
  document.querySelector('.label1').textContent = data.data.base;
  document.querySelector('.label2').textContent = data.data.amount;
  document.querySelector('.label3').textContent = data.data.currency;
})
.catch(function(){

});