(function() 
 {
  var allQuestions = [{
    question: "What is C++?",
    options: ["C++ is an object oriented programming language", "C++ is a procedural programming language", "C++ supports both procedural and object oriented programming language", "C++ is a functional programming language"],
    answer: 2
  }, {
    question: "Which of the following user-defined header file extension used in c++?",
    options: ["hg", "cpp", "h", "hf"],
    answer: 2
  }, {
    question: "Which of the following is a correct identifier in C++?",
    options: ["VAR_1234", "$var_name", "7VARNAME","7var_name"],
    answer: 0
  },{
    question: "Which of the following is not a type of Constructor in C++?",
    options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Friend constructor"],
    answer: 3
  }, {
    question: "Which of the following type is provided by C++ but not C?",
    options: ["double", "float", "int", "bool"],
    answer: 3
  },{
    question: "Which of the following correctly declares an array in C++?",
    options: ["array{10};", "array array[10];", "int array;", "int array[10];"],
    answer: 3
  },{
    question: "Which of the following is used to terminate the function declaration in C++??",
    options: [";", "]", ")", ":"],
    answer: 0
  },{
    question: "Which is more effective while calling the C++ functions?",
    options: ["call by object", "call by pointer", "call by value", "call by reference"],
    answer: 3
  },{
    question: "A set of unordered properties that, has a name and value is called______",
    options: ["String", "Array", "Serialized Object", "Object"],
    answer: 3
  },{
    question: "Which keyword is used to define the macros in c++?",
    options: ["#macro", "#define", "macro", "define"],
    answer: 1
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();