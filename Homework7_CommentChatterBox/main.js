let allComments = [
  {
    id: 1,
    username: "Sorina",
    text: "random() Returns a random number between 0 and 1",
  },
  {
    id: 2,
    username: "Sorina",
    text: "forEach() Perform an action on every item in the list",
  },
  {
    id: 3,
    username: "Sorina",
    text: "slice() method extracts a part of a string.",
  },
];

let comments = document.getElementById("comments");

function generateComments() {
  comments.innerHTML = "";
  allComments.forEach((comment, index) => {
    comments.innerHTML += `<div class="input-group mb-3 addedcomments"><textarea class="form-control newcomment">${comment.username}: ${comment.text} </textarea> <button type="button" class="btn btn-outline-secondary btn-danger closebtn" aria-label="Close" onclick="deleteComment(${index})">X</button></div>`;
  });
}

generateComments();

function deleteComment(id) {
  console.log(id);
  allComments.splice(id, 1);
  generateComments();
}

let comment = document.getElementById("comment");
let addcommentbtn = document.getElementById("addcommentbtn");

function addcomment() {
  allComments.push({
    id: Date.now() + Math.floor(Math.random() * 1000),
    username: "Sorina",
    text: `${comment.value}`,
  });
  console.log(allComments);
}

function clearField() {
  comment.value = "";
}

addcommentbtn.addEventListener("click", () => {
  if (comment.value === "") {
    alert("Please add a comment");
  } else {
    addcomment();
    generateComments();
    clearField();
  }
});
