const form = document.querySelector('.form');
const complaintsList = document.querySelector('.complaints-list');

form.addEventListener('click', handleFormClick);
complaintsList.addEventListener('click', handleToggleClick);

function handleFormClick(event) {
  console.log(event.target.dataset.borough);
  event.preventDefault();
  // get the borough of the button
  const borough = event.target.dataset.borough;
  // get the input from user
  const userInput = document.querySelector('.number-of-complaints').value;
  // fetch data from api
  const url = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=${borough}&$limit=${
    userInput || 10
  }`;

  fetch(url)
    .then(res => res.json())
    .then(res => {
      // clear out any old results on the page
      complaintsList.innerHTML = '';

      // alternatively, we can use removeChild() to clear out any existing results
      // why? It's more performant: https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements

      // let element = complaintsList.firstElementChild;
      // // use a loop to delete the existing li elements
      // while (element) {
      //   complaintsList.removeChild(element);
      //   element = complaintsList.firstElementChild;
      // }

      for (let i = 0; i < res.length; i++) {
        // add new <li> elements to the <ul> container
        // add the button for each <li>
        let complaintsListItem = document.createElement('li');
        complaintsListItem.innerText = res[i].descriptor;

        // add a button to each li tag
        let complaintsListItemButton = document.createElement('button');
        complaintsListItemButton.innerText = 'WHAT DID THE POLICE DO?';
        complaintsListItemButton.classList.add('complaints-list-item-button');

        // add the response to each li tag and hide it
        let policeResponseParagraph = document.createElement('p');
        policeResponseParagraph.innerText = res[i].resolution_description;
        policeResponseParagraph.classList.add('hide-response'); // add a class that we can later toggle to hide and unhide the response

        complaintsListItem.appendChild(complaintsListItemButton);
        complaintsListItem.appendChild(policeResponseParagraph);
        complaintsList.appendChild(complaintsListItem);
      }
    })
    .catch(error => console.error(error));
}

// click handler for toggling the response
function handleToggleClick(event) {
  // make sure we are clicking on a toggle button
  if (event.target.classList.contains('complaints-list-item-button')) {
    // console.log(event.target.nextSibling);
    event.target.nextSibling.classList.toggle('hide-response');
  }
}
