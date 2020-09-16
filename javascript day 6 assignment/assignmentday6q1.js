let superheroes = [
  {
    name: "Thor",
    age: 40,
    city: "Indore",
    salary:50000 ,
  },
  {
    name: "Iron Man",
    age: 34,
    city: "Delhi",
    salary:35000,
  },
  {
    name: "Captain America",
    age: 45,
    city:"Gurgaon" ,
    salary:25000 ,
  },
  {
    name:"Spiderman",
    age:55,
    city:"Uttarakhand",
    salary:20000
  },
  {name:"Batman",
   age:60,
   city:"Faridabad",
   salary:15000
  }
];

function display(superarray) {
  let tabledata = "";

  superarray.forEach(function (superhero, index) {
    let currentrow = `<tr>
    <td>${index + 1}</td>
    <td>${superhero.name}</td>
    <td>${superhero.age}</td>
    <td>${superhero.city}</td>
    <td>${superhero.salary}</td>
    <td>
    <button onclick='deleteSuperhero(${index})'>delete</button>
    <button onclick='showModal(${index})'>update</button>
    </td>
    </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display(superheroes);

function addSuperhero(e) {
  e.preventDefault();
  let superhero = {};
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;
  let salary = document.getElementById("salary").value;
  superhero.name = name;
  superhero.age = Number(age);
  superhero.city = city;
  superhero.salary = Number(salary);

  superheroes.push(superhero);

  display(superheroes);

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";
  document.getElementById("salary").value = "";
}

function searchByName() {
  let searchValue = document.getElementById("searchName").value;

  let newdata = superheroes.filter(function (superhero) {
    return (
      superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}

function searchByCity() {
  let searchValue = document.getElementById("searchCity").value;

  let newdata = superheroes.filter(function (superhero) {
    return (
      superhero.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}

function deleteSuperhero(index) {
  superheroes.splice(index, 1);
  display(superheroes);
}

let updateIndex;

function copySuperhero(index) {
  updateIndex = index;
  let superhero = superheroes[index];

  document.getElementById("upname").value = superhero.name;
  document.getElementById("upage").value = superhero.age;
  document.getElementById("upcity").value = superhero.city;
  document.getElementById("upsalary").value = superhero.salary;
}

function updateSuperhero(e) {
  e.preventDefault();
  let superhero = superheroes[updateIndex];
  console.log(superhero);
  let name = document.getElementById("upname").value;
  let age = document.getElementById("upage").value;
  let city = document.getElementById("upcity").value;
  let salary = document.getElementById("upsalary").value;
  superhero.name = name;
  superhero.age = Number(age);
  superhero.city = city;
  superhero.salary = Number(salary);
  console.log(superhero);

  display(superheroes);

  // code for hiding from anywhere
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

function showModal(index) {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

  copySuperhero(index);
}

//function hideModal(event) {
  //if (event.target.className == "modal") {
   // let modal = document.getElementsByClassName("modal")[0];
    //modal.style.display = "none";
  //}
//}