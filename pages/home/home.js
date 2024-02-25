let mvisible = document.getElementById('menu-panel-visible');
let menu = document.getElementById('mob-menu');
let close = document.getElementById('mob-menu-close');
let main = document.querySelector('main');

if((document.body.scrollWidth >= 375) && (document.body.scrollWidth < 768)){	menu.addEventListener('click', () => {
		if(mvisible.getAttribute('style') == null)
			mvisible.setAttribute('style', 'display:block');	});	close.addEventListener('click', () => {
		if(mvisible.getAttribute('style') != null)			mvisible.removeAttribute('style');	});	main.addEventListener('click', () => {		if(mvisible.getAttribute('style') != null)			mvisible.removeAttribute('style');	});}