import { getItemsLS, setItemsLS } from "./storage.js";

let items = getItemsLS();

export function addItem(name) {
    items.push({
        id: Date.now(),
        name
    });
    setItemsLS(items)
}

export function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    setItemsLS(items)
}

export function getItems() {
    return items;
}

export function clearAll(){
    items = []
    setItemsLS(items)
} 