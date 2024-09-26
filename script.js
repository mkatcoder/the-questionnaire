const form = document.querySelector(".form");
const submitButton = document.querySelector("#button");
const clearButton = document.querySelector("#clear");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(`https://polinashneider.space/user`, {
    method: 'POST', 
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: mkatcoder' 
    },

    body: JSON.stringify({
      "name": document.querySelector("#name").value,
      "secondName": document.querySelector("#secondName").value,
      "phone": document.querySelector("#phone").value,
      "email": document.querySelector("#email").value,
      "agree": document.querySelector("#agree").checked
    }),

  })
  
  .then((result) => {
    return result.json();
})  

  .then((reply) => {
      return notifyUser("Данные успешно отправлены!", "success");
      form.reset();
    })

  .catch((error) => {
    return notifyUser("Ошибка при отправке данных на сервер", "failure");
  });
});

function notifyUser(message, type) {
  const notification = document.createElement("div");
  if (type === "success") {
    notification.classList.add("success"); //добавила в CSS .success
  } else {
    notification.classList.add("failure"); // //добавила в CSS .failure
  }
  
  notification.textContent = message;

  form.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}