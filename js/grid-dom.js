/*
	Require DOM.js
*/
class GD{
	/*
		constructor parameter 'grid', is variable from GRID in Game Engine
	*/
	constructor(grid, element){
		this.GRID_DATA = grid
		this.ELEMENT = element
		this.GRID_DOM = this.createGD(grid)
	}
	/*
		Generate element from grid data fill with 'element' variable
		
		example:
			element = 'div'
			grid = [[1,0][1,0]]
			##
			return [[<div id='grid-00'></div id='grid-01'>,div] ... ]
			and for each of element value will be: 
				grid-00 = 1
				grid-01 = 0
				grid-10 = 1
				grid-11 = 0
	*/
	createGD(grid, element){
		let array = []
		for (let i = 0 ; i < grid.length; i++) {
			array.push([])
			for (let j = 0 ; j < grid[i].length; j++) {
				let domTemp = new Dom(this.ELEMENT)
				domTemp.setId(`grid-${i}${j}`)
				domTemp.setValue(this.GRID_DATA[i][j])
		    	array[i].push(domTemp)
			}
		}
		return array
	}
	/*
		set individual stlye from GRID_DOM
	*/
	styleByIndex(i,j,style){
		this.GRID_DOM[i][j].setStyle(style)
	}

	/*
		set all GRID_DOM style
	*/
	styleAll(style){
		for (let i = 0 ; i < this.GRID_DOM.length; i++) {
			for (let j = 0 ; j < this.GRID_DOM[i].length; j++) {
				this.GRID_DOM[i][j].setStyle(style)
			}
		}
	}
	/*
		set GRID_DOM style by value
	*/
	styleByValue(value){
		for (let i = 0 ; i < this.GRID_DOM.length; i++) {
			for (let j = 0 ; j < this.GRID_DOM[i].length; j++) {
				if(this.GRID_DOM[i][j].value = value){
					this.GRID_DOM[i][j].setStyle(style)	
				}
			}
		}
	}
}