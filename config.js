// おみせやさんの設定ファイルです。index.html と同じ場所に置きます。
// このファイルを一度置いておけば、index.html を新しい版に差し替えても、設定をやり直す必要はありません。
window.OMISE_CONFIG = {
  // GASのウェブアプリのURL（末尾が /exec）を ' ' の間に貼り付けます。
  productsUrl: 'https://script.google.com/macros/s/AKfycbyaSmei9Lezyeuw9tpwD4XgEDlbHaBOAIG_U5pfybkGmgWrLUL_1UySlFnBvqb_LGHOKw/exec',

  // 読取りの速さ（ミリ秒。1000＝1秒）。大きくするほどゆっくりになります。
  aimMs: 1200,   // カメラの映像が出てから、この時間がたつまでは読み取りません（ねらう時間）
  holdMs: 1200   // 読み取ったあと、この時間だけ映像を止めて見せてからカメラを閉じます
};
