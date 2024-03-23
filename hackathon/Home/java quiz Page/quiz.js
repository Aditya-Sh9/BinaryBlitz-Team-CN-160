(function() 
 {
  var allQuestions = [{
    question: "Which type of JavaScript language is ___",
    options: ["Object-Oriented", "Object-Based", "Object-Based", "High-level"],
    answer: 1
  }, {
    question: "Which one of the following also known as Conditional Expression:",
    options: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
    answer: 3
  }, {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    options: ["Global variables", "The local element", "The two of the above","None of the above"],
    answer: 1
  },{
    question: "If a function which does not return a value is known as _____",
    options: ["Static function", "Procedures", "Method", "Dynamic function"],
    answer: 0
  }, {
    question: " Which one of the following code is equivalent to call a function 'x' of the class 'a' which have two arguments g and h?",
    options: ["a,x(g,h);", "x(g) &&a.x(g);", "x(a,g);", "(g,h);"],
    answer: 1
  },{
    question: "TBoth the 'rduucedRight()' and 'reduce()' methods follow which one of the following common operation?",
    options: ["inject and fold", "filter and fold", "finger and fold", "fold"],
    answer: 0
  },{
    question: "Which one of the following method or operator is used for identification of the array?",
    options: ["Typeof", "==", "===", "isarrayType()"],
    answer: 3
  },{
    question: " A collection of elements of the same data type which may either in order or not, is called _____.",
    options: ["String", "Array", "Serialized Object", "Object"],
    answer: 1
  },{
    question: "A set of unordered properties that, has a name and value is called______",
    options: ["String", "Array", "Serialized Object", "Object"],
    answer: 3
  },{
    question: "Which one of the following is not considered as 'statement' in the JavaScript?",
    options: ["use strict", "debugger", "if", "with"],
    answer: 0
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
        var resultContainer = $('<div>', { id: 'result-container', style: 'text-align: center;' });
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        resultContainer.append(score);
        return resultContainer;
        
  }
})();