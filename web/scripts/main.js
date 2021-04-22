const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImg = document.querySelector('img');

myImg.onclick = () => {
	let mySrc = myImg.getAttribute('src');
	if (MySrc === 'ihttps://www.humanesociety.org/sites/default/files/styles/2000x850/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=lJefJMMQ'){
		myImg.setAttribute('src','images/cat2')
	}
	
}