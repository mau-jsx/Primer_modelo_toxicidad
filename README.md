# 🧠 Detector de Toxicidad con TensorFlow.js

Este proyecto es una demostración simple de cómo utilizar el modelo de detección de toxicidad de [TensorFlow.js](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) directamente desde el navegador, sin necesidad de backend.

Los usuarios pueden escribir un texto en una caja y recibir el análisis de toxicidad directamente en la misma página.

---

## 🚀 Demo

![demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHUzMGFsb3BuaDAxNWMyNjB0dGh4NDR1bWkzajh2ZnlmNnU3YXVqaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT5LMxmHHPW9xokntG/giphy.gif)

---

## 📦 Tecnologías usadas

- HTML + CSS + JavaScript puro
- [TensorFlow.js](https://www.tensorflow.org/js)
- [@tensorflow-models/toxicity](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)

---

## 🔧 Cómo usar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Escribe un texto en la caja de entrada.
4. Haz clic en **"Analizar"**.
5. El modelo identificará si hay toxicidad en el texto y mostrará los resultados en la misma página.

---

## 📊 Categorías de toxicidad detectadas

El modelo puede detectar los siguientes tipos de toxicidad:

- `toxicity`
- `severe_toxicity`
- `obscene`
- `identity_attack`
- `insult`
- `threat`
- `sexual_explicit`

---
