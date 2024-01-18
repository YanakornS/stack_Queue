let queue = [];
const MAX_QUEUE_SIZE = 5;

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;

  if (queue.length < MAX_QUEUE_SIZE) {
    if (customerName) {
      queue.push(customerName);
      document.getElementById("customerName").value = ""; // Clear the input
      updateQueueDisplay();
    }
  } else {
    alert("Queue is full. Cannot add more customers.");
  }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
  if (queue.length > 0) {
    alert("Next customer: " + queue[0]);
    queue.shift();
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = `<h3>Queue (${queue.length}/${MAX_QUEUE_SIZE})</h3>`;

  if (queue.length === MAX_QUEUE_SIZE) {
    alert("Queue is full. Cannot add more customers.");
  }

  queue.forEach((customer, index) => {
    queueList.innerHTML += `<p>${index + 1}. ${customer}</p>`;
  });
}

function callCustomer(index) {
  alert("Calling customer: " + queue[index]);
  queue.splice(index, 1);
  updateQueueDisplay();
}
