// ������� 2
// �������:
// � ���������� name, surname �������� ��� � ������� ��������. ��� ���� � ������� ���������� � �������� � ���������� �������,
// � ����� �������� ������ � �������. ��� ����� ������ ����� ����� � ������� ��������� � �������� ��������, � ���������� ����� �
// � �������. �������� ��������� � ����� ���������� � �������� �� �������� � ������� console.log. � ������� ��������� ���������� �
// console.log �������� ��������� ���� ���� ������������� ��� ���� �������� ��� ��������� ��� ����� � ������� � ����������� �� ����,
// ���� �� �������� ������ ����� ���������������.

let name = 'EvGeNiY';
let surname = 'ZyAyKiN';

if (name.slice(0, 1) === name.slice(0, 1).toUpperCase() && name.slice(1) === name.slice(1).toLowerCase() &&
surname.slice(0, 1) === surname.slice(0, 1).toUpperCase() && surname.slice(1) === surname.slice(1).toLowerCase()) {
	console.log('The name remains unchanged');
	console.log(`name: ${name}`);
	console.log(`surname: ${surname}`);
} else {
	new_name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
	new_surname = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase()
	console.log('The name has been converted');
	console.log(`name: ${new_name}`);
	console.log(`surname: ${new_surname}`);
}