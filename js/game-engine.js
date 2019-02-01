class GE{
    constructor(imageTotal){
        this.IMAGE_TOTAL = imageTotal;
        this.GRID = this.create2DGrid(imageTotal);
        this.DONE_COUNTER = imageTotal;
        this.CURRENT = null;
    }
    /**
     * Will Create 2D Array
     * if imageTotal = even
     *      result = 2D array imageTotal x imageTotal
     *      example imageTotal = 2
     *      result = [ [ undefined , undefined] ,
     *                 [ undefined , undefined]]
     * else if imageTotal = odd
     *      result = 2D array imageTotal-1 x imageTotal
     *      example imageTotal = 3
     *      result = [ [ x , x , x ] ,
     *                 [ x , x , x ]]
     *  */
    create2DGrid(imageTotal){

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

    }

    /**
     * Will check
     * if this.GRID[m][n] == this.CURRENT && this.CURRENT != null
     *     mark this.GRID[m][n] as null
     *     reset this.CURRENT to be null
     *     this.DONE_COUNTER -= 1;
     * else if this.GRID[m][n] != this.CURRENT && this.CURRENT !+ null
     *     reset this.CURRENT to be null
     * else if this.CURRENT = null
     *      set this.CURRENT = this.GRID[m][n]
     */
    checkGrid(m,n){

        isItDone();
    }
    /**
     * Check 
     * if this.DONE_COUNTER = 0;
     *      return true
     * else 
     *      return false
     */
    isItDone(){

    }
}