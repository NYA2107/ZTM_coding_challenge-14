class Dom{
	constructor(dom){
		this.dom = document.createElement(dom)
		this.style = this.dom.style
		this.computedStyle = getComputedStyle(this.dom)
	}
	setStyle(newStyle){
		Object.assign(this.style, newStyle);
	}
	appendTo(parrentId){
		document.getElementById(parrentId).appendChild(this.dom)
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
	constructor(){
		super()
	}
	selectId(id){
		this.dom = document.getElementById(id)
	}
}