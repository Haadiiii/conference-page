const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#bar-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.bar').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const speaker = {
  heading1: 'Ms. Amina J. Mohammed',
  title: 'Deputy secretary-General of the UN',
  description: 'She is known for challenging world leaders to take immediate action for climate change mitigation.',
  imageSrc: '<img src="./images/Untitleddesign.png" alt="">',
};

const speaker1 = {
  heading1: 'H.E Mr. Tsuyoshi yamaguchi',
  title: 'Minister of the enviroment, japan',
  description: 'He is known for challenging world leaders to take immediate action for climate change mitigation.',
  imageSrc: '<img src="./images/Untitleddesign5.png" alt="">',
};

const speaker2 = {
  heading1: 'Mr. Liu Zhenmin',
  title: 'Under-secretary-General of the, UN',
  description: 'He is also the founder and board member of Science movement',
  imageSrc: '<img src="./images/Untitleddesign1.png" alt="">',
};

const speaker3 = {
  heading1: 'Mr. Ibrahim Thiaw',
  title: 'Acting Executive Secretary, UN',
  description: 'He holds a postgraduate doctorate in environmental impact assessment.',
  imageSrc: '<img src="./images/Untitleddesign2.png" alt="">',
};

const speaker4 = {
  heading1: 'H.E. Mr. Abdulla Shahid',
  title: 'President of the 76th Seassion of the UN',
  description: 'He is known for his tough stance on matters environment.',
  imageSrc: '<img src="./images/Untitleddesign3.png" alt="">',
};

const speaker5 = {
  heading1: 'H.E Ms. Siti Nurbaya Bakar',
  title: 'Minister of the Enviroment and Forestry, Indonesia',
  description: 'She has been very instrumental in the fight against climate change using her influence and deep pockets.',
  imageSrc: '<img src="./images/Untitleddesign4.png" alt="">',
};

const mainFeature = document.querySelector('.feature');

const divElement = document.createElement('div');
divElement.className = 'speaker1';
mainFeature.append(divElement);

const div2 = document.createElement('div');
div2.className = 'speaker-heading';
divElement.appendChild(div2);

const h2 = document.createElement('h1');
h2.className = 's-header';
h2.textContent = 'Featured Speakers';
div2.appendChild(h2);

const hrrr = document.createElement('hr');
hrrr.className = 'speaker-hr';
h2.appendChild(hrrr);

const div3 = document.createElement('div');
div3.className = 'speaker-itmems';
divElement.appendChild(div3);

const diiv = document.createElement('div');
div3.appendChild(diiv);

const hhh = document.createElement('h1');
hhh.className = 'p-pic';
hhh.innerHTML = speaker.imageSrc;
diiv.appendChild(hhh);

const ul = document.createElement('ul');
ul.className = 'items';
div3.appendChild(ul);

const li1 = document.createElement('li');
li1.className = 'speaker-H';
li1.textContent = speaker.heading1;
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.className = 'speaker-t';
li2.textContent = speaker.title;
ul.appendChild(li2);

const titleHr6 = document.createElement('hr');
li2.append(titleHr6);

const li3 = document.createElement('li');
li3.className = 'speaker-D';
li3.textContent = speaker.description;
ul.appendChild(li3);

const div4 = document.createElement('div');
div4.className = 'speaker-items1';
divElement.appendChild(div4);

const diiv2 = document.createElement('div');
div4.appendChild(diiv2);

const hhh2 = document.createElement('h1');
hhh2.className = 'p-pic';
hhh2.innerHTML = speaker1.imageSrc;
diiv2.appendChild(hhh2);

const ul2 = document.createElement('ul');
ul2.className = 'items';
div4.appendChild(ul2);

const li5 = document.createElement('li');
li5.className = 'speaker-H';
li5.textContent = speaker1.heading1;
ul2.appendChild(li5);

const li6 = document.createElement('li');
li6.className = 'speaker-t';
li6.textContent = speaker1.title;
ul2.appendChild(li6);

const titleHr5 = document.createElement('hr');
li6.append(titleHr5);

const li7 = document.createElement('li');
li7.className = 'speaker-D';
li7.textContent = speaker1.description;
ul2.appendChild(li7);

const div5 = document.createElement('div');
div5.className = 'speaker-items';
divElement.appendChild(div5);

const diiv3 = document.createElement('div');
div5.appendChild(diiv3);

const hhh3 = document.createElement('h1');
hhh3.className = 'p-pic';
hhh3.innerHTML = speaker2.imageSrc;
diiv3.appendChild(hhh3);

const ul3 = document.createElement('ul');
ul3.className = 'items';
div5.appendChild(ul3);

const li9 = document.createElement('li');
li9.className = 'speaker-H';
li9.textContent = speaker2.heading1;
ul3.appendChild(li9);

const li10 = document.createElement('li');
li10.className = 'speaker-t';
li10.textContent = speaker2.title;
ul3.appendChild(li10);

const titleHr4 = document.createElement('hr');
li10.append(titleHr4);

const li11 = document.createElement('li');
li11.className = 'speaker-D';
li11.textContent = speaker2.description;
ul3.appendChild(li11);

const div6 = document.createElement('div');
div6.className = 'speaker-items1';
divElement.appendChild(div6);

const diiv4 = document.createElement('div');
div6.appendChild(diiv4);

const hhh4 = document.createElement('h1');
hhh4.className = 'p-pic';
hhh4.innerHTML = speaker3.imageSrc;
diiv4.appendChild(hhh4);

const ul4 = document.createElement('ul');
ul4.className = 'items';
div6.appendChild(ul4);

const li13 = document.createElement('li');
li13.className = 'speaker-H';
li13.textContent = speaker3.heading1;
ul4.appendChild(li13);

const li14 = document.createElement('li');
li14.className = 'speaker-t';
li14.textContent = speaker3.title;
ul4.appendChild(li14);

const titleHr3 = document.createElement('hr');
li14.append(titleHr3);

const li15 = document.createElement('li');
li15.className = 'speaker-D';
li15.textContent = speaker3.description;
ul4.appendChild(li15);

const div7 = document.createElement('div');
div7.className = 'speaker-items';
divElement.appendChild(div7);

const diiv5 = document.createElement('div');
div7.appendChild(diiv5);

const hhh5 = document.createElement('h1');
hhh5.className = 'p-pic';
hhh5.innerHTML = speaker4.imageSrc;
diiv5.appendChild(hhh5);

const ul5 = document.createElement('ul');
ul5.className = 'items';
div7.appendChild(ul5);

const li17 = document.createElement('li');
li17.className = 'speaker-H';
li17.textContent = speaker4.heading1;
ul5.appendChild(li17);

const li18 = document.createElement('li');
li18.className = 'speaker-t';
li18.textContent = speaker4.title;
ul5.appendChild(li18);

const titleHr2 = document.createElement('hr');
li18.append(titleHr2);

const li19 = document.createElement('li');
li19.className = 'speaker-D';
li19.textContent = speaker4.description;
ul5.appendChild(li19);

const div8 = document.createElement('div');
div8.className = 'speaker-items1';
divElement.appendChild(div8);

const diiv6 = document.createElement('div');
div8.appendChild(diiv6);

const hhh6 = document.createElement('h1');
hhh6.className = 'p-pic';
hhh6.innerHTML = speaker5.imageSrc;
diiv6.appendChild(hhh6);

const ul6 = document.createElement('ul');
ul6.className = 'items';
div8.appendChild(ul6);

const li21 = document.createElement('li');
li21.className = 'speaker-H';
li21.textContent = speaker5.heading1;
ul6.appendChild(li21);

const li22 = document.createElement('li');
li22.className = 'speaker-t';
li22.textContent = speaker5.title;
ul6.appendChild(li22);

const titleHr = document.createElement('hr');
li22.append(titleHr);

const li23 = document.createElement('li');
li23.className = 'speaker-D';
li23.textContent = speaker5.description;
ul6.appendChild(li23);