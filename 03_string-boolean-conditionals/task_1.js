// ������� 1
// �������:
// � ���������� password �������� ������ � ����� ������������ �������. ��������� ��������� ������. ������ �������� �������,
// ����� � �� ���� ���� �� ������ �������, � ����� ���� ���� �� ���� �� �������� '-', '_'. �������� � ������� ���������
//������� ������� ��� ������� ������������ �������.

let password = '123456789';

if (password.length > 3 && (password.includes('-') || password.includes('_'))) {
	console.log('The password is secure');
} else {
	console.log('The password is not strong enough');
}
