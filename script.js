document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-button").addEventListener("click", function () {
      const answers = {
        q1: "A", 
        q2: "C", 
        q3: "B", 
        q4: "A"
      };
      let score = 0;
      let totalQuestions = Object.keys(answers).length;
      const questions = document.querySelectorAll(".question");
      questions.forEach((question) => {
        question.classList.remove("correct", "incorrect", "transition");
      });
      for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        const questionElement = document.querySelector(`input[name="${question}"]`).closest(".question");
 
        if (userAnswer) {
          if (userAnswer.value === answers[question]) {
            score++;
            questionElement.classList.add("correct", "transition");
          } else {
            questionElement.classList.add("incorrect", "transition");
          }
        } else {
          // Pas de réponse cochée
          questionElement.classList.add("incorrect", "transition");
        }
      }
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <p>Votre score : ${score}/${totalQuestions}</p>
        ${
          score === totalQuestions
            ? "<p>Bravo c'est ca !🎉 tu est trop fort🥳</p>"
            : "<p>👎revise un peu plus stp👎</p>"
        }
      `;
      resultDiv.style.color = score === totalQuestions ? "green" : "red";
    });
  });