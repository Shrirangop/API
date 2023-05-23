let output = document.getElementById('output');
function fetchData() {
   fetch('https://anapioficeandfire.com/api/characters/583')
   .then(response => response.json())
   .then(data => {
      output.innerHTML += "Name = " + data.name + "<br/>";
      output.innerHTML+= "Gender = "+ data.gender + "<br/>";
    
   })
}