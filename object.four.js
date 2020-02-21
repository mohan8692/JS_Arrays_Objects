var ebill = {
				"ser_no":14258693,
				"UID_no":78963542,
				"no_of_units":256,
				"unit_cost":3.456,
				"gettTotalBill":function(){
									var total = ebill.no_of_units*ebill.unit_cost;
									console.log(total);
								}
				};
ebill.gettTotalBill();