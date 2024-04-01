const title = document.querySelector('head > title')
const main = document.querySelector('main')
const section = main.querySelector('#crew-section')
const header = section.querySelector('header')
const firstChild = header.querySelector(':first-child')
const lastChild = header.querySelector(':last-child')
const p = section.querySelector('p')
const page = main.querySelector('#pagination-circles')
const img = main.querySelector('img')

for(let p of page.children)
{
    p.onclick = e => {
        const element = e.target

        const xmlHttp = new XMLHttpRequest()

        for(let pag of page.children)
            if(pag.hasAttribute('class'))
                pag.removeAttribute('class')

        element.setAttribute('class', 'page-active')
        xmlHttp.open('GET', './crew.json', false)
        xmlHttp.send()

        xmlHttp.onreadystatechange = r => {
            let res = r.target

            if((res.readyState == 4) && (res.status == 200))
            {
                const json = JSON.parse(res.response)

                for(let crew of json)
                {
                    if(element.dataset.role == crew.role.toLowerCase())
                    {
                        img.src = `../${crew.images.png}`
                        img.alt = crew.name
                        firstChild.innerText = crew.role
                        lastChild.innerText = crew.name
                        p.innerText = crew.bio

                        title.innerText = title.innerText.replace(title.innerText.split(/[-::]+/)[1], ` ${crew.role} `)
                    }
                }
            }
        }
    }
}