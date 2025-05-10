import { addItem, deleteItem, getItems, clearAll } from './items.js';
import { renderItems } from './render.js';

const form = document.getElementById('item-form');
const input = document.getElementById('item-input');
const list = document.getElementById('item-list');
const clearBtn = document.getElementById('clearBtn')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = input.value.trim();
    if (!name) return;

    addItem(name);
    input.value = '';
    renderItems(getItems(), list, clearBtn);
    input.focus();
});

list.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const id = Number(e.target.dataset.id);
    deleteItem(id);
    renderItems(getItems(), list, clearBtn);
});
clearBtn.addEventListener('click', (e) => {
    clearAll();
    renderItems(getItems(), list, clearBtn)
})

// начальный рендер

renderItems(getItems(), list, clearBtn);