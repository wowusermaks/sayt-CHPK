
document.addEventListener('DOMContentLoaded', () => {
    const categoryBtn = document.getElementById('category-btn');
    const categoryList = document.getElementById('category-list');

    // Відображення списку категорій
    categoryBtn.addEventListener('click', () => {
        if (categoryList.classList.contains('hidden')) {
            categoryList.classList.remove('hidden');
        } else {
            categoryList.classList.add('hidden');
        }
    });
});
