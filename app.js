
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
    var daypop = 0;
    var whensold = 0;
    var whenbought = 0;
    var multiplier = 0;
    var profit = 0;
    let opacityValue = 1;
    var curval = 0;
    var money = 500;
    const box = document.getElementById('frame2');
    
    document.getElementById("buy").onclick = function() {buy()};
    document.getElementById("sell").onclick = function() {sell()};

    var intervalID = setInterval(function () {
        
        multiplier = curval/whenbought;
        multiplier = Math.round(multiplier * 100) / 100
        if (whenbought == 0)
        {
            multiplier = 0;
        }
        
        
        autoval = autoval +10;
        
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
        curval = 500-vary
        let valdis1 = document.getElementById("valdis");
        valdis1.innerHTML = "Value:"+curval;
        let profitdis = document.getElementById("profit");
        profitdis.innerHTML = "Profit:"+profit;
        let multiplierdis = document.getElementById("multiplier");
        multiplierdis.innerHTML = "Multiplier:"+multiplier;
        let moneydis = document.getElementById("money");
        moneydis.innerHTML = "Money:"+money+"$";
        //console.log(curval);
        if (x==0) {
            //console.log("FIRST TOT"+tot);
        }
        
        tot = " "+varx+","+vary;
        //console.log(vary);
        if (x==0) {
            //console.log("SECOND"+tot);
        }
        //console.log(x+" NUMEROOOO"+tot);
        
        points = points+tot;
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
        if (x>30) {
            if (daypop==0) {
                var five = points.split(" ")[0];
                //console.log("five"+five);
                deletenum = getlength(five)+1;
                //console.log("pointb"+points);
                points=points.slice(deletenum);
                //console.log("DeleteNum"+deletenum)
                //console.log("after"+points)
                //console.log("aftertot"+tot)
            }
            
        }
        
        console.log(multiplier);
        console.log(profit);
        
     }, 100);
    const slider = document.getElementById('myRange');
    slider.oninput = function() {
        
        const sliderValue = this.value;
        //console.log(sliderValue);
        var sliderviewboxoutput =  autoval+" 0 500 500";
        //console.log(sliderviewboxoutput);
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
        daypop = 1;
        //show ui about day ending
        points = tot;
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
            setTimeout(function(){
                daypop = 0;
            }, 3000);
        }, 1000);
        
    }
    function getlength(number) {
        return number.toString().length;
    }
    function sell() {
        
        whensold = curval;
        console.log("profit"+profit);
        console.log("multiplier"+multiplier);
        console.log("sold for "+whensold+"!");
        multiplier = 0;
        profit = profit+money*multiplier-money;
        money = money + money*multiplier-money
    }
    function buy() {
        whenbought = curval;
        console.log("bought for "+whenbought+"!");
    }
});
