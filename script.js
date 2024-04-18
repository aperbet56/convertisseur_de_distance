const inputBox = document.getElementById("input__box");
const resultBox = document.getElementById("result__box");
const inputCategory = document.getElementById("input__category");
const resultCategory = document.getElementById("result__category");
const clearBtn = document.querySelector(".btn");

// Définition du système de conversion
const conversionFactors = {
  mètre: {
    kilomètre: 0.001,
    mètre: 1,
    centimètre: 100,
    millimètre: 1000,
    micromètre: 1000000,
    nanomètre: 1000000000,
    mille: 1 / 1609.344,
    yard: 1.09361,
    pied: 3.28084,
    pouce: 39.3701,
  },
  kilomètre: {
    mètre: 1000,
    kilomètre: 1,
    centimètre: 100000,
    millimètre: 1000000,
    micromètre: 1000000000,
    nanomètre: 1000000000000,
    mille: 0.621371,
    yard: 1093.6133,
    pied: 3280.84,
    pouce: 39370.1,
  },
  centimètre: {
    mètre: 0.01,
    kilomètre: 0.00001,
    centimètre: 1,
    millimètre: 10,
    micromètre: 10000,
    nanomètre: 10000000,
    mille: 1 / 160934,
    yard: 1 / 91.44,
    pied: 1 / 30.48,
    pouce: 1 / 2.54,
  },
};

// Déclaration de la fonction updateResult qui va mettre à jour le résultat
const updateResult = () => {
  const inputValue = parseFloat(inputBox.value); // La fonction parseFloat() permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci (parsing).
  const inputCategoryValue = inputCategory.value;
  const resultCategoryValue = resultCategory.value;

  const conversionFactor =
    conversionFactors[inputCategoryValue][resultCategoryValue];
  resultBox.value = isNaN(inputValue) ? "" : inputValue * conversionFactor;
};

// Déclaration de la fonction clearInput qui va permettre d'effacer les données des champs de formulaire
const allClearInputs = () => {
  inputBox.value = "";
  resultBox.value = "";
};

// Ecoute des événements et appels des fonctions
inputBox.addEventListener("input", updateResult);
inputCategory.addEventListener("change", updateResult);
resultCategory.addEventListener("change", updateResult);
clearBtn.addEventListener("click", allClearInputs);
