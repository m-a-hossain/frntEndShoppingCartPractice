const remove= document.getElementById('remove')
remove.addEventListener('click',function(){
  document.getElementById('phon-row').remove()

})
  



//functional way
function handleProductChange(product,isIncrease){
  const phoneInput=document.getElementById(product + '-value')
  const phoneCount = parseInt(phoneInput.value)
 
  if(isIncrease == true){
    phoneNewCount = phoneCount+ 1
  }
  if(isIncrease == false && phoneCount > 0){
    phoneNewCount = phoneCount -1
  }
  phoneInput.value =phoneNewCount
  //console.log(phoneNewCount)
  //const phonTotal= phoneNewCount * 1219
  let phonTotal =0
  if(product== 'phon'){
     phonTotal= phoneNewCount * 1219
  }
  if(product == 'case'){
    phonTotal= phoneNewCount * 59
  }
  const newPhoneCount= document.getElementById(product+'-price').innerText = phonTotal

  calculateTotal()
}

function calculateTotal(){
  const phonVal= document.getElementById('phon-value')
  const phoneCountValue= parseInt(phonVal.value)

  const caseVal= document.getElementById('case-value')
  const caseCountValue=parseInt(caseVal.value)

  const toTal = phoneCountValue * 1219 + caseCountValue *59
  document.getElementById('subTotal').innerText = toTal

  const tax=Math.round(toTal * 0.1)

  document.getElementById('tax').innerText = tax
  const grandTotal= toTal + tax

 document.getElementById('total').innerText =grandTotal
}
/* document.getElementById('case-increase').addEventListener('click',function(){
  handleProductChange(true);// a onClick event
})

document.getElementById('case-decrease').addEventListener('click', function(){
  handleProductChange(false); //a onClick event
}) */
/* 
function handlePhoneChange(isIncrease){
        const phoneInput=document.getElementById('phon-value')
        const phoneCount = parseInt(phoneInput.value)
       
        if(isIncrease == true){
          phoneNewCount = phoneCount+ 1
        }
        if(isIncrease == false && phoneCount > 0){
          phoneNewCount = phoneCount -1
        }
        phoneInput.value =phoneNewCount
        //console.log(phoneNewCount)
        const phonTotal= phoneNewCount * 1219
        const newPhoneCount= document.getElementById('phon-price').innerText = phonTotal
}

function handleProductChange(isIncrease){
        const caseInput=document.getElementById('case-value')
        const caseCount = parseInt(caseInput.value)
          //const caseNewCount= caseCount+ 1 
        if(isIncrease == true){
          caseNewCount = caseCount+ 1
        }
        if(isIncrease == false && caseCount > 0){
          caseNewCount = caseCount -1
        }
        caseInput.value =caseNewCount
         
        const caseTotal= caseNewCount * 59
        const newCaseCount= document.getElementById('case_price').innerText =caseTotal
    
}
 */

// row code 
// document.getElementById('case-increase').addEventListener('click',function(){
//   //console.log('clicked')
//   const caseInput=document.getElementById('case-value')
//   const caseCount = parseInt(caseInput.value)
//   const caseNewCount= caseCount+ 1
//   caseInput.value =caseNewCount
//   //console.log(caseNewCount)
//   const caseTotal= caseNewCount * 59
//   const newCaseCount= document.getElementById('case_price').innerText =caseTotal
  
// })
// document.getElementById('case-decrease').addEventListener('click', function(){
//   const caseInput =document.getElementById('case-value')
//   const caseCount= parseInt(caseInput.value)
//   const caseNewCount= caseCount - 1
//   caseInput.value = caseNewCount
//   const caseTotal = caseNewCount *59
//   const newCaseCount =document.getElementById('case_price').innerText= caseTotal
// })



























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