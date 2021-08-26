var app = new (function () {
  this.el = document.getElementById("cities");
  this.cities = [
    "Recife",
    "Natal",
    "Manaus",
    "São Paulo",
    "Fortaleza",
    "Salvador",
    "Minas Gerais",
    "Curitiba",
  ];
  this.Count = function (data) {
    var el = document.getElementById("counter");
    var name = "CITY";
    if (data) {
      if (data > 1) {
        name = "<b>CITIES</b>";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = "NO CITIES";
    }
  };

  this.FetchAll = function () {
    var data = "";
    if (this.cities.length > 0) {
      for (i = 0; i < this.cities.length; i++) {
        data += "<tr>";
        data += "<td>" + this.cities[i] + "</td>";
        data +=
          '<td><button class="btn btn-info" onclick="app.Edit(' +
          i +
          ')">Edit</button></td>';
        data +=
          '<td><button class="btn btn-danger" onclick="app.Delete(' +
          i +
          ')">Delete</button></td>';
        data += "</tr>";
      }
    }
    this.Count(this.cities.length);
    return (this.el.innerHTML = data);
  };
  this.Add = function () {
    el = document.getElementById("add-name");
    // Get the value
    var country = el.value;
    if (country) {
      // Add the new value
      this.cities.push(country.trim());
      // Reset input value
      el.value = "";
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById("edit-name");
    // Display value in the field
    el.value = this.cities[item];
    // Display fields
    document.getElementById("spoiler").style.display = "block";
    self = this;
    document.getElementById("saveEdit").onsubmit = function () {
      // Get value
      var country = el.value;
      if (country) {
        // Edit value
        self.cities.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    };
  };
  
  this.Delete = function (item) {
    // Delete the current row
    this.cities.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
})();



app.FetchAll();

function CloseInput() {
  document.getElementById("spoiler").style.display = "none";
}
