
document.addEventListener("DOMContentLoaded", function() {
    
    
    var x = 0;
    //links svg1 to the svg id
    var svg1 = document.getElementById('svg1id');
    //graph points
    var VAR = 100;
    var autoval = 50;
    var day = 1;
    var rate = 1;
    var varx = 500;
    var vary = 0;
    var tot = "";
    var points = "00,00 20,20 40,40 60,60 80,80 100,100 120,120 140,140 160,160 180,180 200,200 220,220 240,240 260,260 280,280 300,300 320,320 340,340 360,360 380,380 400,400 420,420 440,440 460,460 480,480 500,50";
    var polyline = document.getElementById('line');

    let opacityValue = 1;
    const box = document.getElementById('frame2');
    
   
    

    var intervalID = setInterval(function () {

        // Your logic here
        autoval = autoval +10;
        points = "00,00 20,20 40,40 60,60 80,80 100,100 120,120 140,140 160,160 180,180 200,200 220,220 240,240 260,260 280,280 300,300 320,320 340,340 360,360 380,380 400,400 420,420 440,440 460,460 480,480 500,50"+tot;
        if (vary > 49 && vary < 450) {
            vary = vary+getRandomIntNeg(-30, 30);
            //console.log("NORMAL");
        }
        else if (vary < 50){
            vary = vary+getRandomIntPos(1, 50)
            //console.log("FORCE DOWN");
        }
        else if (vary > 449){
            vary = vary+getRandomIntPos(-50, -1)
            //console.log("FORCE UP");
        }
        varx = varx+10;
        //console.log(vary);
        
        
        tot = tot+" "+varx+","+vary;
        //console.log("autoval"+autoval);
        if (++x === 50000) {
            window.clearInterval(intervalID);
        }
        var sliderviewboxoutput =  autoval+" 0 500 500";
        //console.log(sliderviewboxoutput);
        svg1.setAttribute('viewBox', sliderviewboxoutput);
        
        //onsole.log("tot"+tot);
        polyline.setAttribute('points', points);
        //console.log("points"+points);
        if (++x === 10) {
            daychange();
        }
        
     }, 100);
    const slider = document.getElementById('myRange');
    slider.oninput = function() {
        
        const sliderValue = this.value;
        console.log(sliderValue);
        var sliderviewboxoutput =  autoval+" 0 500 500";
        console.log(sliderviewboxoutput);
        svg1.setAttribute('viewBox', sliderviewboxoutput);
    };
    function getRandomIntNeg(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }
    function getRandomIntPos(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }
    function daychange()
    {
        //show ui about day ending
        points = "00,00 20,20 40,40 60,60 80,80 100,100 120,120 140,140 160,160 180,180 200,200 220,220 240,240 260,260 280,280 300,300 320,320 340,340 360,360 380,380 400,400 420,420 440,440 460,460 480,480 500,50"+tot;
        day = day+1;
        varx = 500;
        var vary = 0;
        opacityValue = 1;
        box.style.opacity = opacityValue;
        //reseet data and adjust for next day
        if (rate==5) {
            rate = rate +1
        }
        //15 secs before it closes
        setTimeout(function(){
            opacityValue = 0;
            box.style.opacity = opacityValue;
        }, 1000);
    }
    
});
