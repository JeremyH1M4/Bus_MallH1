const BT = document.getElementById("A2");
BT.addEventListener("click", function() {
    window.location.href = "page.html";
});

//array for 3 baseplate images

const divImage = document.getElementById("Container");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
let count = 0;

// Constructor function for images

function img(name, imagepath) {
    this.name = name;
    this.imagepath = imagepath;
    this.clicks = 0;
    this.views = 0;
}

// Array to hold all images
Images.allImages = [];

Images.allImages.push(new img("bag", "./images/bag.jpg"));
Images.allImages.push(new img("banana", "./images/banana.jpg"));
Images.allImages.push(new img("bathroom", "./images/bathroom.jpg"));
Images.allImages.push(new img("boots", "./images/boots.jpg"));
Images.allImages.push(new img("breakfast", "./images/breakfast.jpg"));
Images.allImages.push(new img("bubblegum", "./images/bubblegum.jpg"));
Images.allImages.push(new img("chair", "./images/chair.jpg"));
Images.allImages.push(new img("cthulhu", "./images/cthulhu.jpg"));
Images.allImages.push(new img("dog-duck", "./images/dog-duck.jpg"));
Images.allImages.push(new img("dragon", "./images/dragon.jpg"));
Images.allImages.push(new img("pen", "./images/pen.jpg"));
Images.allImages.push(new img("pet-sweep", "./images/pet-sweep.jpg"));
Images.allImages.push(new img("scissors", "./images/scissors.jpg"));
Images.allImages.push(new img("shark", "./images/shark.jpg"));
Images.allImages.push(new img("sweep", "./images/sweep.jpg"));
Images.allImages.push(new img("tauntaun", "./images/tauntaun.jpg"));
Images.allImages.push(new img("unicorn", "./images/unicorn.jpg"));
Images.allImages.push(new img("water-can", "./images/water-can.jpg"));
Images.allImages.push(new img("wine-glass", "./images/wine-glass.jpg"));
Images.allImages.push(new img("shark", "./images/.jpg"));


//render images
Images.Prototype.renderImage = function(image, tile){
    image.src = this.imagepath;
    title.context = this.name;
    this.views++;
}

function randomizeArray() {
    let RandomArray = Images.allImages;
    let randomArray = RandomArray.sort(function(){return (Math.random()-0.5)});
}

function getThreeImages(){
    randomizeArray();
  let img1 = Images.allImages[0];
  let img2 = Images.allImages[1];
  let img3 = Images.allImages[2];
  img1.renderImages(imgContainer1);
  img2.renderImages(imgContainer2,);
  img3.renderImages(imgContainer3,);
};

//Input array in storage
function putArrayInStorage(){
    let stringArray = JSON.stringify(Images.allImages);
    if (stringArray = []){
        localStorage.setItem('images', stringArray);
    }
    else(localStorage.setItem('images', stringArray));
}

// Output array from storage
function getArrayFromStorage(){
    let storedImage = localStorage.getItem('images');
    if(storedImage){
        let newImage = JSON.parse(storedImage);
        for(let images of newImage){
            let myNewImage = new Images(images.name, images.imgPath, images.views, images.clicks);
            Images.allImages.push(myNewImage)
        }
    }
}
//Revomes images
function removeImages(){
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
}

//Changes/randomizes image
function handleClick(E){
    let imageClicked = E.target.id;
    if(imageClicked === 'img1' || imageClicked === 'img2' || imageClicked === 'img3'){
        count++;
    }
    if(imageClicked === 'img1'){
        Images.allImages[0].clicks++;
    }    
    if(imageClicked === 'img2'){
        Images.allImages[1].clicks++;
    }
    if(imageClicked === 'img3'){
        Images.allImages[2].clicks++;
    } 
    getThreeImages(); 
    if (count === 5){
        removeImages();
        document.write('<h1>Survey Concluded</h1>');
        console.log(Images.allImages);
    }
    putArrayInStorage();
}



mainContainer.addEventListener('click', handleClick);
console.log(Images);
getArrayFromStorage();
getThreeImages();