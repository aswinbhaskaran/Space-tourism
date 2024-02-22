let mvisible = document.getElementById('menu-panel-visible');
let menu = document.getElementById('mob-menu');
let close = document.getElementById('mob-menu-close');

if((screen.width >= 375) && (screen.width < 768))
{
	menu.addEventListener('click', () => {
		if(mvisible.getAttribute('style') == null)
			mvisible.setAttribute('style', 'display:block');
	});
	close.addEventListener('click', () => {
		if(mvisible.getAttribute('style') != null)
			mvisible.removeAttribute('style');
	});
	if(mvisible.getAttribute('style') != null)
		document.body.addEventListener('click', () => mvisible.removeAttribute('style'));
}
