import count from './js/count';
import sum from './js/sum';
import './css/index.css';
import './css/index.less';
import App from './js/app.jsx';

console.log(count(3, 5, 8));
console.log(sum(3, 5));
const body = document.getElementsByTagName('body')[0];
console.log(body);
body.append(App);