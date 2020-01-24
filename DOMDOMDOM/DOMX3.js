document.addEventListener("DOMContentLoaded", function() {
  const btn = document.createElement("button");
  btn.innerHTML = "Add Square";
  document.body.appendChild(btn);
  btn.addEventListener("click", onclick)

  let container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  let idCount = 1;

  function setRandomColor(target) {
      let randomColor = getRandomColor();
      target.style.backgroundColor = randomColor;
  }

  function onclick() {
    // Create a new square, add class and id, and append the container.
    let blksqr = document.createElement("div");
    blksqr.className = "square";
    blksqr.setAttribute("id", idCount);
    container.appendChild(blksqr);

    // Create a new span inside the square to display the id.
    let idDisplay = document.createElement("span");
    idDisplay.className = "id-display";
    idDisplay.innerText = idCount;
    blksqr.appendChild(idDisplay);

    blksqr.addEventListener('click', function(event) {
        setRandomColor(event.target);    

    blksqr.addEventListener('dblclick', function(event) {
      removeDiv(event.target);
     });

    idCount++;
  }
  

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
         
        function removeDiv(div){
            document.getElementsByClassName(square.style.display) = 'none';
           } 
    }) 
  }
});
