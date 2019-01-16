var stop = document.getElementById("stop");

function start()
{
    var score = document.getElementById("score");
     finalScore = 0;
     count = setInterval(()=>{
        finalScore+=1;
        score.innerText=finalScore ; // create (div id=score)
    },100);
}

function lost(){
 clearInterval(count);
 console.log(finalScore);
}



start();
stop.addEventListener("click",lost);