var emp = [{"eid":1001,"ename":"Mohan","ehra":400,"eda":500,"eallwnce":2000,"ebonus":1500,"ebasic":16500,"edept":"Logistics","getsalary":function(){var total = emp[0].ehra+emp[0].eda+				emp[0].eallwnce+emp[0].ebonus+emp[0].ebasic;console.log(total);}},
			{"eid":1002,"ename":"Naresh","ehra":500,"eda":600,"eallwnce":3000,"ebonus":1600,"ebasic":17500,"edept":"Frentend","getsalary":function(){var total = emp[1].ehra+emp[1].eda+emp[1].eallwnce+emp[1].ebonus+emp[1].ebasic;console.log(total);}},
			{"eid":1003,"ename":"Kishore","ehra":600,"eda":700,"eallwnce":3000,"ebonus":1700,"ebasic":18500,"edept":"Backend","getsalary":function(){var total = emp[2].ehra+emp[2].eda+emp[2].eallwnce+emp[2].ebonus+emp[2].ebasic;console.log(total);}}];
			
employeeDetails();
function employeeDetails(){
	str = '';
	for(var i=0;i<emp.length;i++){
		str+='<div>Employee['+i+'] ID -'+emp[i].eid+'</div>';
		str+='<div>Employee['+i+'] name -'+emp[i].ename+'</div>';
		str+='<div>Employee['+i+'] ehra -'+emp[i].ehra+'</div>';
		str+='<div>Employee['+i+'] eda -'+emp[i].eda+'</div>';
		str+='<div>Employee['+i+'] eallwnce -'+emp[i].eallwnce+'</div>';
		str+='<div>Employee['+i+'] ID -'+emp[i].ebasic+'</div>';
		str+='<div>Employee['+i+'] ebasic -'+emp[i].eid+'</div>';
		str+='<div>Employee['+i+'] edept -'+emp[i].edept+'</div>';
		str+='<hr>';
	document.getElementById("object_Example").innerHTML = str;
	emp[i].getsalary();
	}
}
	

