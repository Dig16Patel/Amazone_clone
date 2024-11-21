
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateNavCounts() {
    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("wishlist-count").innerText = wishlist.length;
}

function updateRemoveButtons() {
    document.querySelectorAll('.product').forEach((product, index) => {
        const productId = `product${index + 1}`;
        const addToCartButton = product.querySelector('.add-to-cart');
        const removeFromCartButton = product.querySelector('.remove-from-cart');
        const addToWishlistButton = product.querySelector('.add-to-wishlist');
        const removeFromWishlistButton = product.querySelector('.remove-from-wishlist');

        if (cart.includes(productId)) {
            addToCartButton.style.display = 'none';
            removeFromCartButton.style.display = 'block';
        } else {
            addToCartButton.style.display = 'block';
            removeFromCartButton.style.display = 'none';
        }

        if (wishlist.includes(productId)) {
            addToWishlistButton.style.display = 'none';
            removeFromWishlistButton.style.display = 'block';
        } else {
            addToWishlistButton.style.display = 'block';
            removeFromWishlistButton.style.display = 'none';
        }
    });
}

function addToCart(productId) {
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateNavCounts();
        updateRemoveButtons();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateNavCounts();
    updateRemoveButtons();
}

function addToWishlist(productId) {
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        updateNavCounts();
        updateRemoveButtons();
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item !== productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateNavCounts();
    updateRemoveButtons();
}

document.querySelectorAll(".add-to-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
        addToCart(`product${index + 1}`);
    });
});

document.querySelectorAll(".remove-from-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
        removeFromCart(`product${index + 1}`);
    });
});

document.querySelectorAll(".add-to-wishlist").forEach((button, index) => {
    button.addEventListener("click", () => {
        addToWishlist(`product${index + 1}`);
    });
});

document.querySelectorAll(".remove-from-wishlist").forEach((button, index) => {
    button.addEventListener("click", () => {
        removeFromWishlist(`product${index + 1}`);
    });
});

updateNavCounts();
updateRemoveButtons();
