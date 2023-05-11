const url = "https://script.google.com/macros/s/AKfycbxrgBV4ynhZpO2lfn5qlPdpnkAPPYaFvpS4lO0nRjVFRqDgfR3csqLcIuHRD8rOGVUIrA/exec"


function testGS(){

      fetch(url)
      .then(d => d.json())
      .then(d => {
      document.getElementById("app").textContent = d[0].status;
      });

}

function addGS(){


  fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {'content-Type' : 'application/json'},
      redirect: 'follow',
      body: JSON.stringify({first:"jake",email:"jCookie@gmail.com",last:"Cookie"})
  });

}

document.getElementById("btn2").addEventListener("click", addGS);
document.getElementById("btn").addEventListener("click", testGS);
