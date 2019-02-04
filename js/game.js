class Game{
	constructor(imageTotal,appendTo){
		this.container = new Selector(appendTo)
		this.board = new GD(imageTotal,'div')
		this.emoji = ['🐹','🐰','🐶','🦊','🐺','🐳']
		this.flagClick = 0
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
				backgroundColor:'#4f7882',
				margin:'2px',
				display:'flex',
				justifyContent:'center',
				alignItems:'center',
				color:'white',
				cursor:'pointer'
			})
			v.clicked(()=>{
				if(this.flagClick == 0){
					let curr_x = board.CURR_X;
					let curr_y = board.CURR_Y;
					
					board.checkGrid(m,n,(first)=>{
						v.setValue(board.GRID[m][n])
						board.DOM_BEFORE = v;
						this.setEmoji(v, v.originalValue)
						this.setEmoji(board.DOM_BEFORE, board.DOM_BEFORE.originalValue)
					},(second)=>{
						this.flagClick = 1
						//NOTE : Error when clicked to fast
						//should disable CLick
						this.setEmoji(v, v.originalValue)
						this.setEmoji(board.DOM_BEFORE, board.DOM_BEFORE.originalValue)

						v.setValue(board.GRID[m][n])
						board.DOM_BEFORE.setValue(board.GRID[curr_x][curr_y])

						setTimeout(()=>{
							if(v.value == 'x'){
								this.setEmoji(board.DOM_BEFORE, board.DOM_BEFORE.originalValue)
								this.setEmoji(v, v.originalValue)
							}else{
								v.htmlContent(`<div></div>`)
								board.DOM_BEFORE.htmlContent(`<div></div>`)
							}
							this.flagClick = 0
							//ENABLE CLICK
						}, 500)
						
					},(fin)=>{
						v.setValue(board.GRID[m][n])
						if(onFinish){
					        onFinish(this)
					    }
					})
				}else{
					//when user clicked too fast
					console.log('You Clicked Too Fast')
				}
				
			})
		})
	}

	setEmoji(dom, emojiIndex){
		dom.htmlContent(`<div style="font-size:30pt">${this.emoji[emojiIndex]}</div>`)
	}

	destroy(){
		this.container.htmlContent('')
	}
}