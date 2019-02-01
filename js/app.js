let app = new Selector('app')
let board = new GD(4,'div')
let color = ['#e0e24f','#e24f4f','#d84fe2','#4fe267']

app.setStyle({
	display:'flex',
	flexWrap:'wrap'
})

board.all((v)=>{
	let m = v.index[0]
	let n = v.index[1]
	v.appendTo(app)
	v.setStyle({
		width:'200px',
		height:'200px',
		backgroundColor:color[v.value],
		margin:'2px',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		color:'white',
		cursor:'pointer'
	})
	v.htmlContent(`<h1>${board.GRID[m][n]}</h1>`)
	v.clicked(()=>{
		board.checkGrid(m,n)
		v.htmlContent(`<h1>${board.GRID[m][n]}</h1>`)

		console.log(`[${m},${n}]`,{
			board:board,
			card:v,
			CURRENT:board.CURRENT,
			currGRID:board.GRID[m][n]
		})
	})
})







