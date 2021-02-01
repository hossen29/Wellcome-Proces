const out = document.getElementById("sub");
out.addEventListener("click",function(){
    const practice = document.getElementById("input-fild");
    practice.style.display = "none";
        const tran = document.getElementById("transec");
        tran.style.display = "block";
});
//Deposit button handlar
const depositBtn = document.getElementById("dipusit-btn");
depositBtn.addEventListener("click",function(){
  
  const depositAmount = updateValue ("diposit");
  getSpanText ("balance",depositAmount);
  getSpanText ("current-deposit",depositAmount);
  document.getElementById("diposit").value = "";
})
//widhrow button handlar item
const widrowBtn = document.getElementById("widhrow-btn");
widrowBtn.addEventListener("click",function(){
   
  const widhrowNamber = updateValue ("widhrow");
  getSpanText ("current-widrom",widhrowNamber);
  getSpanText ("balance",-1*widhrowNamber);
  document.getElementById("widhrow").value = "";
})

 function updateValue (id){
  const widhrowAmount = document.getElementById(id).value;
  const widhrowNewNamber = parseFloat(widhrowAmount);
   return widhrowNewNamber;
 };

function getSpanText (id,depositAmount){
  const currentDeposit = document.getElementById(id).innerText;
  const currentAmount = parseFloat(currentDeposit);
  const total = depositAmount + currentAmount;
  document.getElementById(id).innerText = total;
};

//Wellcome text
const wellcomeText = document.getElementById("sub");
wellcomeText.addEventListener("click",function(){
  const nameText = document.getElementById("my-name").value;
  document.getElementById("wellcome-text").innerText = nameText ;
  document.getElementById("my-name").value = "";
})