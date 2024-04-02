const title = document.querySelector('head > title')
const destination = document.querySelector('main #destination-section')
const img = destination.querySelector('img')
const planet = destination.querySelector('#planet-details')
const header = planet.querySelector('header')
const nav = header.querySelector('nav')
const h1 = header.querySelector('h1')
const p = planet.querySelector('p')
const travel = planet.querySelector('#travel-details')
const avg = travel.querySelector('#avg-dist + span')
const est = travel.querySelector('#est-time + span')

for(let link of nav.children)
{
	link.addEventListener('click', e => {
		const element = e.target

		const xmlHTTP = new XMLHttpRequest();

		if(element.classList.contains('text-color') && !element.classList.contains('nav-active'))
		{
			element.classList.replace('text-color', 'nav-active')

			for(let a of nav.children)
				if((a != element) && a.classList.contains('nav-active') && !a.classList.contains('text-color'))
					a.classList.replace('nav-active', 'text-color')
		}

		xmlHTTP.onreadystatechange = r => {
			let res = r.target

			if((res.status == 200) && (res.readyState == 4))
			{
				const json = JSON.parse(res.response)

				for(let dest of json)
				{
					if(element.innerText.toLowerCase() == dest.name.toLowerCase())
					{
						img.src = `../${dest.images.png}`
						img.alt = dest.name
						h1.innerText = dest.name
						p.innerText = dest.description
						avg.innerText = dest.distance
						est.innerText = dest.travel

						title.innerText = title.innerText.replace(title.innerText.split(/[-::]+/)[1], ` ${dest.name} `)
					}
				}
			}
		}

		xmlHTTP.open('GET', './destination.json', false)
		xmlHTTP.send()
	})
}
