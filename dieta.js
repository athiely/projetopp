// script.js

const mealsContainer = document.getElementById('mealsContainer');
const addMealButton = document.getElementById('addMeal');
const generatePDFButton = document.getElementById('generatePDF');

let mealCount = 0;

// Função para adicionar uma nova refeição
function addMeal() {
    mealCount++;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('meal');
    mealDiv.dataset.mealId = mealCount;

    mealDiv.innerHTML = `
        <input type="text" placeholder="Nome da refeição (ex: Café da Manhã)" class="meal-name" />
        <div class="options">
            <label>Opção 1:</label>
            <textarea placeholder="Descrição da opção"></textarea>
        </div>
        <div class="options">
            <label>Opção 2:</label>
            <textarea placeholder="Descrição da opção"></textarea>
        </div>
        <button type="button" class="remove-meal">Remover Refeição</button>
    `;

    // Adiciona evento ao botão de remover refeição
    mealDiv.querySelector('.remove-meal').addEventListener('click', () => {
        mealDiv.remove();
    });

    mealsContainer.appendChild(mealDiv);
}

// Função para gerar o PDF
function generatePDF() {
    let content = '<h1>Prescrição de Dietas</h1>';
    const meals = mealsContainer.querySelectorAll('.meal');

    meals.forEach((meal, index) => {
        const mealName = meal.querySelector('.meal-name').value || `Refeição ${index + 1}`;
        content += `<h2>${mealName}</h2>`;
        const options = meal.querySelectorAll('textarea');
        options.forEach((textarea, idx) => {
            content += `<p><strong>Opção ${idx + 1}:</strong> ${textarea.value}</p>`;
        });
    });

    const pdfWindow = window.open('', '', 'width=800,height=900');
    pdfWindow.document.write('<html><head><title>PDF</title></head><body>');
    pdfWindow.document.write(content);
    pdfWindow.document.write('</body></html>');
    pdfWindow.document.close();
    pdfWindow.print();
}

// Eventos
addMealButton.addEventListener('click', addMeal);
generatePDFButton.addEventListener('click', generatePDF);

// Adiciona uma refeição padrão ao carregar a página
addMeal();
