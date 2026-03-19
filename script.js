'use strict'
//array for 3 baseplate images

const container = document.getElementById("container");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
let count = 0;

// Constructor function for images

function Images(name, imgPath) {
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
};

// Array to hold all images
Images.allImages = [];

Images.allImages.push(new Images("bag", "./images/bag.jpg"));
Images.allImages.push(new Images("banana", "./images/banana.jpg"));
Images.allImages.push(new Images("bathroom", "./images/bathroom.jpg"));
Images.allImages.push(new Images("boots", "./images/boots.jpg"));
Images.allImages.push(new Images("breakfast", "./images/breakfast.jpg"));
Images.allImages.push(new Images("bubblegum", "./images/bubblegum.jpg"));
Images.allImages.push(new Images("chair", "./images/chair.jpg"));
Images.allImages.push(new Images("cthulhu", "./images/cthulhu.jpg"));
Images.allImages.push(new Images("dog-duck", "./images/dog-duck.jpg"));
Images.allImages.push(new Images("dragon", "./images/dragon.jpg"));
Images.allImages.push(new Images("pen", "./images/pen.jpg"));
Images.allImages.push(new Images("pet-sweep", "./images/pet-sweep.jpg"));
Images.allImages.push(new Images("scissors", "./images/scissors.jpg"));
Images.allImages.push(new Images("shark", "./images/shark.jpg"));
Images.allImages.push(new Images("sweep", "./images/sweep.png"));
Images.allImages.push(new Images("tauntaun", "./images/tauntaun.jpg"));
Images.allImages.push(new Images("unicorn", "./images/unicorn.jpg"));
Images.allImages.push(new Images("water-can", "./images/water-can.jpg"));
Images.allImages.push(new Images("wine-glass", "./images/wine-glass.jpg"));

console.log(Images.allImages);

//render images
Images.prototype.renderImage = function(image){
    image.src = this.imgPath;
    image.alt = this.name;
    this.views++;
}

function randomizeArray() {
    let RandomArray = Images.allImages;
    let randomArray = RandomArray.sort(function(){return (Math.random()-0.5)});
}

function getThreeImages(){
    randomizeArray();
  let image1 = Images.allImages [0];
  let image2 = Images.allImages [1];
  let image3 = Images.allImages [2];
  image1.renderImage(img1);
  image2.renderImage(img2);
  image3.renderImage(img3);
};

//Input array in storage
function putArrayInStorage(){
  // Always save the current Images.allImages array
  const stringArray = JSON.stringify(Images.allImages);
  localStorage.setItem('images', stringArray);
}

// Output array from storage
function getArrayFromStorage(){
    let storedImage = localStorage.getItem('images');
    if(storedImage){
    let newImage = JSON.parse(storedImage);
    Images.allImages = [];
    for (let obj of newImage) {
      const path = obj.imgPath || obj.imagepath || '';
      const item = new Images(obj.name, path);
      item.views = Number(obj.views) || 0;
      item.clicks = Number(obj.clicks) || 0;
      Images.allImages.push(item);
    }
    }
}
//Revomes images
function removeImages(){
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
}

function makeItemChart() {
  const canvas = document.getElementById('myCanvas');
  if (!canvas) { console.error('makeItemChart: #myCanvas not found'); return; }
  const ctx = canvas.getContext('2d');

  const imageNames = Images.allImages.map(i => i.name);
  const imageClicks = Images.allImages.map(i => Number(i.clicks) || 0);
  const imageViews = Images.allImages.map(i => Number(i.views) || 0);

  const data = {
    labels: imageNames,
    datasets: [
      {
        label: 'Clicks',
        data: imageClicks,
        borderColor: 'rgba(251, 0, 0, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
      },
      {
        label: 'Views',
        data: imageViews,
        borderColor: 'rgba(99, 99, 255, 1)',
        backgroundColor: 'rgba(99, 132, 255, 0.5)',
        borderWidth: 1,
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right' },
        title: { display: true, text: 'Image clicks and views' }
      },
      scales: { x: { beginAtZero: true } }
    }
  };

  if (window._myChart) { try { window._myChart.destroy(); } catch (e) {} }
  window._myChart = new Chart(ctx, config);
}
//Changes/randomizes image
function handleClick(E){
    const imageClicked = E.target.id;
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
    if (count === 35){
        removeImages();
        console.log(Images.allImages);

        putArrayInStorage();
    getArrayFromStorage();
    makeItemChart();
document.getElementById('Desc1').style.display = 'none';

}
}

if (container) container.addEventListener('click', handleClick);
console.log(Images);
getArrayFromStorage();
getThreeImages();

;
