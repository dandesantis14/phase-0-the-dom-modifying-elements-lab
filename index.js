// Write your code here!

const hold = document.querySelector('main#main');
hold.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Dan is the champion';
document.body.append(newHeader);
