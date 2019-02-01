class Dom{
	constructor(dom){
		this.dom = document.createElement(dom)
	}
	setValue(value){
		this.value = value
	}
	setIndex(i,j){
		this.index = [i,j]
	}
	setId(id){
		this.id = id
		this.dom.id = id
	}
	setStyle(newStyle){
		Object.assign(this.dom.style, newStyle);
	}
	appendTo(parrent){
		parrent.dom.appendChild(this.dom)
	}
	appendChild(child){
		this.dom.appendChild(child)
	}
	htmlContent(content){
		this.dom.innerHTML = content
	}
	textContent(content){
		this.dom.appendChild(document.createTextNode(content))
	}
	clicked(callback){
		this.dom.addEventListener("click",()=>{
			callback(this)
		})
	}

}

class Selector extends Dom{
	constructor(id){
		super()
		this.dom = document.getElementById(id)
	}
}

