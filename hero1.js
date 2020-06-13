function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "rgb(198, 228, 228";
}

const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://iammohit07.github.io/Final-project-assign-3/hero.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
  const STORYText = request.response;
  const STORY = JSON.parse(STORYText);
  populateHeader(STORY);
  showHeroes(STORY);
}

function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['hero'];
  header.appendChild(myH1);
}

function showHeroes(jsonObj) {
  const heroes = jsonObj['details'];

  for(let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'rank: ' + heroes[i].rank;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'STORY:';

    const superPowers = heroes[i].story;
    for(let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}