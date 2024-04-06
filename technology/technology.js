const title = document.querySelector('head > title')
const div = document.querySelector('main > div')
const pages = div.querySelector('#pagination')
const section = div.querySelector('#technology-section')
const head = section.querySelector('header > :last-child')
const p = section.querySelector('p')
const pic = div.querySelector('picture')
const src = pic.querySelector('source')
const img = pic.querySelector('img')

for(let page of pages.children)
{
    page.onclick = e => {
        const element = e.target

        const xmlHttp = new XMLHttpRequest()

        if(!element.hasAttribute('class'))
        {
            element.setAttribute('class', 'choice-active')

            for(let other of pages.children)
                if((other != element) && other.hasAttribute('class'))
                    other.removeAttribute('class')
        }

        xmlHttp.open('GET', './technology.json', true)
        xmlHttp.send()

        xmlHttp.onreadystatechange = r => {
            const res = r.target

            if((res.status == 200) && (res.readyState == 4))
            {
                const json = JSON.parse(res.responseText)

                for(let tech of json)
                    if(tech.name.toLowerCase() == element.dataset.name)
                    {
                        img.src = `../${tech.images.portrait}`
                        img.alt = tech.name
                        src.srcset = `../${tech.images.landscape}`
                        head.innerText = tech.name
                        p.innerText = tech.description

                        title.innerText = title.innerText.replace(title.innerText.split(/[-::]+/)[1], ` ${tech.name} `)
                    }
            }
        }
    }
}