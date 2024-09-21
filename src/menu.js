export default function loadMenu() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHtml = ''; // clear existing content

  const headline = document.createElement('h1');
  headline.textContent = "Our menu";

  const menuList = document.createElement('ul');
  const items = ['steak', 'salad', 'Pizza', 'Dessert'];

  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    menuList.appendChild(listItem);
  });

  contentDiv.appendChild(headline);
  contentDiv.appendChild(menuList);
}