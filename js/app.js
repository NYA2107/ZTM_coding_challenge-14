let container = new Selector('app')
let board = new GD(4,'div')
let color = ['#e0e24f','#e24f4f','#d84fe2','#4fe267']

container.setStyle({
	display:'flex',
	flexWrap:'wrap'
})

board.all((v)=>{
	let m = v.index[0]
	let n = v.index[1]

	v.appendTo(container)
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
		console.log(`CLICK: [${m},${n}]`,{
			board:board,
			card:v,
			CURRENT:board.CURRENT,
			currGRID:board.GRID[m][n],
			currX :board.CURR_X,
			currY : board.CURR_Y
		})
		var curr_x = board.CURR_X;
		var curr_y = board.CURR_Y;
		var result = board.checkGrid(m,n);
		if(result.boolFlag){
			// done;
		}else if(!result.boolFlag && result.intFlag == 3){
			// update 1 dom into x
			v.htmlContent(`<h1>${board.GRID[m][n]}</h1>`);
			board.DOM_BEFORE = v;
		}else if(!result.boolFlag && result.intFlag < 3){
			// update 2 dom into x or default
			v.htmlContent(`<h1>${board.GRID[m][n]}</h1>`);
			board.DOM_BEFORE.htmlContent(`<h1>${board.GRID[curr_x][curr_y]}</h1>`)
		}
		
	})
})







