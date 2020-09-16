window.onload = function () {
  let initialbuses = [
    //{
      //name: "rajhans",
      //source: "rajwada",
      //destination: "surya nagar",
      //number: 2345,
      //passengercapacity:500
    //},
    //{
      //name: "volvo",
      //source: "devi nagar",
      //destination: "gurudwara",
      //number: 454545,
      //passengercapacity:600
    //},
    //{
      //name: "chouhantravels",
      //source: "bhopal",
      //destination: "dewas",
      //number: 656565,
      //passengercapacity:700
    //}
  ];

  if (localStorage.getItem("buses") == null) {
    localStorage.setItem("buses", JSON.stringify(initialbuses));
  }
};

function display(bus = undefined) {
  let tabledata = "";
  let buses;
  if (bus == undefined) {
    buses = JSON.parse(localStorage.getItem("buses"));
  } else {
    buses = bus;
  }

  buses.forEach(function (bus, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.passengercapacity}</td>
      <td>
      <button onclick='deleteBus(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display();

function addBus(e) {
  e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let passengercapacity = document.getElementById("passengercapacity").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = number;
  bus.passengercapacity=passengercapacity;

  //   superheroes.push(superhero);

  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
  localStorage.setItem("buses", JSON.stringify(buses));

  display();

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("number").value = "";
  document.getElementById("passengercapacity").value = "";
}

function searchBySource() {
  let searchSource = document.getElementById("searchSource").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return (
      bus.source.toUpperCase().indexOf(searchSource.toUpperCase()) != -1
    );
  });
  //document.write(newdata);
  display(newdata);
}

function searchByDestination() {
  let searchDestination = document.getElementById("searchDestination").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return (
      bus.destination.toUpperCase().indexOf(searchDestination.toUpperCase()) != -1
    );
  });
  //document.write(newdata);
  display(newdata);
}

function deleteBus(index) {
  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.splice(index, 1);
  localStorage.setItem("buses", JSON.stringify(buses));
  display();
}

let updateIndex;

function copyBus(index) {
  let buses = JSON.parse(localStorage.getItem("buses"));
  updateIndex = index;
  let bus = buses[index];

  document.getElementById("upname").value = bus.name;
  document.getElementById("upsource").value = bus.source;
  document.getElementById("updestination").value = bus.destination;
  document.getElementById("upnumber").value = bus.number;
  document.getElementById("uppassengercapacity").value=bus.passengercapacity;
}

function updateBus(e) {
  e.preventDefault();
  let buses = JSON.parse(localStorage.getItem("buses"));
  let bus = buses[updateIndex];
  console.log(bus);
  let name = document.getElementById("upname").value;
  let source = document.getElementById("upsource").value;
  let destination = document.getElementById("updestination").value;
  let number  = document.getElementById("upnumber").value;
  let passengercapacity = document.getElementById("uppassengercapacity").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = number;
  bus.passengercapacity = passengercapacity;

  localStorage.setItem("buses", JSON.stringify(buses));
  display(buses);

  // code for hiding from anywhere
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

function showModal(index) {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

  copyBus(index);
}

//function hideModal(event) {
  //if (event.target.className == "modal") {
    //let modal = document.getElementsByClassName("modal")[0];
    //modal.style.display = "none";
  //}
//}