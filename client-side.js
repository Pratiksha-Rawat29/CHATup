const socket = io();

document.querySelector("button").onclick = () => {
  const sender = document.getElementById("senderName").value;
  const receiver = document.getElementById("receiverName").value;
  const message = document.getElementById("messageInput").value;

  socket.emit("privateMessage", { sender, receiver, message });
};

socket.on("newMessage", ({ sender, message }) => {
  const msgBox = document.createElement("div");
  msgBox.innerText = `${sender}: ${message}`;
  document.getElementById("messages").appendChild(msgBox);
});
