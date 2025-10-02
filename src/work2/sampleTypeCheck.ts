// ① 関数の引数型不一致
function add(a: number, b: number): number {
  return a + b;
}

// string を渡している → エラー
console.log(add(1, '2'));

// ② 戻り値の型不一致
function getUserName(id: number): string {
  if (id === 1) {
    return 'Alice';
  } else {
    return 123; // number を返している → エラー
  }
}

// ③ プロパティアクセスの型エラー
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Bob',
};

// 存在しないプロパティを参照 → エラー
console.log(user.age);

// ④ 配列の型エラー
const numbers: number[] = [1, 2, 3];
// string を入れている → エラー
numbers.push('4');
