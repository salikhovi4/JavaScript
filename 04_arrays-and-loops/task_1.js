// ������� 1
// �������� ��������� �������� ������ count �� ���������� ������� �� n �� m. ������, ��� n � m ����� ���� ��������������,
// � ����� ����� ���� n > m ��� n < m. �������� ��������� � ������� console.log.
// �������� ����������:
// ��� �������� ������������ ��������� �������� count, m, n � �������� �� ������������ ����������. ������� �������� ��� ��������:
// n = 0, m = 100, count = 100;
// n = 2, m = 5, count = 50;
// n = 100, m = -5, count = 70;
// n = -3, m = -10, count = 42.

let n = 0;
let m = 100;
let count = 100;
let array = [];
let range = Math.abs(m - n);
let min = Math.min(n, m);
for (let i = 1; i <= count; i++) {
	array.push(min + Math.round(Math.random() * range));
}
console.log(array)