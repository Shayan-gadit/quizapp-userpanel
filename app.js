


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWAMdHwDAlN7Hdo8o4HSr_LGoYxAJjVcw",
    authDomain: "quiz-app-database-shayan.firebaseapp.com",
    projectId: "quiz-app-database-shayan",
    storageBucket: "quiz-app-database-shayan.appspot.com",
    messagingSenderId: "129601985544",
    appId: "1:129601985544:web:aa43f88a17bc500cd145bd",
    measurementId: "G-7GRBBPYQRB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  function getDataFromDatabase(){
    var reference = ref(database,'question/');
    onChildAdded(reference, function(data){
        console.log(data.val());
        questions.push(data.val());
        renderQuestion()

    })
  }

  getDataFromDatabase()

// database upper

var questions = [ //question Array

];

// var Username = prompt("enter Your Name");
var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');
var question = document.getElementById('question');
var answerParent = document.getElementById('answerParent');

var indexNum = 0
var score = 0

window.checkQuestion = function (a, b) {
    if (a == b) {
        score++;
        console.log(score);
    }
    nextQuestion();
}

window.nextQuestion= function() {
    if(indexNum + 1 == questions.length){
       alert("your score is " + score ) 

    }else{
        indexNum++;
        renderQuestion();
    }
       
}


function renderQuestion() {
    
        currentQuestion.innerHTML = indexNum + 1
    totalQuestion.innerHTML = questions.length
    var obj = questions[indexNum]
    question.innerHTML = questions[indexNum].question
        answerParent.innerHTML = "";
        // currentQuestion.innerHTML = "";
    for (var i = 1; i < obj.options.length; i++) {
        answerParent.innerHTML += `<div class="col-md-4">
    <div class="py-2">
        <button onclick = "checkQuestion('${obj.options[i]}','${obj.correctAnswer}')"  class="btn btn-dark fs-3 rounded-pill w-100">${obj.options[i]}</button>
    </div>
</div>`
    }
    

}
renderQuestion()




