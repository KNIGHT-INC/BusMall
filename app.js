'use strict';

var imageContainer = document.getElementById('product-container');

var dataContainer = document.getElementById('data-container');

var uniqueImageArray =[];

var productArray = [];

var roundCount = 25;

var clickCount = 0;

var parsedProductsArray = [];


function checkLocalStorage() {
  if (localStorage.getItem('products') === null) {
    
    newProducts();
  } else {
       
       var getProducts = localStorage.getItem('products');
       
        var parsedProductsArray = JSON.parse(getProducts);
        
        productArray = parsedProductsArray;
  } 
}
checkLocalStorage();


function Product(name){
  this.filepath = `../img/${name}.jpg`;
  this.alt = name;
  this.title = name;
  this.clicks = 0;
  this.displayCount = 0;
  productArray.push(this);
}
function newProducts(){
  new Product('bag');
  new Product('banana');
  new Product('bathroom');
  new Product('boots');
  new Product('breakfast');
  new Product('bubblegum');
  new Product('chair');
  new Product('cthulhu');
  new Product('dog-duck');
  new Product('dragon');
  new Product('pen');
  new Product('pet-sweep');
  new Product('scissors');
  new Product('shark');
  new Product('tauntaun');
  new Product('unicorn');
  new Product('water-can');
  new Product('wine-glass');
  
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
}

function getRandomImage(){
  var randomIndex = getRandomNumber(productArray.length);

  while(uniqueImageArray.includes(randomIndex)){
    randomIndex = getRandomNumber(productArray.length);
  }

  
  uniqueImageArray.push(randomIndex);

  
  if(uniqueImageArray.length > 6){
    uniqueImageArray.shift();
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
      
      var stringProducts = JSON.stringify(productArray);
      
      localStorage.setItem('products', stringProducts);
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
  
var ctx = document.getElementById('myChart').getContext('2d');
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


