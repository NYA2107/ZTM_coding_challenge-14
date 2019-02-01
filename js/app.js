let app = new Selector('app')
let board = new GD(4,'div')
let color = ['blue','red','yellow','green','orange']

app.setStyle({
	display:'flex',
	flexWrap:'wrap'
})


board.all((v)=>{
	v.appendTo(app)
	v.setStyle({
		width:'200px',
		height:'200px',
		backgroundColor:color[v.value],
		margin:'2px',
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
	})
	v.htmlContent(`${v.value}`)
	v.clicked(()=>{
		board.checkGrid(v.index[0],v.index[1])
		console.log({
			card:board,
			index:v.index,
			value:v.value
		})
	})
})







