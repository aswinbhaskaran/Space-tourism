const [header, main] = [document.getElementById('header'), document.querySelector('main')]
const [panel, mobMenu, mobMenuClose] = [header.querySelector('#menu-panel'), header.querySelector('#mob-menu'), header.querySelector('#mob-menu-close')]

function hide()
{
	panel.classList.replace('d-flex', 'd-none')
}

function show()
{
	panel.classList.replace('d-none', 'd-flex')
}

window.onresize = function()
{
	if((screen.width >= 375) && (screen.width < 768))
	{
		panel.classList.add('d-none')
		mobMenu.onclick = show;
		mobMenuClose.addEventListener('click', hide)
		main.onclick = hide
	}
	else
		if(panel.getAttribute('class') != null)
			panel.removeAttribute('class')
}

document.querySelector('body').onload = function()
{
	if((screen.width >= 375) && (screen.width < 768))
	{
		panel.classList.add('d-none')
		mobMenu.onclick = show
		mobMenuClose.addEventListener('click', hide)
		main.onclick = hide
	}
	else
		if(panel.getAttribute('class') != null)
			panel.removeAttribute('class')
}