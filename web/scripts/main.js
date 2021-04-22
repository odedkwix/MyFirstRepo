const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImg = document.querySelector('img');

myImg.onclick = function () {
	let mySrc = myImg.getAttribute('src');
	if (MySrc === 'ihttps://www.humanesociety.org/sites/default/files/styles/2000x850/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=lJefJMMQ'){
		myImg.setAttribute('src','https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop');
	}
	
}