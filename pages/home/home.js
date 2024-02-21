let nmob = document.getElementById('not-mob');
let mob = document.getElementById('mob');
let mvisible = document.getElementById('menu-panel-visible');
let menu = document.getElementById('mob-menu');
let close = document.getElementById('mob-menu-close');
let main = document.querySelector('main');

if((screen.width >= 1440) || ((screen.width >= 768) && (screen.width < 1440)))
{
	nmob.setAttribute('style', 'display:table;width:100%;border-collapse:collapse');
	mob.setAttribute('style', 'display:none');
	mvisible.setAttribute('style', 'display:none');
}
else if((screen.width >= 375) && (screen.width < 768))
{
	nmob.setAttribute('style', 'display:none');
	mob.setAttribute('style', 'display:flex;justify-content:space-between;margin-inline:24px;transform:translateY(24px);align-items:center');
	mvisible.setAttribute('style', 'display:none');
	menu.addEventListener('click', () => mvisible.setAttribute('style', 'display:block'));
	close.addEventListener('click', () => mvisible.setAttribute('style', 'display:none'));
	main.addEventListener('click', () => {
		if(mvisible.getAttribute('style') == 'display:block')
			mvisible.setAttribute('style', 'display:none');
		});
}
