// script.js
document.getElementById('submit-button').addEventListener('click', function () {
    const inputBox = document.getElementById('input-box');
    const specificValue = "23856169"; // 設定した特定の値

    if (inputBox.value.trim() === specificValue) { // 値が一致する場合
        alert("You will begin to feel more deeply about things you have never paid attention to before. Password is rh238$5"); // 正しい入力値の場合のアラート
    } else {
        alert("That's not good at all."); // 値が一致しない場合のアラート
    }
});
