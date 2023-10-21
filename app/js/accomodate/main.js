//
// function loadJSON(callback) {
//     const urlParams = new URLSearchParams(window.location.search);
//     let langFromQuery = urlParams.get('lang') || 'en';
//     const supportedLanguages = ['en', 'fr', 'es', 'de', 'pt', 'ja'];
//     if (!supportedLanguages.includes(langFromQuery)) {
//         langFromQuery = 'en';
//     }
//     const jsonPath = `${langFromQuery}.json`;
//     fetch(jsonPath)
//         .then(response => response.json())
//         .then(data => callback(data))
//         .catch(error => console.error('Ошибка загрузки JSON: ', error));
// }
function loadJSON(callback) {
    // Получите язык системы Windows пользователя
    const userLanguage = navigator.language || navigator.userLanguage;

    // Преобразуйте язык в формат, подходящий для использования в пути к файлу JSON
    // Например, замените дефисы на подчеркивания (ru-RU -> ru_RU)
    const formattedLanguage = userLanguage.replace('-', '_');

    // Убедитесь, что полученный язык поддерживается
    const supportedLanguages = ['en', 'fr', 'es', 'de', 'pt', 'ja'];
    const langFromQuery = supportedLanguages.includes(formattedLanguage) ? formattedLanguage : 'en';

    // Создайте путь к JSON файлу
    const jsonPath = `${langFromQuery}.json`;

    // Загрузите JSON файл
    fetch(jsonPath)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Ошибка загрузки JSON: ', error));
}


    // Функция для обновления текстовых узлов HTML-элементов
    function updateTextElements(jsonData) {
    // document.getElementById("accessText").innerHTML = jsonData["Get Unlimited <br>Access"];
    // document.getElementById("creationText").innerHTML = jsonData["Unlimited Art <br>Creation"];
    // document.getElementById("stylesText").innerHTML = jsonData["Exclusive <br>Styles"];
    // document.getElementById("avatarsText").innerHTML = jsonData["Magic Avatars <br>With 20% Off"];
    // document.getElementById("yearlyAccessText").innerHTML = jsonData["YEARLY ACCESS"];
    // document.getElementById("bestOfferText").innerHTML = jsonData["BEST OFFER"];
    // // Замените {{price}} на фактическую цену
    // document.getElementById("priceYearlyText").innerHTML = jsonData["Just {{price}} per year"].replace("{{price}}", "99.99");
    // document.getElementById("weeklyAccessText").innerHTML = jsonData["WEEKLY ACCESS"];
    // // Замените {{price}} на фактическую цену
    // document.getElementById("priceWeeklyText").innerHTML = jsonData["{{price}} <br>per week"].replace("{{price}}", "2.99");
    // document.getElementById("termsOfUseText").innerHTML = jsonData["Terms of Use"];
    // document.getElementById("privacyPolicyText").innerHTML = jsonData["Privacy Policy"];
    // document.getElementById("Restore").innerHTML = jsonData["Restore"];
    document.getElementById("Continue").innerHTML = jsonData["Continue"];
}

loadJSON(function (data) {
    updateTextElements(data);
});

