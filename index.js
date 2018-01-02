const { readFileSync } = require('fs')
const md = require('markdown-it')()
const { parse } = require('url')
const { get } = require('got')
const { send } = require('micro')
const renderPage = require('./lib/render-page')
const formatData = require('./lib/format-data')

module.exports = async (request, response) => {
  const { pathname } = await parse(request.url, true)
  if (pathname === '/raw' || pathname === '/json' || pathname === '/html') {
    const data = (await get('https://seneca-firebase-test.firebaseio.com/rim-vigo-data-pull.json', {json: true})).body
    const results = formatData(data)

    if (pathname === '/raw') {
      send(response, 200, data)
    } else if (pathname === '/json') {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Allow-Methods', 'GET')
      send(response, 200, results)
    } else if (pathname === '/html') {
      send(response, 200, renderPage(results))
    }
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    send(response, 200, md.render(readme))
  }
}
