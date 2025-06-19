let order = []; // Массив для хранения выбранных пицц
let isRegistered = false; // Статус регистрации пользователя

// Функция для отображения формы регистрации
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
}

// Функция для регистрации пользователя
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        isRegistered = true; // Устанавливаем статус регистрации в true
        document.getElementById('login-form').style.display = 'none'; // Скрываем форму регистрации
        document.getElementById('account-info').innerHTML = `Привет, ${username}`; // Показываем имя пользователя
        document.getElementById('menu').style.display = 'block'; // Показываем меню пицц
    } else {
        alert('Пожалуйста, заполните все поля!'); // Если поля пустые, выводим предупреждение
    }
}

// Функция для добавления пиццы в заказ
function orderPizza(pizzaName, price) {
    if (!isRegistered) { // Если пользователь не зарегистрирован, не разрешаем заказать
        alert('Вы должны зарегистрироваться, чтобы сделать заказ!');
        return;
    }

    // Добавляем выбранную пиццу в заказ
    order.push({ pizzaName, price });
    updateCart(); // Обновляем корзину
}

// Функция для обновления корзины
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Очищаем текущие элементы корзины

    let totalPrice = 0;
    order.forEach((item, index) => {
        cartItems.innerHTML += `
            ${item.pizzaName} - ${item.price} BYN
            <button onclick="removePizza(${index})">Удалить</button><br>
        `;
        totalPrice += item.price;
    });

    cartItems.innerHTML += `Итого: ${totalPrice} BYN`;
}

// Функция для удаления пиццы из корзины
function removePizza(index) {
    order.splice(index, 1);
    updateCart(); // Обновляем корзину после удаления
}

// Функция для отображения корзины
function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = (cart.style.display === 'block') ? 'none' : 'block';
}

// Функция для размещения заказа
function placeOrder() {
    if (order.length > 0) {
        alert('Ваш заказ принят! Пиццы будут доставлены через 30 минут.');
        order = []; // Очищаем корзину после оформления заказа
        updateCart(); // Обновляем корзину
        toggleCart(); // Скрываем корзину
    } else {
        alert('Корзина пуста, пожалуйста, выберите пиццы для заказа.');
    }
}
