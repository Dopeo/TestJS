const url = "https://script.google.com/macros/s/AKfycbxDhgYQej60BEluWyMgyi6F0kA07qKzEQLysNaMyS1cj_wzx-INY51LA241RE8we2-zEA/exec"


function testGS(){

      fetch(url)
      .then(d => d.json())
      .then(d => {
      document.getElementById("app").textContent = d[0].status;
      });

}

document.getElementById("btn").addEventListener("click", testGS);