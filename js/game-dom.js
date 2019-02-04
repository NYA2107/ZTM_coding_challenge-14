/*
	Require DOM.js
*/
class GD extends GE{
	/*
		constructor parameter 'grid', is variable from GRID in Game Engine
	*/
	constructor(imageTotal, element){
		super(imageTotal)
		this.ELEMENT = element
		this.GRID_DOM = this.createGD(this.GRID)
		this.DOM_BEFORE = null;
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
				domTemp.setValue(this.GRID[i][j])
				domTemp.setOriginalValue(this.GRID[i][j])
				domTemp.setIndex(i,j)
		    	array[i].push(domTemp)
			}
		}
		return array
	}
	/*
		find individual dom in GRID_DOM by index
	*/
	index(i,j,callback){
		callback(this.GRID_DOM[i][j])
	}

	/*
		find all dom in GRID_DOM
	*/
	all(callback){
		for (let i = 0 ; i < this.GRID_DOM.length; i++) {
			for (let j = 0 ; j < this.GRID_DOM[i].length; j++) {
				callback(this.GRID_DOM[i][j])
			}
		}
	}
	/*
		find dom in GRID_DOM by value
	*/
	value(value, callback){
		for (let i = 0 ; i < this.GRID_DOM.length; i++) {
			for (let j = 0 ; j < this.GRID_DOM[i].length; j++) {
				if(this.GRID_DOM[i][j].value == value){
					callback(this.GRID_DOM[i][j])
				}
			}
		}
	}
}