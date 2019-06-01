class T{
	constructor(){
		let that=this;
		
	}
	viewH(){
				let windowH=window.innerHeight;
				let header=document.querySelector('.header').offsetHeight;
				let footer=document.querySelector('.footer').offsetHeight;
				document.querySelector('.contentBody').style.height=(windowH-header-footer)+'px';
				
	}
	onlyBheader(){
		let windowH=window.innerHeight;
		let header=document.querySelector('.bheader').offsetHeight;
		document.querySelector('.contentBody').style.height=(windowH-header)+'px';
		
	}
}
export{T}