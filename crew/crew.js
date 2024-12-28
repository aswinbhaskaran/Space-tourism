const title = document.querySelector('head > title')
const pages = main.querySelector('#pagination-circles')
const img = main.querySelector('img')
const section = main.querySelector('#crew-section')
const p = section.querySelector('p')
const sheader = section.querySelector('header')
const firstChild = sheader.children[0]
const lastChild = sheader.children[sheader.children.length - 1]

for(let page of pages.children)
{
	page.onclick = e => {
		const element = e.target

		const xmlHttp = new XMLHttpRequest()

		if(!element.hasAttribute('class'))
		{
			element.setAttribute('class', 'page-active')

			for(let other of pages.children)
				if((other != element) && other.hasAttribute('class'))
					other.removeAttribute('class')
		}

		xmlHttp.open('GET', './crew.json', true)
		xmlHttp.send()

		xmlHttp.onreadystatechange = r => {
			const res = r.target

			if((res.status == 200) && (res.readyState == 4))
			{
				const json = JSON.parse(res.responseText)

				for(let crew of json)
				{
					if(element.dataset.role == crew.role.toLowerCase())
					{
						img.src = `../${crew.images.png}`
						img.alt = crew.name
						p.innerText = crew.bio
						firstChild.innerText = crew.role
						lastChild.innerText = crew.name

						title.innerText = title.innerText.replace(title.innerText.split(/[-::]+/)[1], ` ${crew.role} `)
					}
				}
			}
		}
	}
}