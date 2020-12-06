let headerText = "Everything you need to know about Node JS!";
let postText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const inputNode = document.getElementById('header-edit');
const textNode = document.getElementById('post-description-edit');

function displayData() {
  document.getElementById('post-description').innerText = postText;
  document.getElementById('post-header-text').innerText = headerText;
}

function toggleEditSaveAction() {
  document.getElementById('edit-btn').classList.toggle('hidden');
  document.getElementById('save-btn').classList.toggle('hidden');
  document.getElementById('post-header-text').classList.toggle('hidden');
  inputNode.classList.toggle('hidden');
  document.getElementById('post-description').classList.toggle('hidden');
  textNode.classList.toggle('hidden');
}

function editPost() {
  toggleEditSaveAction();
  inputNode.value = headerText;
  textNode.value = postText;
  textNode.focus();
}

function savePost() {
  headerText = inputNode.value;
  postText = textNode.value;
  toggleEditSaveAction();
  displayData();
}

let noOfLikes = 0;
const likeTextDiv = document.getElementById('like-text');
function likePost() {
  noOfLikes++;
  likeTextDiv.innerText = `${noOfLikes} person${noOfLikes===1 ? '': 's'} like${noOfLikes===1 ? 's': ''} this!`
}

const commentBox = document.getElementById('comment-box');
const commentSection = document.getElementById('all-comments');
function addComment() {
  if(!commentBox.value) {
    return;
  }
  const commentNode = document.createElement('p');
  commentNode.innerHTML = commentBox.value;
  commentSection.insertBefore(commentNode, commentSection.firstChild);
  commentBox.value = '';
}

window.onload = displayData;