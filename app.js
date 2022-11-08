// input and button
const inputBillAmount=document.querySelector(".input-bill");
const inputCashPaid=document.querySelector(".input-paid");
const btnConvertToChange=document.querySelector(".btn-check");
const nextElement=document.querySelector(".message");
const parentElement=document.querySelector(".error-message");

console.log(nextElement);
console.log(parentElement);

btnConvertToChange.addEventListener("click",()=>{
    const billAmount=inputBillAmount.value;
    const cashPaid=inputCashPaid.value;
    const messageElement=document.createElement("div");
    
    if(cashPaid<billAmount){
        const errorTextNode=document.createTextNode("Cash Paid should be greater than or equal to Bill Amount");
        messageElement.appendChild(errorTextNode);
        parentElement.insertBefore(messageElement,nextElement);
    }else if(cashPaid<0 || billAmount<0){
        const errorTextNode=document.createTextNode("Cash Paid or Bill Amount is negative value");
        messageElement.appendChild(errorTextNode);
        parentElement.insertBefore(messageElement,nextElement);
    }else if(cashPaid==0 || billAmount==0){
        const errorTextNode=document.createTextNode("Any one of Cash Paid or Bill Amount is empty");
        messageElement.appendChild(errorTextNode);
        parentElement.insertBefore(messageElement,nextElement);
    }else{
        const successTextNode=document.createTextNode("Operation Sucessful!");
        messageElement.appendChild(successTextNode);
        parentElement.insertBefore(messageElement,nextElement);

        const notesArray=numberOfNotes(billAmount, cashPaid);
    
        for(let i=0; i<8; i++){
            const textNode = document.createTextNode(""+notesArray[i])
            document.querySelector(".notes-"+(i+1)).appendChild(textNode);
        }
    }
});

function numberOfNotes(billAmount, cashPaid){
    let amountToBeReturned=cashPaid-billAmount;
    let notesArray=[];

    for(let i=0; i<8; i++){
        notesArray[i]=0;
    }

    while(amountToBeReturned>0){
        if(amountToBeReturned>=2000){
            notesArray[0]+=1;
            amountToBeReturned-=2000;
        }else if(amountToBeReturned>=500){
            notesArray[1]+=1;
            amountToBeReturned-=500;
        }else if(amountToBeReturned>=100){
            notesArray[2]+=1;
            amountToBeReturned-=100;
        }else if(amountToBeReturned>=50){
            notesArray[3]+=1;
            amountToBeReturned-=50;
        }else if(amountToBeReturned>=20){
            notesArray[4]+=1;
            amountToBeReturned-=20;
        }else if(amountToBeReturned>=10){
            notesArray[5]+=1;
            amountToBeReturned-=10;
        }else if(amountToBeReturned>=5){
            notesArray[6]+=1;
            amountToBeReturned-=5;
        }else{
            notesArray[7]+=1;
            amountToBeReturned-=1;
        }
    }

    return notesArray;
}

console.log("able to connect to html");