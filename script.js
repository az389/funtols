function addNote() {
  let subject = document.getElementById("subject").value;
  let text = document.getElementById("noteInput").value;

  if (text === "") return;

  let div = document.createElement("div");
  div.className = "note";
  div.innerHTML = `<b>${subject}:</b> ${text}`;

  document.getElementById("notes").appendChild(div);

  document.getElementById("noteInput").value = "";
}