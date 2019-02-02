let lv1 = new Game(2,'app')
let lv2 = new Game(4,'app')

lv1.init((fin)=>{
	lv1.destroy()
	lv2.init()
})