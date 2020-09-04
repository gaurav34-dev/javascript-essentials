let str=window.prompt("enter the string");
var char=["suresh","rajesh","raju","lucky","ram","amrusha","nevil","jignesh","ramlingam","gopal"];
//char.forEach(function (a) {
 // if(char==a)
 // {
  //	document.write("the element "+char+" is found");
  //	break;
  //}
 //}
 for (var i = 0; i < char.length; i++) {
    
if(str==char[i])
{   document.write("character found");
    document.write('<br/>')
	document.write("I found out  "+str+" at the position "+(i+1));
	break;
}
}
document.write('<br/>')
if(i==char.length)
{   document.write("character not found");
}