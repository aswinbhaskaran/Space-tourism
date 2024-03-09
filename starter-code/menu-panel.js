window.onresize = function()
{
	if((screen.width >= 375) && (screen.width < 768))
	{
		function hide()
		{
			const menu = document.getElementById('menu-panel-visible');

			if(!menu.classList.contains('d-none'))
				menu.classList.add('d-none');
		}

		function show()
		{
			const menu = document.getElementById('menu-panel-visible');

			if(menu.classList.contains('d-none'))
				menu.classList.remove('d-none');
		}

		document.getElementById('mob-menu').onclick = show;
		document.getElementById('mob-menu-close').addEventListener('click', hide);
		document.querySelector('main').onclick = hide;
	}
}

