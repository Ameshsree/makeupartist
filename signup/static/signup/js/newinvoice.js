var taxsum=[];

let submit = document.querySelector('button[type="submit"]');
var igst=document.getElementsByClassName('igst');
var combine=document.getElementsByClassName('combine');
var sum= document.getElementById('sum');
var val = document.getElementsByName("gst");

var sumQuantity= document.getElementById('sumQuantity')
var x = document.getElementById("snackbar");

let serviceDetails = document.getElementById('serviceDetails');
let add = serviceDetails.querySelector('button[name="add"]');
var finalDescription= document.getElementsByClassName('finalDescription');
var description=document.getElementsByClassName('description');
var inputs= document.querySelectorAll('input[required]');
var tableBody=document.getElementById('tableBody');
let tableCreated=document.getElementsByClassName('tableCreated');
var finalQuantity=document.getElementsByClassName('finalQuantity');
var quantity=document.getElementsByClassName('quantity');
var finalPrice= document.getElementsByClassName('finalPrice');
var price= document.getElementsByClassName('price');
var finalAmount=document.getElementsByClassName('finalAmount');
var signature=document.getElementById('signature');
var signatureOutput=document.getElementById('signatureOutput');
var logo=document.getElementById('logo');
var logoOutput=document.getElementById('logoOutput');
var printwithtax=document.getElementById('printwithtax');
var totTax=document.getElementById('totTax');

console.log(description.length);
console.log(val.length);

// val.addEventListener("change", changeVal);

// function changeVal(){
//   var value = val.options[val.selectedIndex].value;
//   console.log(value);
// }


// changeVal();

//adding to gst 



function displayNone(arg){
    Array.from(arg).forEach(value=>{
        value.style.display="none"
    })
}
function displayOn(arg){
    Array.from(arg).forEach(value=>{
        value.style.display=''
    })
}
displayNone(igst);
//user info
var userName= document.getElementById('userName');
var userTel= document.getElementById('userTel');
var userEmail=document.getElementById('userEmail');
var userGst= document.getElementById('userGst');
var userAdd=document.getElementById('userAddress');
var userDate= document.getElementById('userDate');
var userInvoice=document.getElementById('userInvoice');
//party info
var billTo=document.getElementById('billTo');
var addTo=document.getElementById('addTo');
var numberTo=document.getElementById('numberTo');
var gstTo=document.getElementById('gstTo')

//bank info
var nameAndBranch=document.getElementById('nameAndBranch');
var accountNo=document.getElementById('accountNo');
var ifscCode=document.getElementById('ifscCode');
//uploading signature
signature.addEventListener('change',event=> {
    signatureOutput.innerHTML=`<img width="200" src="${URL.createObjectURL(event.target.files[0])}">
                               <p>Authorised by:</p>
                <br>
                <br>
                <p style="text-align:center">Managed by HOBNOB</p>`    
    
});

logo.addEventListener('change',event=> {
    logoOutput.innerHTML=`<img width="200" src="${URL.createObjectURL(event.target.files[0])}">`
                               
                   
    
});


submit.addEventListener('click', (event) => {
    event.preventDefault()  
    
   
  

    //checking input fields
    document.querySelectorAll('[required]').forEach((element,value)=>{
        
      if(element.value==0){
          console.log(element.value)
         x.className="show"
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
    })
    
    
    let allAreFilled = true; 
   
    //user info fetch
    var name = document.getElementById('inputName').value;
    var phoneNumber= document.getElementById('inputNumber').value;
    var email=document.getElementById('inputEmail').value;
    var gst= document.getElementById('inputGstinNum').value;
    var Address= document.getElementById('inputAddress').value;
    // var date=document.getElementById('inputDate').value;
    var invoice=document.getElementById('inputInvoice').value;
    
    userName.innerText=`Name: ${name}`
    userTel.innerText=`Tel: ${phoneNumber}`
    userEmail.innerText=`E-mail: ${email}`
    userGst.innerText=`GstIn: ${gst}`
    userAdd.innerText=`Address: ${Address}`
    userDate.innerText=`Date of Invoice: ${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`
    userInvoice.innerText=`Invoice No: ${invoice}`

    //party info fetch
    var partyName= document.getElementById('partyName').value;
    var partyNumber=document.getElementById('partyNumber').value;
    var partyGstin=document.getElementById('partyGstin').value;
    var partyAdd=document.getElementById('partyAdd').value;

    billTo.innerText=`${partyName}`
    addTo.innerText=`${partyAdd}`
    numberTo.innerText=`Party Mobile no: ${partyNumber}`
    gstTo.innerText=`GSTIN/UIN: ${partyGstin}`

    //bank info fetch
    var bankName= document.getElementById('bankName').value;
    var bankBranch= document.getElementById('bankBranch').value;
    var bankAcc= document.getElementById('bankAcc').value;
    var bankCode= document.getElementById('bankCode').value;

    nameAndBranch.innerHTML=`Bank name and Branch:${bankName} and ${bankBranch}`
    accountNo.innerText=`Account no: ${bankAcc}`
    ifscCode.innerText=`IFSC code: ${bankCode}`

//adding to the table
   //description

    for(var j=0;j<description.length;j++){
        
        for(var i=0;i<finalDescription.length;i++){
            finalDescription[j].innerText=description[j].value;
        }
        }

 
     //price
    for(var j=0;j<price.length;j++){
    
        for(var i=0;i<finalPrice.length;i++){
            finalPrice[j].innerText=price[j].value;
            
        }
        }

     //taxsum
    for(var j=0;j<val.length;j++){
       
        for(var i=0;i<val.length;i++){

            var Val=parseFloat(val[j].value);
            if (Val>2)
            {
                Val=1+(Val/100);
            }

            var rounded=Math.round((price[j].value*parseFloat(Val).toFixed(2)))
            console.log(rounded);
            taxsum[j]=rounded

            
        }
        }

  

 

    
//total
var totalSum=0;
Array.from(finalPrice).forEach((element,value)=>{
    
    totalSum+=parseFloat(element.innerText)
    
})

var roundNum= Math.round(totalSum.toFixed(2))
sum.innerHTML="<b>&#8377; " + roundNum + "</b>"

//total
var totaltaxSum=0;
for(var i=0;i<taxsum.length;i++)
{
    totaltaxSum=totaltaxSum+taxsum[i];
}

    

var roundNumber= Math.round(totaltaxSum.toFixed(2));
printwithtax.innerHTML="<b>&#8377; "+roundNumber+"</b>"


var diff=roundNumber-roundNum;
totTax.innerHTML="<b>&#8377; "+diff+"</b>"
totTax.style.marginRight="10px"

//total quantity 
var totalQuantity=0;
Array.from(finalQuantity).forEach((element,value)=>{
    
    totalQuantity+=parseFloat(element.innerText)
    
});



//num to words
// numToWord.innerText=inWords(roundNum)
// numToWord2.innerText=inWords(roundNumber)
// numToWord3.innerText=inWords(diff)


// sumQuantity.innerHTML=`Total quantity:- ${totalQuantity.toFixed(2)}</b>`

//comparing gst
var splitUserGst=gst.split("");
var splitPartyGst=partyGstin.split("")

if(splitUserGst[0]===splitPartyGst[0] && splitUserGst[1]===splitPartyGst[1]){
    console.log('same')
    displayNone(igst);
    displayOn(combine)
    
}else{
    console.log('not same')
    displayOn(igst)
    displayNone(combine)
    
    
}
    //check for empty rows
Array.from(tableCreated).forEach((element,index)=>{

    
    if(element.children[1].innerText=="" && index>0){
        console.log(element.parentElement)
        element.parentNode.removeChild(element)
    }
})
        
    
    
})




add.addEventListener('click', () => {
    
    let serviceEl = document.createElement('div')
    serviceEl.className = 'form-row serviceInputs'
    let service = `
<div class="col-md-6 mb-3">
    <label>Description*</label>
    <input type="text" class="form-control description" required>
</div>

<div class="col-md-2 mb-3" style="margin-left: 10px;">
    <label>Total Amount*</label>
    <input type="number" class="form-control price" required>
</div>
   <div class="col-md-2 mb-3">
                    <label class ="gst" for="gst">Choose GST*</label>

                    <select  name="gst" id="gst">
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                    </select>
                </div>
<div class="col-md-2 mb-3">     
    <label>Remove</label>   
    <br> 
        <button type="button" name="remove" class="btn btn-danger"><i name="remove" class="far fa-trash-alt"></i></button>      
</div>`
    serviceEl.innerHTML = service
    serviceDetails.append(serviceEl)
    
    let additionalTable = document.createElement('tr');
    additionalTable.className='tableCreated'
    let table=`
                        <th scope="row">${tableCreated.length+1}</th>
                        <td class="finalDescription"></td>
                        <td class="finalPrice"></td>
                        
                        
                        
    `
    additionalTable.innerHTML=table
    tableBody.append(additionalTable)


    let remove = serviceDetails.getElementsByClassName('btn-danger')
    
    Array.from(remove).forEach((element,index) => {
        element.addEventListener('click', (event) => {
            console.log(index)
            element.parentElement.parentElement.remove()
            //make the corresponding row value 0
            Array.from(finalDescription).forEach((value,pos)=>{
                finalDescription[index+1].parentElement.parentNode.removeChild(finalDescription[index+1].parentElement)
            })
       
        })
    
    })

})


document.querySelector('input[type="file"]')
    .addEventListener('change', function(){
        if (this.files && this.files[0]) {
            let img = document.querySelector('img')
            img.src = URL.createObjectURL(this.files[0])

        }
    })

//adding info to gst form


  //download pdf

