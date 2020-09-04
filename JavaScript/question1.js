var str=window.prompt("enter the string");
var char=window.prompt("character you want to search");
//document.write("hey this is my name "+ char + '<br/>'+ str);
for(var i=0;i<str.length;i++)
{
	if(char==str.charAt(i))
	{ 
	document.write("I found out  "+char+" at the index "+i);
	break;
	}
}
document.write('<br/>')
if(i==str.length)
{   document.write("character not found");
}
else
{
	document.write("character found");
}


