function toggleClearBtn(btn, count) {
    btn.classList.toggle('hide', count < 2);
}

export function renderItems(items, container, clearBtn) {
    container.innerHTML = '';
    console.log(items.length);

    
    toggleClearBtn(clearBtn, items.length);

    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        ${item.name}
        <button data-id="${item.id}">Удалить</button>`;
        container.appendChild(li);
        console.log(1);

    });
}