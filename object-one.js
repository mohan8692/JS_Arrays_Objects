var emp = {
			"empId":100,
			"empName":"Mohan",
			"empHra":1600,
			"empDa":1200,
			"empAlwnce":1250,
			"empBonus":15000,
			"empBasic":18500,
			"empIDept":"Logistics",
			"getTotalSal":function(){
							var total = emp.empHra+emp.empDa+emp.empAlwnce+emp.empBonus+emp.empBasic;
							console.log(total);
						}
	
			};
console.log(emp["empId"]);
console.log(emp["empName"]);
console.log(emp["empHra"]);
console.log(emp["empAlwnce"]);
console.log(emp["empBonus"]);
console.log(emp["empBasic"]);
console.log(emp["empIDept"]);
emp.getTotalSal();