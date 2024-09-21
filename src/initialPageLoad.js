export default function initialPageLoad() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // clear existing content 

  // create and append the headline
  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Our Resaurant!";

  // create and append the image
  const image = document.createElement('img');
  image.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D";
  image.alt = "restaurant";
  
  // create and append the description
  const description = document.createElement('p');
  description.innerHTML = `
    At <strong>Delicious Bites</strong>, we pride ourselves on serving fresh, delicious meals made with love.
        Whether you're craving a mouth-watering steak, fresh salads, or our famous desserts, we’ve got something 
        for everyone. Come dine with us and experience our warm and inviting atmosphere, perfect for any occasion.
  `;

  contentDiv.appendChild(headline);
  contentDiv.appendChild(image);
  contentDiv.appendChild(description);
}