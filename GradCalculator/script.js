const results = () =>{
    const physics = document.getElementById('physics').value;
    const physicsNum = parseFloat(physics);
    const maths = document.getElementById('maths').value;
    const mathsNum = parseFloat(maths);
    const chemistry = document.getElementById('chemistry').value;
    const chemistryNum = parseFloat(chemistry)
    const biology = document.getElementById('biology').value;
    const biologyNum = parseFloat(biology)
    let grades = "";
  
    let totalGrades = physicsNum + mathsNum + chemistryNum + biologyNum;  // total marks
  
  if (physics == 0 || maths == 0 || chemistry == 0 || biology == 0) {
      alert('please Enter Your marks Then click Submit button');
  } else if(physicsNum >=33 && mathsNum >=33 && chemistryNum >= 33 && biologyNum >=33) {
  const showBox = document.getElementById('showBox');
          showBox.style.display ='block';
  
  
    let percentage = (totalGrades/400) * 100;     // get percentage
  //grade colletion
    if(percentage >= 90  && percentage >= 100){
      grades = 'A+';
    }else if(percentage >= 80  && percentage <= 89){
       grades = 'A';
    }else if(percentage >= 70  && percentage <= 79){
       grades = 'A-';
    }else if(percentage >= 60  && percentage <= 69){
      grades = 'B';
   }else if(percentage >= 50  && percentage <= 59){
      grades = 'C';
   }else if(percentage >= 40  && percentage <= 49){
      grades = 'D';
   }else if(percentage >= 33  && percentage <= 39){
      grades = 'E';
   }else if(percentage < 33){
    grades = 'F';
  }
   else{
       grades = 'F';
    }
  
    if(percentage >= 33){
      // document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Pass. `
      document.getElementById('showData').innerHTML =  'You are Pass.';
      getResult();
    }
    else{
      // document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail. `
      document.getElementById('showData').innerHTML =  'You are Fail.';
      getResult();
  
    }
    function getResult(){
      document.getElementById('getTotal').innerText = 'Out of 400 your total is ' + totalGrades;
      document.getElementById('getPercentage').innerText = 'percentage is' + ' ' + percentage + ' %';
      document.getElementById('getGrade').innerText = 'Your grade is' + ' ' + grades;
    }
    } 
    if(physicsNum < 33 || mathsNum < 33 || chemistryNum < 33 || biologyNum < 33){ // else if
      const showBox = document.getElementById('showBox');
      showBox.style.display ='block';
      document.getElementById('showData').innerHTML =  'You are Fail.';
      document.getElementById('getTotal').innerText = 'Out of 400 your total is ' + totalGrades;
      document.getElementById('getPercentage').innerText = 'You are Fail';
      document.getElementById('getGrade').innerText = 'You are Fail';
    } 
  };