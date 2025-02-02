        const container = document.getElementById("main");
        const resultTable = document.getElementById("result-table");
        const table = document.getElementById("table");


        //Fuction to add Subjects
        function addSub(){ 
        resultTable.innerHTML = " "; 

        const html = `
        <div  class="ctnr container-fluid d-flex flex-row m-3">
            <label for="grade" class="form-label m-2 fw-bold">Grade:</label>
            <select name="select" class="form-select grade">
                <option value="grade" selected disabled>grade</option>                
                <option value="O">O</option>                
                <option value="A+">A+</option>                
                <option value="A">A</option>                
                <option value="B+">B+</option>                
                <option value="B">B</option>                
                <option value="C">C</option>                
                <option value="U">U</option>                
            </select>
            <label for="credit" class="form-label m-2 fw-bold">Credit:</label>
            <select name="credit" class="form-select credit">
                <option value="credit" selected disabled>credit</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
         </div>`;
         const temp = document.createElement("div");
         temp.innerHTML = html
         container.appendChild(temp)        
        }
        
        //Fuction to remove a subject
        function removeSub(){
            const subList = document.querySelectorAll(".ctnr");
            if(subList.length > 0){
            subList[subList.length - 1].remove();
        }}
    
        //Function to calculate
        function calculate(){
            resultTable.innerHTML = " "; 
            let gradeArray = [];
            let creditArray = [];
            let gpa = 0;
            let totalCredit = 0;

            const resetbtn = document.getElementById("reset-btn");
            const resdiv = document.getElementById("result-div");
            const selectedGrade = document.querySelectorAll(".grade");
            const selectedCredit = document.querySelectorAll(".credit");
            
            for(let i=0;i<selectedGrade.length;i++){
            if(selectedGrade[i].value === "grade" || selectedCredit[i].value === "credit"){
                resdiv.innerHTML = `<h2 class="container w-75 rounded text-danger p-2  text-center fw-bold bg-warning">Select Grade and Credit</h2>`
                resdiv.style.display = "block";
                return;
            }}
            //Greade values
            selectedGrade.forEach((value)=>{
                let val = value.value;
                switch(val){
                    case "O":
                        gradeArray.push(10);
                        break;
                    case "A+":
                        gradeArray.push(9);
                        break;
                    case "A":
                        gradeArray.push(8);
                        break;
                    case "B+":
                        gradeArray.push(7);
                        break;
                    case "B":
                        gradeArray.push(6);
                        break;
                    case "C":
                        gradeArray.push(5);
                        break;
                    case "U":
                        gradeArray.push(0);
                        break;
                    default:
                        gradeArray.push(0);
                        break;
                }           
            });
           
            //Credit values
            selectedCredit.forEach((credit) => {
                creditArray.push(Number(credit.value));
            });

           //gpa calculation
            for(let i=0;i<gradeArray.length; i++){
                gpa += gradeArray[i] * creditArray[i];
                totalCredit += creditArray[i];
            }
            const totGpa = gpa / totalCredit;
            
            //display table
            table.style.display = "block";
            for(let i=0;i<gradeArray.length;i++){
                resultTable.innerHTML += 
               `<tr><td>Subject ${i+1}</td>    
                <td>${selectedGrade[i].value}</td>
                <td>${gradeArray[i]}</td>
                <td>${creditArray[i]}</td>
                </tr>`

            }

        //Display result
        resdiv.innerHTML = `<h2 class="container w-75 rounded text-light p-2 text-center fw-bold bg-success">Your GPA is ${totGpa.toFixed(3)}</h2>`
        resdiv.style.display = "block";

        //Reset
        resetbtn.style.display = "block";
        resetbtn.addEventListener("click", reset);
        
        function reset() {
            resultTable.innerHTML = "";
            resdiv.innerHTML = "";
            
            gpa = 0;
            totalCredit = 0;
            creditArray = [];
            gradeArray = [];
            
            document.querySelectorAll(".grade").forEach((el) => (el.value = "grade"));
            document.querySelectorAll(".credit").forEach((el) => (el.value = "credit"));
        
            table.style.display = "none";
            resdiv.style.display = "none";
            resetbtn.style.display = "none";
        }
        
    }
        
    

    