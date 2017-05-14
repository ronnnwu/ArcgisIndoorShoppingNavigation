$(function(){
  $('.fa-minus').click(function(){  $(this).closest('.chatbox').toggleClass('chatbox-min');
  });
  $('.fa-close').click(function(){
    $(this).closest('.chatbox').hide();
  });
});


var question_index = 1;
var questions_AI = ["",
                "Fantastic! What would you like?",
                "Bananas, strawberries, oranges?",
                "Bananas and Grapes, copy.",
                "Will that be all?",
                "Should I add tomatoes, lettuce, bell pepper, radish?",
                "Tomatoes, lettuce, bell pepper, copy.",
                "What's next?",
                "Can I interest you in some bacon?",
                "Excellent choice."
]

$( document ).ready(function() {
    $('#buzzer0').get(0).play();
});

var order_path = ['Tomatoes',
                  'Lettuce',
                  'Pepper',
                  'Bananas',
                  'Grapes',
                  'Bacon' 
];

var order_index = 0;

function put_check(){

     setInterval(function(){

      var add_text = "<div class=\"small-3 columns\"><h2>&#10004;</h2></div>";


      $("."+ order_path[order_index] +"_col").after(add_text);

      order_index = order_index+1;
    }, 3000)
}

$('textarea').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    click_send_bn();
    return false;  
  }
});   



function click_send_bn() {

  if (question_index < 10){

    var my_insert_answer = $('textarea.chat-input').val(); 

    $('.chat-input').val('');

    var add_string = "<div class=\"message-box-holder add_stuff_chat\"><div class=\"message-box\">"+my_insert_answer+"</div></div>";
     
    $(".add_stuff_ch_AI:last").after(add_string);
 

    $('#buzzer'+question_index).get(0).play();

    var text_new =  "<div class=\"message-box-holder add_stuff_ch_AI \"><div class=\"message-sender\">Pier 36 PA</div><div class=\"message-box message-partner\">"+questions_AI[question_index] + "</div></div>";

    $(".add_stuff_chat:last").after(text_new);
  
    if (question_index == 3){

      var text_nnn = "<div class=\"row\"><div class=\"small-9 columns Bananas_col\"><h2>Bananas</h2></div></div><div class=\"row add_row_later\"><div class=\"small-9 columns Grapes_col\"><h2>Grapes</h2></div></div>";
      $(".add_row_later:last").after(text_nnn);

    }

    if (question_index == 6){
 
      var text_nnn = "<div class=\"row\"><div class=\"small-9 columns Tomatoes_col\"><h2>Tomatoes</h2></div></div><div class=\"row add_row_later\"><div class=\"small-9 columns Lettuce_col\"><h2>Lettuce</h2></div></div><div class=\"row add_row_later\"><div class=\"small-9 columns Pepper_col\"><h2>Bell Pepper</h2></div></div>";
      $(".add_row_later:last").after(text_nnn);
 
    }

    if (question_index == 9){

      var text_nnn = "<div class=\"row\"><div class=\"small-9 columns Bacon_col\"><h2>Bacon</h2></div></div>";
      
      var mare_text = text_nnn+"<br><div><iframe src=\"eris.html\" onload=\"this.width=screen.width*0.7;this.height=screen.height * 0.6;\"></iframe></div>";
      $(".add_row_later:last").after(mare_text);

      put_check();  

    }
    
  $('.chat-messages').scrollTop($('.chat-messages')[0].scrollHeight);
    question_index = question_index + 1;

  }
}