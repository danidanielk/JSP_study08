function bmiCheck(){
	let nameBox = document.bmiForm.name;
	let heightBox = document.bmiform.height;
	let weightBox = document.bmiForm.weight;
	let photoBox = document.bmiForm.photo;
	
	if(isEmpty(nameBox)|| atLeastLetter(nameBox,2)){
		alert("please Fill in your Name Properly.");
		nameBox.value = "";
		nemeBox.focus();
		return false;
		
		
	}else if (isEmpty(heightBox)|| isNotNumber(heightBox)||atLeastLetter(heightBox,3)){
		alert("please Fill in Your Height Properly.");
		heightBox.value="";
		heightBox.focus();
		return false;
	}else if (isEmpty(weightBox)||isNotNumber(weightBox)||atLeastLetter(weightBox,3)){
		alert("please Fill in Your Weight Properly.");
		weightBox.value = "";
		weightBox.focus();
		return false;
	}else if (isEmpty(photoBox)||(isNotType(photoBox,"png")&& isNotType(photoBox,"gif")
			&& inNotType(photoBox,"jpg")&& isNotType(photoBox,"bmp"))){
		alert("Please Fill in Photo Properly.");
		photoBox.value= "";
		photoBox.focus();
		return false;
	}
	return ture;
}	