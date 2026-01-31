import Prism from 'prismjs';
import 'font-awesome/scss/font-awesome.scss';
import './css/style.scss';
require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

  var cartQty = 0;
  function updateCart(delta) {
    cartQty = Math.max(0, cartQty + delta);
    document.getElementById('cart-qty').textContent = cartQty;
    document.getElementById('cart-status').textContent =
      'Panier : ' + cartQty + ' article(s), ' + (cartQty * 25) + ' €';
  }
  document.getElementById('cart-minus').addEventListener('click', function() { updateCart(-1); });
  document.getElementById('cart-plus').addEventListener('click', function() { updateCart(1); });

});
