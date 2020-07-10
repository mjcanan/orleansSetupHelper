function getRandom() {
  return Math.floor((Math.random()*90) + 1);
}

function boardSetup(removed,n) {
  let board = {
    wheatLeft: 24 - removed.wheat,
    cheeseLeft: 21 - removed.cheese,
    wineLeft: 18 - removed.wine,
    woolLeft: 15 - removed.wool,
    silkLeft: 12 - removed.silk
  }; 
  let i = 0;
  let y = 0;
  let arr = [0,0,0,0,0];
  let spaces;
  
  if (n===0){			// 4 Player Game = 51 spaces
    spaces = 51;
  } else if (n===1) {	// 2 Player Game = 42 spaces
    spaces = 42;
  }	else {
    spaces = 47;		// 3 Player game = 47 spaces
  }
  
  for (i = 0; i < spaces; i++){
    y = getRandom();
    if (y <= 24) {
      if (board.wheatLeft === 0){
        i--;
        continue;
      } else {
        board.wheatLeft--;
        arr[0] += 1;
      }
	} else if (y >= 25 && y < 46) {
        if(board.cheeseLeft === 0){
          i--;
          continue;
        } else {
          board.cheeseLeft--;
          arr[1] += 1;
        }
    } else if (y >= 46 && y < 64){
        if (board.wineLeft === 0){
          i--;
          continue;
        } else {
          board.wineLeft--;
          arr[2] += 1;
        }
    } else if (y >= 64 && y < 79){
        if (board.woolLeft === 0){
          i--;
          continue;
        } else {
          board.woolLeft--;
          arr[3] += 1;
        }
    } else if (y >= 79 && y < 91) {
        if (board.silkLeft === 0){
          i--;
          continue;
        } else {
          board.silkLeft--;
          arr[4] += 1;
        }
    } else {
        i--;
        continue;
    }	
  }
  return arr;
}

function getRemoved(num){

  let good = {
    wheat: 0,
    cheese: 0,
    wine: 0,
    wool: 0,
    silk: 0
  };
  let i;
  let x = 0;
  let j;
  let cTiles = document.getElementsByClassName("charTile");
  let cTiles2 = document.getElementsByClassName("charTile2");
  
		//calculating the character tiles to remove
  
  if(num === 0){								// 4 player game	  
    for (j = 0; j < cTiles.length; j++) {
      cTiles[j].innerHTML = 0;
	}
    for (j = 0; j < cTiles2.length; j++) {
      cTiles2[j].innerHTML = 0;
    }	  
  } else if (num === 1) {						// 2 player game	  
    for (j = 0; j < cTiles.length; j++) {
      cTiles[j].innerHTML = 4;
    }
    for (j = 0; j < cTiles2.length; j++) {
      cTiles2[j].innerHTML = 6;
    }
  } else {										// 3 player game	    
    for (j=0; j < cTiles.length; j++) {
      cTiles[j].innerHTML = 2;
    }
    for (j=0; j <cTiles2.length; j++) {
      cTiles2[j].innerHTML = 3;
    }
  } 
		// calculating the goods to remove
		
  if (num !== 0) {								// for 2-3 player game
    for (i = 0; i < (12/num); i++){			// skips this code if 4 player game
      x = getRandom();
      if (x <= 24) {
        good.wheat++;
      } else if (x >= 25 && x < 46){
        good.cheese++;
      } else if (x >= 46 && x < 64){
        good.wine++;
      } else if (x >= 64 && x < 79){
        good.wool++;
      } else {
        good.silk++;
      }
    }
  }
		// outputing removed goods
		
  document.getElementById("wheat").innerHTML = good.wheat;	
  document.getElementById("cheese").innerHTML = good.cheese;
  document.getElementById("wine").innerHTML = good.wine;
  document.getElementById("wool").innerHTML = good.wool;
  document.getElementById("silk").innerHTML = good.silk;

		// generate board state

  let boardSpace = boardSetup(good,num);
  document.getElementById("wheatB").innerHTML = boardSpace[0];	
  document.getElementById("cheeseB").innerHTML = boardSpace[1];
  document.getElementById("wineB").innerHTML = boardSpace[2];
  document.getElementById("woolB").innerHTML = boardSpace[3];
  document.getElementById("silkB").innerHTML = boardSpace[4];
}



