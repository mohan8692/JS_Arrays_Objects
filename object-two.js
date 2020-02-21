var std = {
			"stdId":1456,
			"stdName":"Mohan",
			"stdMarks":{
						"Telugu":82,
						"Hindi":80,
						"English":70,
						"Maths":90,
						"science":75,
						"social":85,
							},
			"getTotalMarks":function(){
								var total = std.stdMarks["Telugu"]+std.stdMarks["Hindi"]+std.stdMarks["English"]+std.stdMarks["Maths"]+std.stdMarks["science"]+std.stdMarks["social"];
									console.log(total);
									std.getPercentage(total);
								},
			"getPercentage":function(total){
								var percentage = (total*100)/600;
									console.log(percentage);
								}
			};
		
std.getTotalMarks();