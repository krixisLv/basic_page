//Setting default comment box text
$(document).ready(function(){
	$("#comment").click(function(){
		this.innerHTML="";
	});

}); 
var invalid="invalid";
var valid1=1;
var valid2=1;
var valid3=1;
var valid4=1;
function validate(form){
	//Validating name
	var name=form.name.value;
	if(name!=""){
		valid1=true;
		for(var i=0; i<name.length; i++){
			if(name[i]>='0' && name[i]<='9'){
				valid1=false;
				form.name.className +=" "+invalid;
			}
		}
		if(valid1==true)form.name.className="";
	}
	else {
		form.name.className +=" "+invalid;
		valid1=false;
	}
	//Validating birth date
	var birth=form.birth.value;
	if(birth.length==10){
		valid2=true;
		var pattern = /^\d{2}\/\d{2}\/\d{4}$/;
		if(birth.search(pattern)==-1)valid2=false;
		else{
			var day= birth[0]+birth[1];
			var month= birth[3]+birth[4];
			var year= birth[6]+birth[7]+birth[8]+birth[9];
			parseInt(day);
			parseInt(month);
			parseInt(year);
			if(day>31 || day<1 || month>12 || month<1 || year>2002 || year<1912)valid2=false;
			else valid2=true;
		}
		if(valid2==true)form.birth.className="";
		else {
			form.birth.className +=" "+invalid;
			valid2=false;
		}
	}
	else {
		form.birth.className +=" "+invalid;
		valid2=false;
	}
	//Validating email
	var email=form.email.value;
	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(email.search(pattern)==-1){
		valid3=false;
		form.email.className +=" "+invalid;
	}
	else{
		valid3=true;
		form.email.className="";
	}
	//Validating comment area
	var comment=form.comment.value;
	if(comment.length==0 || comment=="Your comment here!"){
		valid4=false;
		form.comment.className +=" "+invalid;
	}
	else{
		valid4=true;
		form.comment.className="";
	}
	if(!valid1 || !valid2 || !valid3 || !valid4)return false;
	else return true;
};