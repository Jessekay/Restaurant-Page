export default function loadContact() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // clear existing content

  const headline = document.createElement('h1');
  headline.textContent = "Contact Us";

  const contactInfo = document.createElement('p');
  contactInfo.innerHTML = `
  Phone: (123) 456-7890 <br>
  Email: contact@nicebites.com <br>
  Address: 123 Kimironko Lane, Food City
  `;

  contentDiv.appendChild(headline);
  contentDiv.appendChild(contactInfo);
}