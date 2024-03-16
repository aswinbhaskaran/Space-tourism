const destination = document.querySelector('main #destination-section')
const img = destination.querySelector('img')
const planet = destination.querySelector('#planet-details')
const header = planet.querySelector('header')
const nav = header.querySelector('nav')
const links = nav.querySelectorAll('a')
const h1 = header.querySelector('h1')
const p = planet.querySelector('p')
const travel = planet.querySelector('#travel-details')
const avg = travel.querySelector('#avg-dist + span')
const est = travel.querySelector('#est-time + span')

for(let link of links)
{
	link.addEventListener('click', e => {
		let xmlHTTP = new XMLHttpRequest();
		const element = e.target

		xmlHTTP.onreadystatechange = r => {
			let res = r.target

			if((res.status == 200) && (res.readyState == 4))
			{
				const json = JSON.parse(res.response)

				for(let dest of json.destinations)
				{
					if(element.innerText.toLowerCase() == dest.name.toLowerCase())
					{
						for(let child of nav.children)
						{
							if(!child.classList.contains('text-color'))
								child.classList.add('text-color')

							if(child.classList.contains('nav-active'))
								child.classList.remove('nav-active')
						}

						element.classList.add('nav-active')
						element.classList.remove('text-color')
						img.src = dest.images.png
						img.alt = dest.name
						h1.innerText = dest.name
						p.innerText = dest.description
						avg.innerText = dest.distance
						est.innerText = dest.travel
					}
				}
			}
		}
		xmlHTTP.open('GET', './data.json', false)
		xmlHTTP.send()
	})
}
