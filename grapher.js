window.onload = function(){
	var values = document.getElementsByTagName("input");//autofill for titles
	for(var i=0;i<5;i++){
			values[i].defaultValue="Nosaukums";
	}
	var button=document.getElementById("runCommand");
	var drag=document.getElementById("drag");
	drag.value=0;
	document.getElementById("value").innerHTML = 0;
	var max;
	function validate(values){
		for(var i=0;i<5;i++){
			if(values[i].value==null || values[i].value==""){
				values[i].className = 'warning';
			}
			else values[i].className = '';
		}
		for(var i=5;i<10;i++){
			if(isNaN(values[i].value)|| values[i].value==null || values[i].value=="" || values[i].value<0){
				values[i].className = 'warning';
			}
			else values[i].className = '';
		}
		max = Math.max(values[5].value,values[6].value,values[7].value,values[8].value,values[9].value);
		return true;
	}
	button.onclick = function(){
		drag.value=100;
		document.getElementById("value").innerHTML = drag.value;
		var values = document.getElementsByTagName("input");
		if(validate(values)){
			var canvas = document.getElementById("graph");
			var context = canvas.getContext("2d");
			canvas.width = canvas.width;//clearing the canvas
			if(max>10 && max<=2500)
				max=Math.ceil(max/Math.pow(10,1+Math.round((max/100)/10)))*Math.pow(10,1+Math.round((max/100)/10));
			else if(max>2500)
				max=Math.ceil(max/Math.pow(10,3))*Math.pow(10,3);
				
			context.lineWidth = 1;
			context.strokeStyle = "black";
			context.moveTo(50, 350);// position the drawing cursor
			context.lineTo(canvas.width - 20, 350);// draw the line
			context.stroke();// make the line visible with the stroke color
			context.moveTo(50, 350);
			context.lineTo(50, 30);
			context.stroke();

			for(var i=1;i<8;i++){
				context.moveTo(46, 50*i);
				context.lineTo(canvas.width - 20, 50*i);
				context.stroke();
			}
			context.font = "10pt ArialNarrow";
			context.fillStyle = "black";
			context.textAlign = "right";
			context.textBaseline = "top";
			var step=(300/250)*max/6;
			for(var i=0;i<7;i++){
				var num=i*step;
				num=num.toFixed(3);
				if(max>10)
					num=parseInt(num);
				context.fillText(num, 45, 350-10-(50*i));
			}
			context.textAlign = "center";
			var step=100;
			for(var i=0;i<5;i++){
				context.fillText(values[i].value, 120+i*100, 355);
			}
			step=250/max;
			for(var i=0;i<5;i++){
				var x=80+(i*100);
				height=(-1)*(values[i+5].value)*step;
				context.rect(x, 350, 80, height);
				context.fillStyle = "#9E6";
				context.fill();
				context.lineWidth = 1;
				context.strokeStyle = "grey";
				context.stroke();
			}
		}
	}
	drag.onchange = function(){
		document.getElementById("value").innerHTML = drag.value;
		var values = document.getElementsByTagName("input");
		if(validate(values)){
			var canvas = document.getElementById("graph");
			var context = canvas.getContext("2d");
			canvas.width = canvas.width;//clearing the canvas
			if(max>10 && max<=2500)
				max=Math.ceil(max/Math.pow(10,1+Math.round((max/100)/10)))*Math.pow(10,1+Math.round((max/100)/10));
			else if(max>2500)
				max=Math.ceil(max/Math.pow(10,3))*Math.pow(10,3);
			context.lineWidth = 1;
			context.strokeStyle = "black";
			context.moveTo(50, 350);// position the drawing cursor
			context.lineTo(canvas.width - 20, 350);// draw the line
			context.stroke();// make the line visible with the stroke color
			context.moveTo(50, 350);
			context.lineTo(50, 30);
			context.stroke();

			for(var i=1;i<8;i++){
				context.moveTo(46, 50*i);
				context.lineTo(canvas.width - 20, 50*i);
				context.stroke();
			}
			context.font = "10pt ArialNarrow";
			context.fillStyle = "black";
			context.textAlign = "right";
			context.textBaseline = "top";
			var step=(300/250)*max/6;
			for(var i=0;i<7;i++){
				var num=i*step;
				num=num.toFixed(3);
				if(max>10)
					num=parseInt(num);
				context.fillText(num, 45, 350-10-(50*i));
			}
			context.textAlign = "center";
			var step=100;
			for(var i=0;i<5;i++){
				context.fillText(values[i].value, 120+i*100, 355);
			}
			max = max / drag.value * 100;
			step=250/max;
			for(var i=0;i<5;i++){
				var x=80+(i*100);
				height=(-1)*(values[i+5].value)*step;
				context.rect(x, 350, 80, height);
				context.fillStyle = "#9E6";
				context.fill();
				context.lineWidth = 1;
				context.strokeStyle = "grey";
				context.stroke();
			}
		}
	}
}