var y = $(".ser-x");
var x = $(".ser-btn");
x.click(function(){
    var str = (y[0].value);
    var atpos = str.indexOf("@");
    var dotpos = str.indexOf(".");
    if(str.length == 0)
    {
        alert("Mail field can't be empty");
    }
    else if(atpos < 1 || dotpos < (atpos + 2) || dotpos > str.length)
    {
        alert("wrong Email format");
    }
    else
    {
        alert("Email saved")
    }
});