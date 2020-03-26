import a from './js1'
import {avc} from './js2'
import Photo from '../assets/body-bg-responsive.jpg'
import '../../dist/style.css'

const imgTest = document.getElementById('test');
const btn = document.getElementById('btn');

btn.addEventListener('click', addImg);

function addImg() {
   const imgSrc = `
   <img src=${Photo} alt="some text">
   `;
    imgTest.insertAdjacentHTML("afterbegin", imgSrc)
}
