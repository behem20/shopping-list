
export function setItemsLS(shoppingItems) {
    localStorage.setItem('items', JSON.stringify(shoppingItems))
}

export function getItemsLS() {
    const items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    return items
}