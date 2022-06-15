  /*
  Arrays to store the messages and the descriptions
  */
  const conversation = ['Hiya how\'s it going!', 'I\'m good thanks', 'What are you doing tonight?',  'Not much', 'Ok fair enough',  ]
  const people = ['John', 'Jane', 'Bob', 'Mary', 'Steve'];
  const ages = [34, 80, 25, 36, 19];
  const jobs = ['Chef', 'Retired army veteran', 'Waiter', 'Builder', 'Cartographer'];
  const hobbies = ['Hiking', 'Reading', 'Playing Chess', 'Playing the Piano', 'Gardening'];
  const hobbiesDescriptions = ['I love to go hiking', 'I love to read', 'I love to play chess', 'I love to play the piano', 'I love to garden'];
  /*
  Counters used to iterate through the arrays
  */
  let countConversation = 0;
  let countUsers = 0;
  let conversationLoop = 0

  /*
  Getter methods for retrieving data*/
  function getMessage() {
    return conversation[countConversation];  
  }
  function getUser() {
    return people[countUsers]
  }
  function getAge(){
    return ages[countUsers];
  }
  function getJob(){
    return jobs[countUsers];
  }
  function getHobbies(){
    return hobbiesDescriptions[countUsers];
  }
  function generateDescription(){
    let messageString = getUser() + "<br></br>" + getAge() + " years old<br></br>" + "Is currently a " + getJob() + "<br></br>" + getHobbies();
    return messageString;
  }
  var interval;
  //Interval used to build a new message every 5 seconds
  function start(){
    interval = setInterval(function() {
      var tag = document.createElement("p");
      tag.style.textAlign = 'left';
      var text = document.createTextNode(getUser() + " - " + getMessage() );
      tag.appendChild(text);
      var element = document.getElementById("newMessage");
      element.style.textAlign = 'right';
      element.appendChild(tag);
      var description = document.getElementById("description");
      description.innerHTML = generateDescription();
      checkCount()
    }, 1000);
  }
  

  //Function to check if the counters have reached the end of the arrays
  function checkCount(){
    countConversation++;
    countUsers++;
    if(countConversation > conversation.length - 1){
      countConversation = 0;
      conversationCount();
    }
    if(countUsers > people.length - 1){
      countUsers = 0;
    }
  }
  //Clears the chat after conversation repeats thrice.
  function conversationCount(){
    conversationLoop++;
    if(conversationLoop == 3){
        clearMessages();
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

    //Function to clear the conversation
   function clearMessages(){
    var element = document.getElementById("newMessage");
    element.innerHTML = "";
    countConversation = 0;
    countUsers = 0;
    var description = document.getElementById("description");
    description.innerHTML = "";
 }

 start();
  
