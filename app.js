
document.addEventListener("DOMContentLoaded", function() {
    
    
    var x = 0;
    //links svg1 to the svg id
    var svg1 = document.getElementById('svg1id');
    //graph points
    var VAR = 100;
    var autoval = 0;
    
    
    
    var intervalID = setInterval(function () {

        // Your logic here
        autoval = autoval +1;
        varx = varx+20;
        vary = vary+20
        var tot = tot+" "+varx+","+vary
        console.log("autoval"+autoval);
        if (++x === 50000) {
            window.clearInterval(intervalID);
        }
        var sliderviewboxoutput =  autoval+" 0 500 500";
        console.log(sliderviewboxoutput);
        svg1.setAttribute('viewBox', sliderviewboxoutput);
        var points = "00,00 20,20 40,40 60,60 80,80 100,100 120,120 140,140 160,160 180,180 200,200 220,220 240,240 260,260 280,280 300,300 320,320 340,340 360,360 380,380 400,400 420,420 440,440 460,460 480,480 500,50"+tot;
        var varx = 500;
        var vary = 0;
        var polyline = document.getElementById('line');
        polyline.setAttribute('points', points);
        console.log(points);
        
     }, 1000);
    const slider = document.getElementById('myRange');
    slider.oninput = function() {
        
        const sliderValue = this.value;
        console.log(sliderValue);
        var sliderviewboxoutput =  autoval+" 0 500 500";
        console.log(sliderviewboxoutput);
        svg1.setAttribute('viewBox', sliderviewboxoutput);
    };
});
