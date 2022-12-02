const salary =  parseInt(prompt("Enter salary"));
 function paye (){
    let salaryOne = parseInt(document.getElementById("input").value)
    let perc1 = firstsalary * .1
    let perc2 = firstsalary * .25
    let perc3 = firstsalary * .3
     if (firstsalary <=24000){
         document.getElementById("result").innerHTML = parseFloat(perc1).toFixed(2) 
         return  parseFloat(perc1).toFixed(2) 
     }

     else if (firstsalary>=24001 && firstsalary <=32333){
         document.getElementById("result").innerHTML =parseFloat|(perc2)
         return parseFloat|(perc2)
     }

     else if (firstsalary >= 32334){
         document.getElementById("result").innerHTML = parseFloat(perc3).toFixed(2)
         return parseFloat(perc3).toFixed(2)
 }
 }
 // Calculating NHIF deduction
 function NhifCalc() {
     let firstsalary = parseInt(document.getElementById("input").value)
     if(firstsalary<5999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 150'
     }
 
     else if(firstsalary >= 6000 && firstsalary <= 7999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 300'
     }

     else if(firstsalary >= 8000 && firstsalary <= 11999){ 
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 400'
     }

     else if(firstsalary >= 12000 && firstsalary <= 14999){ 
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 500'
     }

     else if(firstsalary >= 15000 && firstsalary <= 19999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 600'
     }

     else if(firstsalary >= 20000 && firstsalary <= 24999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 750'
     }

     else if(firstsalary >= 25000 && firstsalary <= 29999){
         document.getElementById("result").innerHTML = 'your NHIF Deduction is Ksh. 850'
     }

     else if(firstsalary >= 30000 && firstsalary <= 34999){ 
         document.getElementById("result").innerHTML = 'NHIF Deduction = Ksh. 900'
     }

     else if(firstsalary >= 35000 && firstsalary <= 39999){ 
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 950'
     }

     else if(firstsalary >= 40000 && firstsalary <= 44999){
         document.getElementById("result").innerHTML = 'NHIF Deduction = Ksh. 1000'
     }

     else if(firstsalary >= 45000 && firstsalary <= 49999){
         document.getElementById("result").innerHTML = 'your NHIF Deduction is Ksh. 1100'
     }

     else if(firstsalary >= 50000 && firstsalary <=  59999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 1200'
     }

     else if(firstsalary >= 60000 && firstsalary <= 69999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 1300'
     }

     else if( firstsalary>= 70000 && firstsalary <= 79999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 1400'
     }
     else if(firstsalary >= 80000 && firstsalary <= 89999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 1500'
     }

     else if(firstsalary >= 90000 && firstsalary <= 99999){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 1600'
     }

     else if(firstsalary >= 100000){
         document.getElementById("result").innerHTML = ' NHIF Deduction = Ksh. 1700'
     }

 }
 // Calculation of NSSF contributions according to old rates since some employers use them still.
 function NssfCal(){
     let firstsalary = parseInt(document.getElementById("input").value)
     if(firstsalary>=1){
         document.getElementById("result").innerHTML =  'NHIF Deduction = Ksh. 400'
     }
 }
 let NhifBycalc =()=>{
     let firstsalary = parseInt(document.getElementById("input").value)
     if(salaryOne<5999){
         document.getElementById("result").innerHTML = parseFloat(150 ).toFixed(2)
         return parseFloat(150 ).toFixed(2)
     }
 
     else if(firstsalary >= 6000 && firstsalary <= 7999){
         document.getElementById("result").innerHTML = parseFloat(300 ).toFixed(2)
         return parseFloat(300 ).toFixed(2)
     }

     else if(firstsalary >= 8000 && firstsalary <= 11999){ 
         document.getElementById("result").innerHTML = parseFloat(400 ).toFixed(2) 
         return parseFloat(400 ).toFixed(2)
     }

     else if(firstsalary >= 12000 && firstsalary <= 14999){ 
         document.getElementById("result").innerHTML = parseFloat(500 ).toFixed(2)
         return parseFloat(500 ).toFixed(2)
     }

     else if(firstsalary >= 15000 && firstsalary <= 19999){
         document.getElementById("result").innerHTML = parseFloat(600 ).toFixed(2)
         return parseFloat(600 ).toFixed(2)
     }

     else if(firstsalary >= 20000 && firstsalary <= 24999){
         document.getElementById("result").innerHTML = parseFloat(750 ).toFixed(2)
         return parseFloat(750 ).toFixed(2)
     }

     else if(firstsalary >= 25000 && firstsalary <= 29999){
         document.getElementById("result").innerHTML = parseFloat(850 ).toFixed(2)
         return parseFloat(850 ).toFixed(2)
     }

     else if(firstsalary >= 30000 && firstsalary <= 34999){ 
         document.getElementById("result").innerHTML = parseFloat(900 ).toFixed(2)
         return  parseFloat(900).toFixed(2)
     }

     else if(firstsalary >= 35000 && firstsalary <= 39999){ 
         document.getElementById("result").innerHTML = parseFloat(950 ).toFixed(2)
         return parseFloat(950 ).toFixed(2)
     }

     else if(firstsalary >= 40000 && firstsalary <= 44999){
         document.getElementById("result").innerHTML = parseFloat(1000).toFixed(2)
         return parseFloat(1000).toFixed(2)
     }

     else if(firstsalary >= 45000 && firstsalary <= 49999){
         document.getElementById("result").innerHTML = parseFloat(1100 ).toFixed(2)
         return parseFloat(1100 ).toFixed(2)
     }
     
     else if(firstsalary >= 50000 && firstsalary <=  59999){
         document.getElementById("result").innerHTML = parseFloat(1200 ).toFixed(2)
         return  parseFloat(200 ).toFixed(2)
     }

     else if(firstsalary >= 60000 && firstsalary <= 69999){
         document.getElementById("result").innerHTML = parseFloat(1300 ).toFixed(2)
         return parseFloat(1300 ).toFixed(2)
     }

     else if(firstsalary >= 70000 && firstsalary <= 79999){
         document.getElementById("result").innerHTML = parseFloat(1400 ).toFixed(2)
         return parseFloat(1400 ).toFixed(2)
     }

     else if(firstsalary >= 80000 && firstsalary <= 89999){
         document.getElementById("result").innerHTML = parseFloat(1500 ).toFixed(2)
         return parseFloat(1500 ).toFixed(2)
     }

     else if(firstsalary >= 90000 && firstsalary <= 99999){
         document.getElementById("result").innerHTML = parseFloat(1600 ).toFixed(2)
         return parseFloat(1600 ).toFixed(2)
     }

     else if(firstsalary >= 100000){
         document.getElementById("result").innerHTML = parseFloat(1700 ).toFixed(2)
         return  parseFloat(1700 ).toFixed(2)
 }
 return fromNet
 }
 
 function totalDed (){
     const deduc = parseInt(paye()) +parseInt(NhifBycalc())  + 400
     console.log("========payee=====",paye())
     console.log("========nhif=====",NhifBycalc())
     document.getElementById("result").innerHTML = (deduc)
 }