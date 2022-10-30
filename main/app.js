const distance = (a, b) => {
	//TODO: implementați funcția
	// TODO: implement the function
	if(typeof a != 'string'||typeof b!='string')
    throw new Error('InvalidType');

    if(a.trim()===''&&b.trim()===''){
        return 0; //daca cele 2 stringuri sunt goale
    }


    const grid=[];
    for(let i=0;i<a.length+1;i++){
        const row=[];
        for(let j=0;j<b.length+1;j++){
            row.push(j);
        }
        row[0]=i;
        grid.push(row);
    }

    for(let i=1;i<a.length+1;i++){
        for(let j=1;j<b.length+1;j++){
            //daca val de pe index sunt egale
            if(a[i-1]===b[j-1])
            {
                grid[i][j]=grid[i-1][j-1];
            }
            else{
                grid[i][j]=1+Math.min(grid[i-1][j-1],grid[i-1][j],grid[i][j-1])
            }
        }
    }
    return grid[a.length][b.length];
};


module.exports.distance = distance