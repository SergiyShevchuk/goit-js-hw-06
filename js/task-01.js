const list = document.querySelectorAll('li.item');

console.log(`Number of  ${list.length} categories.`);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => { console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`,
  );
}
);