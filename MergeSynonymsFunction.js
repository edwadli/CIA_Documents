/* This file is for the function
mergeSynList(string array);

where (string array) is WSL[] = [syn1,syn2,syn3,...,SAT1];
*/

//GLOBAL ARRAY: bigList[][]
var bigList = new Array([]);
bigList[0]=[];
bigList[0][0]="0";

//function
var mergeSynList = function(WSLarr)
{
    var len = WSLarr.length;
    var syn;
    //set up first array
    if (bigList[0][0] === "0"){
        
        for(syn=0;syn<(len-1);syn++){
            //note that @ WSLarr.length-1 == SATword
            bigList[syn]=[WSLarr[syn]];
            bigList[syn][1]=WSLarr[len - 1];
            
        }
    }
    //merge synonyms and add to SAT words under existing (bigList)
    else{
  //    var tempBig = bigList;
        var tempBig = new Array();
        for(var i = 0; i < bigList.length; i++)
        {tempBig.push(bigList[i].slice());}
        
        var tempPoint = 0;
        var wslPoint = 0;
        
        
        for(syn=0;(tempPoint<tempBig.length)&&(wslPoint<len);syn++){
            if (tempBig[tempPoint][0] == WSLarr[wslPoint]){
                
                //if the synonyms are the same
                //add the SAT word to the end of tempBig, copy line to bigList
                tempBig[tempPoint][tempBig[tempPoint].length]=WSLarr[len-1];
                bigList[syn] = tempBig[tempPoint];
                tempPoint++;
                wslPoint++;
            }
            else if (tempBig[tempPoint][0]<WSLarr[wslPoint]){
                bigList[syn] = tempBig[tempPoint];
                tempPoint++;
            }
            else{
                bigList[syn] = [WSLarr[wslPoint],WSLarr[len-1]];
                wslPoint++;
            }
            
        }
        //append rest of list on cuz one list ran out
        if (tempPoint<tempBig.length){
            for(;tempPoint<tempBig.length;syn++,tempPoint++){
                bigList[syn] = tempBig[tempPoint];
            }
        }
        else{
            for(;wslPoint<len-1;syn++,wslPoint++){
                bigList[syn]=[WSLarr[wslPoint],WSLarr[len-1]];
            }
        }
        
    }

};