window.onresize = function()
{
	const panel = document.querySelector('#header #menu-panel')
	const img = panel.querySelector('#img')
	const close = panel.querySelector('#menu-panel-close')

	if((screen.width >= 375) && (screen.width < 768))
	{
		function hide()
		{
			panel.classList.replace('d-flex', 'd-none')
		}

		function show()
		{
			panel.classList.replace('d-none', 'd-flex')
		}

		panel.classList.add('d-none')
		document.getElementById('mob-menu').onclick = show;
		document.getElementById('mob-menu-close').addEventListener('click', hide);
		document.querySelector('main').onclick = hide;
	}
	else
		if(panel.getAttribute('class') != null)
			panel.removeAttribute('class')
}

