const gifs = document.querySelector('.gifs')
const submit = document.getElementById('submit')
const editSubmit = document.getElementById('submit-edit')
const deleteButton = document.getElementById('delete')
const modal = M.Modal.init(document.querySelector('#modal-edit'))
const createModal = M.Modal.init(document.querySelector('#modal-create'))

// Stores which item to edit/delete when the edit modal is up
let currentlyEditing = ''

function editModal (gif) {
  // Sets the edit modal to have the data from the gif clicked on
  modal.open()
  const nameEdit = document.getElementById('name-edit')
  const urlEdit = document.getElementById('url-edit')

  nameEdit.value = gif.name
  urlEdit.value = gif.url

  currentlyEditing = gif._id
}

function addPictures (gifData) {
  // Adds all of the gifs to the dom
  gifs.innerHTML = ''
  gifData.forEach(gif => {
    if (!gif.url) return

    const imageNode = document.createElement('img')
    imageNode.setAttribute('src', gif.url)
    imageNode.classList.add('gif')

    imageNode.addEventListener('click', () => { editModal(gif) })

    gifs.appendChild(imageNode)
  })
}

axios.get('http://localhost:3000/gifs').then(response => {
  // gets the initial data
  addPictures(response.data)
})

editSubmit.addEventListener('click', (e) => {
  // submits the put request to edit a gif
  const name = document.getElementById('name-edit').value
  const url = document.getElementById('url-edit').value

  axios.put(`http://localhost:3000/gifs/${currentlyEditing}`, {
    name,
    url
  }).then((resp) => {
    console.log(resp)
    addPictures(resp.data)
    modal.close()
  })
})

submit.addEventListener('click', (e) => {
  const name = document.getElementById('name').value
  const url = document.getElementById('url').value

  axios.post('http://localhost:3000/gifs', {
    name,
    url
  }).then((resp) => {
    addPictures(resp.data)
    createModal.close()
  })
})

deleteButton.addEventListener('click', (e) => {
  // deletes an image
  axios.delete(`http://localhost:3000/gifs/${currentlyEditing}`).then((resp) => {
    addPictures(resp.data)
    modal.close()
  })
})
