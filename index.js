const registerDetails = document.querySelector("#add");
registerDetails.addEventListener("submit", function (event){
    event.preventDefault()

    console.log("successfully registered");
});
function buttonClicked () {
    document.getElementById('button1').addEventListener('click', function() {
        alert('Thank you for your order!');
      });
      
      document.getElementById('button2').addEventListener('click', function() {
        alert('Thank you for your order!');
      });
      
      document.getElementById('button3').addEventListener('click', function() {
        alert('Thank you for your order!');
      });
}
document.addEventListener('DOMContentLoaded', function() {
    buttonClicked();
  });
 
function getDogImage() {
    const dogImageLoad = document.getElementById('dogImage');
    const adoptButton = document.getElementById('adoptButton');
    const url = 'https://dog.ceo/api/breeds/image/random';
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const dogImage = data.message;
          dogImageLoad.src = dogImage;
        })
        .catch(error => {
          console.error('Error fetching pic', error);
        });
    function adoptDog() {
            alert('Thank you for considering adopting this lovely dog!');
        }

    adoptButton.addEventListener('click', function() {
            adoptDog();
        });
    }

document.addEventListener('DOMContentLoaded', function() {
    getDogImage()
})
const reviewForm = document.getElementById('consumer-review');
reviewForm.addEventListener('submit',event=>{
    event.preventDefault()
    const text =document.getElementById('review');
    const textValue = text.value;
    const addChild = document.createElement('li');
    const textNode = document.createTextNode(textValue);
    addChild.appendChild(textNode);
    document.getElementById('reviewList').appendChild(addChild);
})


