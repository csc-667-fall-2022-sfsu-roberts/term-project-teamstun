document.querySelector("#message").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    fetch("/chat/0", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: event.target.value }),
    })
      .then(() => {
        document.querySelector("#message").value = "";
      })
      .catch((error) => console.log(error));
  }
});

const messages = document.querySelector("#messages");

socket.on("chat:0", ({ sender, message, timestamp }) => {
  console.log({ sender, message, timestamp });

  const div = document.createElement("div");
  const span = document.createElement("span");
  span.innerText = sender;

  const content = document.createElement("p");

  content.innerText = message;

  div.appendChild(span);
  div.appendChild(content);

  messages.appendChild(div);
});
