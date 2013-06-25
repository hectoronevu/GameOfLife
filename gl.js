/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function createTable() {
    var t = new Array(10);
    for(var i = 0; i < 10; i++){
        t[i] = new Array(10);
    }
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            t[i][j] = Math.floor(Math.random() * 2);
        }
    }
    var table = document.createElement('table');
    var baseRow = document.createElement('tr');
    var baseCell = document.createElement('td');
    var container = document.getElementById('container');

    for (var i = 0; i < 10; i++) {
        //Create a new row
        var myRow = baseRow.cloneNode(false);
        for (var j = 0; j < 10; j++) {
            //Create a new cell, you could loop this for multiple cells
            var myCell = baseCell.cloneNode(false);
            myCell.innerHTML = t[i][j];

            //Append new cell
            myRow.appendChild(myCell);
            if(t[i][j] == 1)
                myCell.style.backgroundColor="black";
            else{
                myCell.style.backgroundColor="white";
                myCell.style.color="white";
            }
                
            
        }



        //Append new row
        table.appendChild(myRow);
    }

    container.appendChild(table);
    
}

