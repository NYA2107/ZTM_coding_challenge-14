class Dom{
	constructor(dom){
		this.dom = document.createElement(dom)
	}
	setValue(value){
		this.value = value
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

}

class Selector extends Dom{
	constructor(id){
		super()
		this.dom = document.getElementById(id)
	}
}

