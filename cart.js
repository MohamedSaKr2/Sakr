// تعريف المتغيرات
const quantityInputs = document.querySelectorAll('.quantity input'); // جميع حقول الكمية
const totalPrices = document.querySelectorAll('.total-price'); // أسعار المنتج الإجمالية
const cartSubtotalElement = document.querySelector('.cart-total p:nth-child(1)'); // إجمالي الطلب الفرعي
const discountElement = document.querySelector('.cart-total p:nth-child(2)'); // قيمة الخصم
const cartTotalElement = document.querySelector('.cart-total p:nth-child(3) strong'); // إجمالي الطلب
const applyCouponButton = document.querySelector('.apply-button'); // زر تطبيق الكوبون
const couponInput = document.querySelector('input[placeholder="Enter coupon code"]'); // إدخال الكوبون

// تحديث الإجماليات عند تغيير الكمية
quantityInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        // التأكد من أن الكمية لا تقل عن 1
        if (input.value < 1) {
            input.value = 1;
        }

        // الحصول على السعر الفردي للمنتج
        const pricePerItem = parseFloat(totalPrices[index].parentElement.querySelector('p:nth-child(3)').innerText.replace('Price: $', ''));

        // تحديث السعر الإجمالي لهذا المنتج
        const newTotal = pricePerItem * input.value;
        totalPrices[index].innerText = `Total: $${newTotal.toFixed(2)}`;

        // تحديث إجمالي الطلب
        updateCartTotals();
    });
});

// تحديث إجمالي الطلب والخصومات
function updateCartTotals() {
    let subtotal = 0;

    // حساب الإجمالي الفرعي
    totalPrices.forEach((priceElement) => {
        const price = parseFloat(priceElement.innerText.replace('Total: $', ''));
        subtotal += price;
    });

    // تحديث العناصر في الصفحة
    cartSubtotalElement.innerText = `Cart Subtotal: $${subtotal.toFixed(2)}`;

    // تحديث الإجمالي النهائي بعد الخصم
    const discount = parseFloat(discountElement.innerText.replace('Discount: $', '')) || 0;
    const total = subtotal - discount;
    cartTotalElement.innerText = `$${total.toFixed(2)}`;
}

// تطبيق الكوبون
applyCouponButton.addEventListener('click', () => {
    const couponCode = couponInput.value.trim();

    // التحقق من الكوبون
    if (couponCode === 'SAVE10') {
        // تطبيق خصم 10$
        discountElement.innerText = 'Discount: $10.00';
        alert('Coupon applied successfully! You saved $10.');
    } else {
        discountElement.innerText = 'Discount: $0.00';
        alert('Invalid coupon code!');
    }

    // تحديث إجمالي الطلب
    updateCartTotals();
});

// استدعاء دالة تحديث الإجماليات عند التحميل الأولي
updateCartTotals();
