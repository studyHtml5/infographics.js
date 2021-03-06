"use strict";
/*
* 추상 클래스 참조하기 http://mohwaproject.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%B6%94%EC%83%81-%ED%81%B4%EB%9E%98%EC%8A%A4-%EA%B5%AC%ED%98%84
* 기본 pattern 은 builder 패턴을 적용하되 init 이나 destory 같은 펑션에서는 체이닝을 허용하지 않는다.
*/

/**
* version 0.0.1 2015.06.30
* version 1 은 milestone1 의 목표에 따라 빌드함.
* milestone  달성 후 code review 가 필요함.
*/
const rootClassName = 'info-root';

var INFOGRAPHICS = INFOGRAPHICS || new Infographics();

function Infographics (){
	//const rootClassName = 'info-root';
	var root;
	var ticks;
	var data;

	//size definition
	var XXL, XL, L, M, S, XS, XXS; 
};

/*
*  Initialize Infographics.js 
*  find Element with classname ".infographics_playground"
*/
Infographics.prototype.init = function(){
	try{
		//caution : document.getElementsByClassName returns Node List, not Element
		//link reference : http://stackoverflow.com/questions/17896746/document-getelementsbyclassname-innerhtml-always-returns-undefined
		this.root = document.getElementsByClassName(rootClassName)[0];
		console.log(this.root);

		if(!this.validate(this.root)) {
			console.log('can not initiate Infographics.js');
			return;
		}

		//=== DO TEST
		this.helloWorld();
	}catch(exception){
		console.log('An Exception has occured. ', exception);
	}
};

Infographics.prototype.validate = function(param){
	var ret = true;
	if(param == null || typeof param == 'undefined'){
		ret = false;
	}
	return ret;
};

Infographics.prototype.setData = function(object) {

}

Infographics.prototype.loadDefaultData = function(type){
	switch(type){
		case 'month':
			this.ticks = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
			break;
		default:
	}
	console.log(this.ticks);
}

//============== Laoding data from csv, excel

Infographics.prototype.addFileData = function(filename){
	//extract file extension

	var extension = filename.lastIndexOf('.');

}


Infographics.prototype.validateFileString = function(fileStr){
	// EveryString should contains .XXX(extension)
	var ret = true;
}


///============== This functions for test

Infographics.prototype.helloWorld = function(){
	var test_msg = "Hello, Infographics";
		this.root.innerHTML = test_msg;
}