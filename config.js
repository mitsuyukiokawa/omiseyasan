// おみせやさんの設定ファイルです。index.html と同じ場所に置きます。
// ここの値は index.html の中の設定より優先されます。
window.OMISE_CONFIG = {
  // GASのウェブアプリのURL（末尾が /exec）
  productsUrl: 'https://script.google.com/macros/s/AKfycbyaSmei9Lezyeuw9tpwD4XgEDlbHaBOAIG_U5pfybkGmgWrLUL_1UySlFnBvqb_LGHOKw/exec',

  // 読取りの速さ（ミリ秒。1000＝1秒）。大きくするほどゆっくりになります。
  aimMs: 300,   // カメラの映像が出てから、この時間がたつまでは読み取りません（ねらう時間）
  holdMs: 500   // 読み取ったあと、この時間だけ緑の枠を見せてからカメラを閉じます
};
