class GE{
    constructor(imageTotal){
        this.IMAGE_TOTAL = imageTotal;
        this.GRID = this.create2DGrid(imageTotal);
        this.DONE_COUNTER = imageTotal;
        this.CURRENT = null;
        this.CURR_X = -1;
        this.CURR_Y = -1;
        this.generateGameData();
    }
    /**
     * Print Grid in console
     */
    printGrid(){
        for(let i = 0 ; i < this.GRID.length ;i++){
            console.log(this.GRID[i]);
        }
    }
    /**
     * Will Create 2D Array
     *  result = imageTotal x 2
     *  */
    create2DGrid(imageTotal){
        var result = new Array(2);
        for(let i = 0 ; i < 2 ; i++){
            result[i] = new Array(imageTotal);
        }
        return result;
    }
    // Will generate this.GRID data, that contain number between 0 - this.IMAGE_TOTAL-1
    /** example if this.IMAGE_TOTAL = 3
     *  this.GRID = [ [ 0 , 2 , 2] , 
     *                [ 1 , 0 , 1] ]
     * 
     * example if this.IMAGE_TOTAL = 2
     * this.GRID = [ [ 0 , 1] , 
     *               [ 1 , 0] ]
     * 
     * *NB : data position will be randomize
     * */ 
    generateGameData(){
        console.log("(Log) Loading..");
        for (let i = 0 ; i < this.IMAGE_TOTAL ; i++){
            // Pick 2 Location
            let flag = 2;
            while(flag != 0){
                let x = this.generateRandomNumber(0,2);
                let y = this.generateRandomNumber(0,this.IMAGE_TOTAL);
                if(this.GRID[x][y] == undefined){
                    this.GRID[x][y] = i;
                    flag -=1;
                }
            }
        }
        console.log("(Log) Success");
    }

    /**
     * Will check
     * if this.GRID[m][n] == this.CURRENT && this.CURRENT != null
     *     mark this.GRID[m][n] as x
     *     reset this.CURR_X to be -1
     *     reset this.CURR_Y to be -1
     *     reset this.CURRENT to be null
     *     this.DONE_COUNTER -= 1;
     * else if this.GRID[m][n] != this.CURRENT && this.CURRENT !+ null
     *     reset this.CURRENT to be null
     * else if this.CURRENT = null
     *      set this.CURRENT = this.GRID[m][n]
     *      set this.CURR_X = m
     *      set this.CURR_Y = n
     */
    checkGrid(m,n,first,second,fin){
        if(this.GRID[m][n] == this.CURRENT && this.CURRENT != null && !(m == this.CURR_X && n == this.CURR_Y)){
            this.CURRENT = null;
            this.GRID[m][n] = "x";
            this.CURR_X = -1;
            this.CURR_Y = -1;
            this.DONE_COUNTER--
            second(this)
        }else if(this.GRID[m][n] != this.CURRENT && this.CURRENT != null){
            this.GRID[this.CURR_X][this.CURR_Y] = this.CURRENT
            this.CURRENT = null;
            this.CURR_X = -1;
            this.CURR_Y = -1;
            second(this)
        }else if(this.CURRENT == null){
            this.CURRENT = this.GRID[m][n];
            this.GRID[m][n] = "x";
            this.CURR_X = m;
            this.CURR_Y = n;
            first(this)
        }

        if(this.isItDone()){
            fin(this)
        }
    }
    /**
     * Check 
     * if this.DONE_COUNTER = 0;
     *      return true
     * else 
     *      return false
     */
    isItDone(){
        console.log("(Log) Done Counter : ",this.DONE_COUNTER);
        if(this.DONE_COUNTER == 0){
            return true;
        }else{
            return false;
        }
    }

    /**
     * Generate random integer number between min <= result < max 
     */
    generateRandomNumber(min ,max){
        return Math.floor(Math.random() * (max-min)) + min ;
    } 
}