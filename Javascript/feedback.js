const feedback = [
  document.getElementById("uname"),
  document.getElementById("email"),
  document.getElementById("salary"),
  document.getElementById("priority"),
  document.getElementById("subject"),
];

const button = document.querySelector("#submit");

const [uname, email, salary, priority, subject] = [
  document.getElementById("uname").value,
  document.getElementById("email").value,
  document.getElementById("salary").value,
  document.getElementById("priority").value,
  document.getElementById("subject").value,
];
const requestObject = { uname, email, salary, priority, subject };

const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:4000/posts ", {
      method: "POST",
      body: JSON.stringify(requestObject),
      headers: { "'Content-type'": "'appilication/json'; charset=UTF-8" },
    });
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log({ message: error.message });
  }
};

button.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetchData();
  feedback.forEach((el) => {
    if (el.value === "") return;
    el.value = "";
  });
});
