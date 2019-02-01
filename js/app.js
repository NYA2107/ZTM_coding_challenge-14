let p = new Dom('p')
let app = new Selector()

p.textContent('Hello, World')

p.setStyle({
	width:'200px',
	height:'500px',
	backgroundColor:'yellow'
})

p.appendTo('app')

app.selectId('app')
app.htmlContent('<h1>Hallo</h1>')