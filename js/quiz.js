let questions = [
    {
      id: 1,
      question: "Who invented the BALLPOINT PEN?",
      answer: "Biro Brothers",
      options: [
        "Biro Brothers",
        "Waterman Brothers",
        "Bicc Brothers",
        "Write Brothers"
      ]
    },
    { 
      id: 2,
      question: "Who invented Jet Engine?",
      answer: "Sir Frank Whittle",
      options: [
        "Sir Frank Whittle",
        "Gottlieb Daimler",
        "Roger Bacon",
        "Lewis E. Waterman"
      ]
    },
    {
      id: 3,
      question: "What James Watt invented?",
      answer: "Rotary steam engine",
      options: [
        "Diving bell",
        "Steam boat",
        "Hot air balloon",
        "Rotary steam engine"
      ]
    },
    {
      id: 4,
      question: "What invention caused many deaths while testing it?",
      answer: "Parachute",
      options: [
        "Dynamite",
        "Ladders",
        "Race cars",
        "Parachute"
      ]
    },
    {
      id: 5,
      question: "Who invented Gramophone?",
      answer: "Thomas Alva Edison",
      options: [
        "Michael Faraday",
        "Fahrenheit",
        "Sir Alexander Graham Bell",
        "Thomas Alva Edison"
      ]
    },
    {
      id: 6,
      question: "Which insurance salesman invented the fountain pen in 1884?",
      answer: "Lewis Edson Waterman",
      options: [
        "Lewis Edson Waterman",
        "Sir William Grove",
        "Charles Kettering",
        "George Fountain"
      ]
    },
    {
        id: 7,
        question: "Benjamin Franklin was a prolific inventor. He invented the lightning rod, the Franklin stove, studied electricity, discovered the Gulf Stream, started the first library, and on and on. Among his many other inventions, what musical instrument did he invent?",
        answer: "Harmonium",
        options: [
          "Banjo",
          "Oboe",
          "Harmonium",
          "Clarinet"
        ]
      },
      {
        id: 8,
        question: "What inspired reflecting road lights to be invented?",
        answer: "The light a cat's eyes gave off on a fence",
        options: [
          "Car door reflecting mirrors",
          "The light a cat's eyes gave off on a fence",
          "Sun light on steel posts on road sides",
          "The sun light on the windshield"
        ]
      },
      {
        id: 9,
        question: "Who invented the first controllable flying AEROPLANE (AIRPLANE)?",
        answer: "Wright Brothers",
        options: [
          "Wright Brothers",
          "Lidenbergh Brothers",
          "South Brothers",
          "West Brothers"
        ]
      },
      {
        id: 10,
        question: "For over 500 years, paper was only available and sold as single sheets. In 1902, an inventive Australian used half size sheets of paper, a bit of glue and cardboard to create the what?",
        answer: "Notepad",
        options: [
          "Notepad",
          "Calendar",
          "Notice Board",
          "Telephone Book"
        ]
      }
  ];
  
      let value = JSON.stringify(questions);
       localStorage.setItem("question", value);
      
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  };
  
  function next() {
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) 
    {
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 1;
      sessionStorage.setItem("points", points);
    }
    else{
      points += 0;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) 
          {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }