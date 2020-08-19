'use strict';
var imageCont = document.getElementById('product-container');
var dataCont = document.getElementById('data-container');
var ImageArray =[];

var productArray = [];
var roundCount = 25;

var clickCount = 0;

function Item(name){
  this.filepath = `../img/${name}.jpg`;
  this.alt = name;
  this.title = name;
  this.clicks = 0;
  this.displayCount = 0;
  productArray.push(this);
}
new Item('bag');
new Item('banana');
new Item('bathroom');
new Item('boots');
new Item('breakfast');
new Item('bubblegum');
new Item('chair');
new Item('cthulhu');
new Item('dog-duck');
new Item('dragon');
new Item('pen');
new Item('pet-sweep');
new Item('scissors');
new Item('shark');
new Item('tauntaun');
new Item('unicorn');
new Item('water-can');
new Item('wine-glass');

var usb = {
  filepath: '../img/usb.gif',
  alt: 'usb',
  title:'usb',
  clicks: 0,
  displayCount: 0,
}
var sweep = {
  filepath: '../img/sweep.png',
  alt: 'sweep',
  title:'sweep',
  clicks: 0,
  displayCount: 0,
}

productArray.push(sweep);
productArray.push(usb);

function getRandomImage(){
  var randomIndex = getRandomNumber(productArray.length);

  while(uniqueImageArray.includes(randomIndex)){
    randomIndex = getRandomNumber(productArray.length);
  }

  
  ImageArray.push(randomIndex);

  if(ImageArray.length > 6){
    ImageArray.shift();
  }
  var chosenImage = productArray[randomIndex];
  chosenImage.displayCount++;
  
  var imageElement = document.createElement('img');
  
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('name', chosenImage.title);
  
  imageContainer.appendChild(imageElement);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function callbackClick(event){
  
  var altValue = event.target.alt;

  
  for(var i=0; i<productArray.length; i++){
    
    if(altValue === productArray[i].alt){
      productArray[i].clicks++;
    }
  }

  imageContainer.innerHTML = '';
  clickCount++;
 
  if(clickCount === roundCount){
      imageContainer.removeEventListener('click', callbackClick);
      
      percentClicked();
      
      graphResults();
    }
    getRandomImage();
    getRandomImage();
    getRandomImage();
  }

imageContainer.addEventListener('click', callbackClick);

function percentClicked(){
    var listData = document.createElement('ul');  
    dataContainer.appendChild(listData);
    for(var i=0; i<productArray.length; i++){
      if(productArray[i].displayCount > 0 && productArray[i].clicks > 0){
        var dataElement = document.createElement('li');
        
        var clickMath = Math.round((productArray[i].clicks/productArray[i].displayCount) * 100);
        dataElement.textContent = `The ${productArray[i].alt} was shown ${productArray[i].displayCount} time(s), voted for ${productArray[i].clicks} time(s) or ${clickMath}% of the time it was shown.`;
        
        listData.appendChild(dataElement); 
      }
      else{
        var dataElement = document.createElement('li');
        
        dataElement.textContent = `The ${productArray[i].alt} was shown ${productArray[i].displayCount} time(s) and voted for ${productArray[i].clicks} time(s).`;
        
        listData.appendChild(dataElement);
      }
    }
}

getRandomImage();
getRandomImage();
getRandomImage();


function graphResults(){
var productName = [];
var productVotes = [];
var displayTimes = [];
  for (var i=0; i<productArray.length; i++){
    
    productName.push(productArray[i].title);
    productVotes.push(productArray[i].clicks);
    displayTimes.push(productArray[i].displayCount);
  }
  
var chart = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productName,
        datasets: [{
            label: '# of Votes',
            data: productVotes,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',   
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,},
            {label: '# times shown',
            data: displayTimes,
            backgroundColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
        
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}