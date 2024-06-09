// Define messages for each mood
const messages = {
    'happy': ["“진주 is happy today” - Diana", "“HELL YEAH ITS DRINKING TIME” - Mark", "“If 진주 smiles, the world smiles with her” - Diana", "“I know your happy, please dont hit me” - Mark", "“진주 makes everyone around her happy.” - Diana", "“Smile, it suits you more” - Mark", "“It’s a beautiful day! Keep smiling” - Diana","“The feeling in which nothing can stop you :)” - Mark", ], 
    
    'sad': ["“진주 is sad today” - Diana", "“걷다가 보면 항상 이렇게 너를” - Mark","“You’re allowed to grieve as hard as you’ve loved” - Diana", "“As much as it hurts, remeber there will be a sunshine after the rain” - Mark", "“It’s a beautiful day! Keep crying” - Diana", "“Remeber, you are loved” - Mark", "“When 진주 is sad, just remember Mark can’t roll his R’s” - Diana", "“Never hesitate to reach out” - Mark"],
    
    'anxious': ["“진주 is anxious today” - Diana", "“If you can fix it, why worry? If you can't fix it then its not worth to worry about it” - Mark", "“You’ve survived a lot, and you’ll survive whatever is coming” - Diana","“Deep Breath, it will not hurt as much as you think” - Mark", "“Parts of anxiety are beautiful too. It makes you loving, giving, and mindful” - Diana", "“You thought it was the end last time, this is just another obstacle.” - Mark", "“No matter how anxious 진주 feels, just remember the worst part is over” - Diana"],
    
    'frustrated': ["“No matter how frustrated 진주 feels, just remember it’s not as bad as Jimmy’s hairline” - Diana", "“ITS VODKA TIME” - Mark", "“Bruh, someone is meeting jimmy thinking they got lucky” - Mark", "“whatever makes you feel frustrated, It cannot be worse than jimmy's hairline” - Mark"],
    
    'late-night-thoughts': ["“If nothing matters, then everything matters” - Mark", "“We are all a slave to something” - Mark", "“Can people truly understand eachother” - Mark"],
    // Add more moods and messages as needed
  };
  
  let currentMood = '';
  let messageIndex = 0;
  
  // Function to navigate to mood page
  function navigateToMood(mood) {
    currentMood = mood;
    messageIndex = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('mood').style.display = 'block';
    displayMood();
  }
  
  // Function to display mood and message
  function displayMood() {
    const moodTitle = document.getElementById('mood-title');
    const messageDiv = document.getElementById('message');
    const quoteDiv = document.getElementById('quote');
    const adjectiveDiv = document.getElementById('adjective');
  
    if (currentMood && messages[currentMood]) {
      document.body.className = currentMood; // Apply the mood-specific class to the body
      moodTitle.innerText = currentMood.replace(/-/g, ' ').toUpperCase();
      adjectiveDiv.innerText = 'phrase';
      messageDiv.innerText = messages[currentMood][messageIndex];
      quoteDiv.innerText = `"진주 is ${currentMood.replace(/-/g, ' ')} today"`;
    } else {
      moodTitle.innerText = 'MOOD: Unknown';
      messageDiv.innerText = 'No message available.';
      quoteDiv.innerText = '';
    }
  }
  
  // Function to show the next message
  function nextMessage() {
    if (currentMood && messages[currentMood]) {
      messageIndex = (messageIndex + 1) % messages[currentMood].length;
      displayMood();
    }
  }
  
  // Function to show the previous message
  function prevMessage() {
    if (currentMood && messages[currentMood]) {
      messageIndex = (messageIndex - 1 + messages[currentMood].length) % messages[currentMood].length;
      displayMood();
    }
  }
  
  // Function to go back to the home page
  function goHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('mood').style.display = 'none';
    document.body.className = ''; // Remove any mood-specific class
  }
  
  // Initialize page
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
      navigateToMood(window.location.hash.substring(1));
    }
  });