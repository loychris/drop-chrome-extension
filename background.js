console.log("Backgroundscript running");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request.message);

      const xhr = new XMLHttpRequest();
      const url='http://localhost:5001/api/extension/' + request.destination;
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(JSON.stringify(request));
  
      xhr.onreadystatechange = (e) => {
      console.log(xhr.responseText)
      }
    }


);