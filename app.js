const submit = document.getElementById('submitBtn');
const imgUrl = document.querySelector('input[type="url"]');
const srcs = imgUrl.getAttribute('src');
const inputs = document.querySelectorAll('input');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');


//CLICK SUBMIT TO ADD INFO
submit.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('submitted');
    //IF NO IMG DONT ALLOW FORM TO BE SUBMITTED
    if (imgUrl.value === '') {
        alert('gotta add a picture first!');
        return;
    }
    //CREATE ELEMENTS AND ADD IMAGE
    let meme = document.createElement('img');
    let topDiv = document.createElement('div');
    let lineOne = document.createElement('h2');
    let imgDiv = document.createElement('div');
    let bottomDiv = document.createElement('div');
    let lineTwo = document.createElement('h2');
    let box = document.getElementById('memeBox');
    const deleteBtn = document.createElement('button');

    //ASSIGN VALUES
    lineOne.textContent = topText.value;
    lineTwo.textContent = bottomText.value;
    meme.src = imgUrl.value;
    deleteBtn.innerHTML = 'X';

    //ASSIGN CLASSES
    topDiv.setAttribute('class', 'topDiv');
    imgDiv.setAttribute('class', 'imgDiv');
    bottomDiv.setAttribute('class', 'bottomDiv');
    deleteBtn.setAttribute('id', 'deleteBtn');

    //ASSIGN CHILDREN
    bottomDiv.appendChild(lineTwo);
    topDiv.appendChild(lineOne);
    imgDiv.appendChild(meme);
    imgDiv.appendChild(topDiv);
    imgDiv.appendChild(bottomDiv);
    box.appendChild(imgDiv);
    box.appendChild(deleteBtn);

    // CLEAR INPUTS
    imgUrl.value = '';
    topText.value = '';
    bottomText.value = '';

    //DELETE IMG AND BUTTON
    deleteBtn.addEventListener('click', function (e) {
        console.log(e.target);
        box.removeChild(imgDiv);
        box.removeChild(deleteBtn);
    });

});


