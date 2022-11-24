// input and button
const inputBillAmount=document.querySelector(".input-bill");
const inputCashPaid=document.querySelector(".input-paid");
const btnConvertToChange=document.querySelector(".btn-check");
const message=document.querySelector(".message");

btnConvertToChange.addEventListener("click",()=>{
    const billAmount=Number.parseInt(inputBillAmount.value);
    const cashPaid=Number.parseInt(inputCashPaid.value);
    
    message.style.display="none";
    for(let i=0; i<8; i++){
        const rowElement=document.querySelector(".notes-"+(i+1));
        rowElement.innerHTML=""+0;
    
    }

    if(cashPaid<billAmount){
        showMessage("Cash Paid should be greater than or equal to Bill Amount",false);
    }else if(cashPaid<0 || billAmount<0){
        showMessage("Cash Paid or Bill Amount is negative value",false)
    }else if(cashPaid==0 || billAmount==0){
        showMessage("Any one of Cash Paid or Bill Amount is empty",false);
    }else{
        showMessage("Operation Sucessful!",true);

        let notesArray=numberOfNotes(billAmount, cashPaid); 
        for(let i=0; i<8; i++){
            console.log(i+": "+ notesArray[i]);
            const rowElement=document.querySelector(".notes-"+(i+1));
            rowElement.innerHTML=""+notesArray[i];
        }
    }
});

function numberOfNotes(billAmount, cashPaid){
    let amountToBeReturned=cashPaid-billAmount;
    let notesArray=[];

    for(let i=0; i<8; i++){
        notesArray[i]=0;
    }
    console.log("In the function: ");
    while(amountToBeReturned>0){
        if(amountToBeReturned>=2000){
            notesArray[0]+=1;
            amountToBeReturned-=2000;
            console.log(amountToBeReturned);
        }else if(amountToBeReturned>=500){
            notesArray[1]+=1;
            amountToBeReturned-=500;
            console.log(amountToBeReturned);
        }else if(amountToBeReturned>=100){
            notesArray[2]+=1;
            amountToBeReturned-=100;
            console.log(amountToBeReturned);
        }else if(amountToBeReturned>=50){
            notesArray[3]+=1;
            amountToBeReturned-=50;
            console.log(amountToBeReturned);
        }else if(amountToBeReturned>=20){
            notesArray[4]+=1;
            amountToBeReturned-=20;
            console.log(amountToBeReturned);
        }else if(amountToBeReturned>=10){
            notesArray[5]+=1;
            amountToBeReturned-=10;
            console.log(amountToBeReturned);
        }else if(amountToBeReturned>=5){
            notesArray[6]+=1;
            amountToBeReturned-=5;
            console.log(amountToBeReturned);
        }else{
            notesArray[7]+=1;
            amountToBeReturned-=1;
            console.log(amountToBeReturned);
        }
    }

    return notesArray;
}

function showMessage(textMessage, messageType){
    message.style.display="block";
    message.style.textAlign="center"
    message.style.paddingTop="0.5rem";
    message.style.paddingBottom="0.5rem"
    message.innerText=textMessage;
    message.style.color="#f7fafc";
    message.style.borderRadius="1rem";
    if(messageType){
        message.style.backgroundColor="#16a34a";
    }else{
        message.style.backgroundColor="#dc2626";
    }
}
