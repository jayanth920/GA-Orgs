var cat = {
  name: "Frisky 'Cornelius' McWhiskertons",
  pastimes: "chasing red dots, juding silly humans, and sitting on keyboards",
  start: function() {
    var catImage = document.getElementById("laser_cat");
    catImage.addEventListener("click", function() {
      console.log("My name is " + this.name + " and I like " + this.pastimes);
    });
  }
}

cat.start();
