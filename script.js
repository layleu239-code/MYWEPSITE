const cartCount = document.getElementById('cart-count');
const buttons = document.querySelectorAll('[data-add-to-cart]');

let count = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = `Cart (${count})`;

    const originalText = button.textContent;
    button.textContent = 'Added';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 900);
  });
});
