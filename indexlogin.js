// const x = document.querySelector("#x");
// const o = document.querySelector("#o");

// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   const valX = x.value;
//   const valO = o.value;
//   if (!valX || !valO) {
//     return alert("Please Input a value");
//   }
//   localStorage.setItem("x", valX);
//   localStorage.setItem("o", valO);
//   window.location.href = "/access.html";

//   const sth = 234455;

//   localStorage.setItem("number", sth);

//   const theNumber = localStorage.getItem("number");

//   console.log(theNumber);
// });

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const form = document.querySelector("#login");

// window.localStorage.setItem("victor", JSON.stringify({ username: "james" }));

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const res = await fetch("/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });

  console.log(await res.json());
});
