// input and button
const inputBillAmount=document.querySelector(".input-bill");
const inputCashPaid=document.querySelector(".input-paid");
const btnConvertToChange=document.querySelector(".btn-check");



btnConvertToChange.addEventListener("click",()=>{
    const billAmount=inputBillAmount.value;
    const cashPaid=inputCashPaid.value;
    const notesArray=numberOfNotes(1000,2000);
    for(let i=0; i<8; i++){
        console.log(""+i+": "+notesArray[i]);
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

    console.log("inside the fundtion");
    for(let i=0; i<8; i++){
        console.log(""+i+": "+notesArray[i]);
    }

    return notesArray;
}

console.log("able to connect to html");