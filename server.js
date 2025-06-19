const socket = io();

// UI Elements
const userPhone = document.getElementById("userPhone");
const targetPhone = document.getElementById("targetPhone");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");
const clientCount = document.getElementById("clientCount");

// Send message on click
sendBtn.addEventListener("click", () => {
  const message = msgInput.value.trim();
  const sender = userPhone.value.trim();
  const receiver = targetPhone.value.trim();

  if (!message || !sender || !receiver) {
    alert("Please fill all fields.");
    return;
  }

  const msgData = {
    sender,
    receiver,
    message,
    timestamp: new Date().toLocaleString()
  };

  // Show your own message
  addMessageToChat(msgData, true);
  socket.emit("message", msgData);
  msgInput.value = "";
});

// Receive message from server
socket.on("chat-message", (data) => {
  addMessageToChat(data, false);
});

// Update total clients
socket.on("clients-total", (count) => {
  clientCount.textContent = `Total clients: ${count}`;
});

// Add message to chatbox
function addMessageToChat(data, isOwnMsg) {
  const div = document.createElement("div");
  div.className = isOwnMsg ? "own-msg" : "other-msg";
  div.innerHTML = `<strong>${data.sender}:</strong> ${data.message}<br><small>${data.timestamp}</small>`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
