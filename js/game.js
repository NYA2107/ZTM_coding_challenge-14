class Game{
	constructor(imageTotal,appendTo){
		this.container = new Selector(appendTo)
		this.board = new GD(imageTotal,'div')
		this.color = ['#e0e24f','#e24f4f','#d84fe2','#4fe267']
	}
	init(onFinish){
		let {container, board, color} = this
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
				let curr_x = board.CURR_X;
				let curr_y = board.CURR_Y;
				let result = board.checkGrid(m,n);
				if(result.boolFlag){
					v.setValue(board.GRID[m][n])
					if(onFinish){
				        onFinish(this)
				    }
				}else if(!result.boolFlag && result.intFlag == 3){
					// update 1 dom into x
					v.setValue(board.GRID[m][n])
					board.DOM_BEFORE = v;
				}else if(!result.boolFlag && result.intFlag < 3){
					// update 2 dom into x or default
					v.setValue(board.GRID[m][n])
					board.DOM_BEFORE.setValue(board.GRID[curr_x][curr_y])
				}
				//draw result
				v.htmlContent(`<h1>${v.value}</h1>`);
				board.DOM_BEFORE.htmlContent(`<h1>${board.DOM_BEFORE.value}</h1>`)
				
			})
		})
	}
	destroy(){
		this.container.htmlContent('')
	}
}