const container = document.getElementById("vocab-container");

vocabList.forEach(word => {
  container.innerHTML += `
    <div class="word">
      <div class="chinese">${word.chinese}</div>
      <div class="pinyin">${word.pinyin}</div>
      <div class="meaning">${word.meaning}</div>
    </div>
  `;
});
