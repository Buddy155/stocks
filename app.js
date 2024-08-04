
document.addEventListener("DOMContentLoaded", function() {
    
    var VAR = 100;

    var polyline = document.getElementById('line');

    var points = "00, 20,20 40,40 60,60 80,80 100,100 120,120 140,140 160,160 180,180 200,200 220,220 240,240 260,260 280,280 300,300 320,320 340,340 360,360 380,380 400,400 420,420 440,440 460,460 480,480 500,500";
    polyline.setAttribute('points', points);
});