const response = await fetch('https://fdnd.directus.app/items/person/?filter={%22id%22:197}')
const data = await response.json()
console.log(data)


const template = document.querySelector('template')
const result = document.querySelector('#result')
const engine = new liquidjs.Liquid()

engine.parseAndRender(template.innerHTML, {persons: data.data}).then(html => result.innerHTML = html)

