let rrruns =["_","_","_","_","_","_"];
let rcbruns =["_","_","_","_","_","_"];

let rrscore =0;
let rcbscore =0;
let ballCounter =0;

function strikeFunction()
{
    console.log('hi')
    ballCounter++;
    let run =Math.floor((Math.random()*5))*2;

    if(run==8)
    {
        run='W';
    }
    if(ballCounter <= 6)
    {
        if(run != 'W')
        {
            rrscore=rrscore + run;
            document.getElementById("rrscore").textContent=rrscore;
        }
        rrruns[ballCounter-1] =run;
        document.getElementById("rrruns").textContent= rrruns;

    }
    else if(ballCounter<=12)
    {
        if(run != 'W')
        {
            rcbscore=rcbscore + run;
            document.getElementById("rcbscore").textContent=rcbscore;
        }
        rcbruns[ballCounter-7] =run;
        document.getElementById("rcbruns").textContent=rcbruns;

        if(rcbscore>rrscore)
        {
         ballCounter=12;
        }

    }
    else if(ballCounter >=12)
    {
        document.getElementById("stike").disable=true;
        let maxScore=Math.max(rrscore,rcbscore);
        console.log(maxScore)
        if(maxScore == rrscore)
        {
            document.getElementById("RR").classList.add('winner');
        }
        else  if(maxScore == rcbscore)
        {
            document.getElementById("RCB").classList.add('winner');
        }
    }
}