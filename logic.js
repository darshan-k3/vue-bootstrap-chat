  /*
  Arrays to store the messages and the descriptions
  */
  const conversation = ['Hiya how\'s it going!', 'I\'m good thanks', 'What are you doing tonight?',  'Not much', 'Ok fair enough',  ]
  const users = {'John' : 'Name: John<br></br> Age: 34 <br></br> Works as a chef<br></br> Is great fun.', 'Jane' :'Name: Jane<br></br> Age: 25 <br></br> Works as a chef<br></br> Likes gardening.', 'Bob': 'Name: Bob<br></br> Age: 80<br></br> Retired - likes playing chess in his spare time<br></br> Likes playing the piano', 'Mary':'Name: Mary<br></br> Age: 34<br></br> Works as a chef<br></br> Is great fun.', 'Steve': 'Name: Steve<br></br> Age: 34<br></br> Works as a chef<br></br> Is great fun.'}
  /*
  Counters used to iterate through the arrays
  */
  let countConversation = 0;
  let countUsers = 0;

  /*
  Getter methods for retrieving data*/
  function getMessage() {
    return conversation[countConversation];  
  }
  function getUser() {
    return Object.keys(users)[countUsers]
  }
  function getDescription() {
    return users[getUser()]
  }

  //Interval used to build a new message every 5 seconds
  const interval = setInterval(function() {
    var tag = document.createElement("p");
    tag.style.textAlign = 'left';
    var text = document.createTextNode(getUser() + " - " + getMessage() );
    tag.appendChild(text);
    var element = document.getElementById("newMessage");
    element.style.textAlign = 'right';
    element.appendChild(tag);
    var description = document.getElementById("description");
    description.innerHTML = getDescription();
    checkCount()
  }, 5000);
  //Function to check if the counters have reached the end of the arrays
  function checkCount(){
    countConversation++;
    countUsers++;
    if(countConversation > conversation.length - 1){
      countConversation = 0;
    }
    if(countUsers > Object.keys(users).length - 1){
      countUsers = 0;
    }
  }

  //Function to stop the interval
  function stop() {
    clearInterval(interval);
  }
  /*
  Function to create a new message and add it to the conversation 
  */
  function createNewMessage(){
    var tag = document.createElement("p");
    var text = document.createTextNode("You - "  + document.getElementById('userMessage').innerHTML);
    tag.appendChild(text);
    var element = document.getElementById("newMessage");
    element.appendChild(tag);
  }


  
