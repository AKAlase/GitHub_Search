let input = document.getElementById("input");

input.addEventListener("keyup", e => {
  let value = e.key;
  //   console.log(value);
  if (value === "Enter") {
    let a = input.value;
    console.log(a);
    fetchdata(a);
  }
});

async function fetchdata(name) {
  let data = await fetch(`https://api.github.com/users/${name}`);
  let user = await data.json();
  let templet = document.getElementById("right-aside");
  //   console.log(templet);
  templet.innerHTML = `<div class="container">
    <img src="${user.avatar_url}" alt="${user.login}" />
    <main>
    <h1>Name: ${user.login}</h1>
    <p>Designation : ${user.bio}</p>
    <p>company : ${user.company}</p>
    </main>
    </div>`;
}

//https://api.openweathermap.org/data/2.5/weather?q=mandya&appid=d27d7e897161348af37fe62ba39aac9e
