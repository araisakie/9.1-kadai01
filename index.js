"use strict";

// オブジェクト
const Arai = {
  name: "AraiSakie",
  from: "Yamaguchi",
  profession: "オタク",
};

const Oizumi = {
  name: "OizumiYou",
  from: "Yamaguchi",
  profession: "仮面ライダー",
};

// テンプレートリテラとアロー関数を使用した自己紹介
const introduce = (human) => {
  console.log(
    `名前は${human.name}です。出身は${human.from}です。職業は${human.profession}です。`
  );
};

introduce(Arai);
introduce(Oizumi);

//オブジェクトのメソッドを使用
const Okubo = {
  name: "Okubo",
  from: "Saitama",
  profession: "オタク",
  otaku(game) {
    return "音ゲー";
  },
};

const value = Okubo.otaku("楽しい");
console.log(value);

// Thisの使い方
const Otani = {
  name: "Otani",
  from: "ShinOkubo",
  profession: "オタク",
  method() {
    console.log(this);
  },
};

const Umikawa = {
  name: "Umikawa",
  from: "Umi",
  profession: "オタク",
  method() {
    console.log(this);
  },
};

Otani.method();
Umikawa.method();

const Morikawa = {
  name: "Morikawa",
  from: "Mori",
  profession: "オタク",
  method() {
    console.log(
      `名前は${this.name}です。出身は${this.from}です。職業は${this.profession}です。`
    );
  },
};

Morikawa.method();

//
const AraiFamily = {
  mother: {
    name: "zilyunko",
    type: "A",
  },
  father: {
    name: "yoshinori",
    type: "B",
  },
  sister: {
    name: "natue",
    type: "B",
  },
  brother: {
    name: "yuki",
    type: "A",
  },
  my: {
    name: "sakie",
    type: "B",
  },
};

console.log(AraiFamily.my.name);
