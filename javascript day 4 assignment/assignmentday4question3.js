var avengers = [   
{
   name: "Shaktimaan",
    age: 15,
   country: "india",
   hobbies:["reading","writing","long tennis","badminton"]
  },
  {
    name: "Captain America",
    age: 27,
    country:"austrailia",
    hobbies:["spellchecking","cricket","kabbadi","kho kho"]
  },
 {
    name: "Ironman",
    age: 43,
    country:"india",
    hobbies:["carrom","texting","gaming","running"]
  },
  {
  	name:"Spiderman",
  	age:34,
  	country:"russia",
  	hobbies:["betting","cooking","coding","painting"]
  },
  {
  	name:"Batman",
  	age:28,
  	country:"germany",
  	hobbies:["skating","drinking","messaging","instagramming"]
  } 
];

function Age(){
	for(var i=0;i<avengers.length;i++)
	{    if((avengers[i].age)<30)
	{   document.write(avengers[i].name);
		document.write("<br>")
		document.write(avengers[i].age);
		document.write("<br>")
		document.write(avengers[i].country);
		document.write("<br>")
		document.write(avengers[i].hobbies);
		document.write("<br>")
		document.write("<br>")
	}
	}
}

function Country(){
	for(var i=0;i<avengers.length;i++)
	{    if((avengers[i].country)=="india")
	{   document.write(avengers[i].name);
		document.write("<br>")
		document.write(avengers[i].age);
		document.write("<br>")
		document.write(avengers[i].country);
		document.write("<br>")
		document.write(avengers[i].hobbies);
		document.write("<br>")
		document.write("<br>")
	}
	}
}
