
var num1="",num2="",result;
var a,b;
var choice=0;
var operator;
document.querySelector("#b0").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});

document.querySelector("#b1").addEventListener("click",function(){
    
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});

document.querySelector("#b2").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});
document.querySelector("#b3").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});
document.querySelector("#b4").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});
document.querySelector("#b5").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});
document.querySelector("#b6").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});
document.querySelector("#b7").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});
document.querySelector("#b8").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});
document.querySelector("#b9").addEventListener("click",function(){
    if(choice==0){
        num1= num1 + this.innerHTML;
        $(".screen").text(num1);
    }
    else if(choice==1){
        num2 = num2 +this.innerHTML;
        $(".screen").text(num1+" "+operator+" "+num2);
    }
    
});



$(".c").click(function(){
    operator= "c";
    choice=0;
    $(".screen").text("");
    num1="";
    num2="";
})

$(".add").click(function(){
    operator="+";
    choice=1;
})

$(".sub").click(function(){
    operator = "-";
    choice=1;
})
$(".multiply").click(function(){
    operator= "*";
    choice=1;
})

$(".divide").click(function(){
    operator="/";
    choice=1;
})
$(".mod").click(function(){
    operator="%";
    choice=1;
})
$(".pow").click(function(){
    operator="^";
    choice=1;
})


$(".equal-to").click(function(){
    switch(operator){
        case "+":
            a=parseInt(num1);
            b=parseInt(num2);
            result = a+b;
            $(".screen").text(result);
            break;
        case "-":
            a=parseInt(num1);
            b=parseInt(num2);
            result = a-b;
            $(".screen").text(result);
            break;
        case "*":
            a=parseInt(num1);
            b=parseInt(num2);
            result = a*b;
            $(".screen").text(result);
            break;
        case "/":
            a=parseInt(num1);
            b=parseInt(num2);
            result = a/b;
            $(".screen").text(result);
            break;
        case "%":
            a=parseInt(num1);
            b=parseInt(num2);
            result = a%b;
            $(".screen").text(result);
            break;
        case "^":
            a=parseInt(num1);
            b=parseInt(num2);
            result = Math.pow(a,b);
            $(".screen").text(result);
            break;
        default:
            break;
            
    }
})


