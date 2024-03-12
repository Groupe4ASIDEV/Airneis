export function calculateCartETTotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function calculateCartVATTotal(items) {
    return calculateCartETTotal(items) * 0.2;
}

export function calculateCartATITotal(items) {
    return calculateCartETTotal(items) + calculateCartVATTotal(items);
}
