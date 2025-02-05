
const plantillaDOM = document.getElementById('plantilla');


plantillaDOM.innerHTML = `
    <img src="./images/haziel.jpeg" alt="Honeyed Pastry Logo"> 
    <h1>Honeyed Pastry</h1>
    <p>Good pastry for a good day</p>
    <button onclick="alert('Menu Clicked')">Menu</button>
    <button onclick="alert('Online Order Clicked')">Online Order</button>
    <button onclick="alert('Our Story Clicked')">Our Story</button>
    <button onclick="alert('Locations Clicked')">Locations</button>
    <div class="footer-icons">
        <a href="https://paypal.me/HChavezPulache" target="_blank">
            <img src="./images/pay.png" alt="PayPal"> 
        </a>
        <a href="https://www.instagram.com/hanselld1/" target="_blank">
            <img src="./images/ig.png" alt="Instagram"> 
        </a>
        <a href="https://www.youtube.com/@hansellchavez8296" target="_blank">
            <img src="./images/yt.png" alt="YouTube"> 
        </a>
    </div>
`;

