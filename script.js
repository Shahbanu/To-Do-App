
//let's target all the ID selectors from the HTML in JavaScript
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//build a submit event listener for the form 

form.addEventListener('submit',(e) =>{
  e.preventDefault();
  console.log("button clicked");

  formValidation();
})
//It help us prevent users from submitting blank input fields. 

let formValidation = () => {
  if(input.value === "" ){
    msg.innerHTML ="Post cannot be blank";
    console.log('failure');
  }else{
    console.log("Success");
    msg.innerHTML="";
    acceptData();
  }
};


//Create an object named data. And, create a function named acceptData

let data ={};//we collect data from the inputs and store them in our object named data
let acceptData= () => {
  data["text"]=input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML +=  
  `<div>
  <p>${data.text}</p>
  <span class="options">
    <div get></div>
    <i onclick="editPost(this)" class="fas fa-edit"></i>
    <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
  </span>
</div>
`;
input.value="";
};

//Delete Post

let deletePost = (e) =>{
e.parentElement.parentElement.remove();
};

//Edit Post
 let editPost = (e) =>{
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
 };
