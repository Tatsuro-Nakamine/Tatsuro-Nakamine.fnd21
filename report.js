'use strict'

/* 集計結果表の初期値を設定 */
const objectOfCategory = {
  日付: "yyyy_mm",
  食費＿食材: 0,
  食費＿外食: 0,
  光熱費＿電気: 0,
  光熱費＿ガス: 0,
  光熱費＿水道: 0,
  交通費＿ガソリン代: 0,
  交通費＿高速代: 0,
  娯楽費: 0,
  ケータイ代: 0
};
for (const key in objectOfCategory){
  document.getElementById(key).textContent = objectOfCategory[key];//集計結果表に値を代入
}
/* 集計結果表の初期値を設定ここまで */

// const newObjectOfCategory = {};

/* 入力ボタン　クリック動作　*/
function input(){
  let inputMonth = document.getElementById("input-month").value;//変数を定義しユーザーが入力した日付を代入
  let inputCost = document.getElementById("input-cost").value;//変数を定義しユーザーが入力した金額を代入
  let inputCategory;
  const categoryArray = document.getElementsByName("category");//カテゴリが要素の配列を作成
    /* ユーザーが選択したカテゴリを変数に代入 */
  for (let i=0; i<categoryArray.length; i++){
    if (categoryArray[i].checked){
      inputCategory = categoryArray[i].value;
    }
  }
  /* ここまで */
  console.log(inputMonth + inputCost + inputCategory);

  if(inputMonth === "" || inputCost === ""){
    return window.alert("未入力項目があります。"); //「対象月」「金額」が未入力の場合、アラート表示。
  }
  objectOfCategory[inputCategory] = objectOfCategory[inputCategory] + Number(inputCost);//オブジェクトの値に入力金額を代入
  objectOfCategory["日付"] = inputMonth;  //オブジェクトの値に対象月を代入
  for (const key in objectOfCategory){
    document.getElementById(key).textContent = objectOfCategory[key];//集計結果表に値を代入
  }
  window.alert(`集計結果に反映しました。 \n対象月： ${inputMonth} \n金額： ${inputCost} \nカテゴリ： ${inputCategory}`);//入力内容をWindow表示
  document.getElementById("input-cost").value = "";//入力完了後にテキストボックス内をクリア
}
const targetInput = document.getElementById("input-into-total");
targetInput.addEventListener("click",input);
/* 入力ボタン　クリック動作ここまで　*/

/*　テキストボックス入力値クリア */
function costClear(){
  document.getElementById("input-cost").value = "";
}
const targetClear = document.getElementById("clear");
targetClear.addEventListener("click",costClear);
/*　テキストボックス入力値クリア　ここまで */

