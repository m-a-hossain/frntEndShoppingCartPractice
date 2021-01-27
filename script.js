/* 

function calculateForPlus(){ 
    var items = document.getElementsByClassName('item');
    
    var total = 0;
    for (i = 1; i <= items.length; i++) { 
        //console.log(items[i]
   
      let getPrice = document.getElementById('price').innerText;
      let getQuantity = document.getElementById('quntity').value; 
      let newQuantity=parseFloat(getQuantity.value)
       let newPrice=parseFloat(getPrice)
       newPrice= isNaN(newPrice) ? 1 :newPrice;
      newQuantity = isNaN(getQuantity) ? 1 :getQuantity;
      
      total += newPrice* newQuantity;
     } 
    document.getElementById('subTotal').innerText=total;
    document.getElementById('total').innerText=total
    
    return total;
  } 


  let plus=document.getElementById('plus') // selecting add button
      plus.addEventListener('click', function(e){
      // let clickPlus=e.target
          
    console.log(calculateForPlus())
      })
 */
/* 

      function calculate(){
		var items = document.getElementsByClassName('item');
		var total = 0;
		for (i = 1; i <= items.length; i++) {
		  let priceId = "price_"+i;
		  let quantityId = "quntity_"+i;
		  let price = document.getElementById(priceId).text;
		  let quantity = document.getElementById(quantityId).value;
		  price = isNaN(price) ? 0 : price;
		  quantity = isNaN(quantity) ? 0 : quantity;
		  
		  total += price * quantity;
		}
		document.getElementById('subTotal').innerText=total;
		document.getElementById('total').innerText=total
		
	  } */