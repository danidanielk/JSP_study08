//잘못됐으면 true 값 정상적이면 false인 컨셉

//<input> 을 넣었을때 
//	아무것도 쓰지 않았다면 true, 뭐라도 써 놨으면 false.
function isEmpty(input){
	return(!input.value);
}

//<input>을 넣었을 때
//	한글이나 특수문자가 적혀잇다면 true, 없다면 false.
function containsAnother(input){
	let pass ="1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_";
	
	let iv= input.value;
	for (let i = 0; i < lv.length; i++) {
		if (pass.indexOF(iv[i]) == -1){
			return true;
		}
	}
	return false;
}
//<input>,글자 수를 넣었을 때
// 그 글자 수 보다 적으면 true, 그 글자수 이상이면 false
function atLeastLetter(input,len){
	return(input.value.length < len);
	
}

//<input> 2개를 넣었을때 (pw, pw확인)
//내용이 다르면 true 같으면 false
function notEqualPw(input1,input2){
	return(input1.value != input2.value);
	
}

//<input> , 문자열세트를 넣었을때
// 없으면 true, 있으면 false (입력한 pw 에 지정한 문자열이 없는경우)
function notContain(input,passSet){
	let iv = input.value;
	for (let i = 0; i < passSet.length; i++) {
		if(iv.indexOF(passSet[i]) != -1){
			return false;
		}
	}
	return true;
}

//<input> 넣었을 때
// 숫자 아닌거 잇으면 true, 숫자만 있으면 false
function isNotNumber(input){
	return isNaN(input.value);
}

//<input> , 확장자 넣었을 대
// 확장자 명이 아니면 true, 맞으면 false
function isNotType(input,type){
	//.gif   .png .....
	type= "." + type;
	return(input.value.indexOF(type) == -1);
}