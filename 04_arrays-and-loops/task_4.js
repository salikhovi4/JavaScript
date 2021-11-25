// ������� 4
// ������������� ������ ����� 1�31 ������������ (����� ������). ������� � ������� console.log ��� ������� �� ����� ������
// ${�����} ������, ${���� ������}. ���� ������ 1 ������ ������ ���������� � ������� ����������, �� ���� ��������� ������
// ��������� �������� ��� ������ ��� ������, � �������� ���������� �����. ��������� 1: ��� ���� ������ ����� ������� ������
// � ���������� ����, ����� ���������� � ���� �� �������. ��������� 2: ������ ��� ������ ����� ��������� � ������� �������� ������� �� �������.
// �������� ����������:
// ��� ������ ���������� ��� ������ 1 ������ ��� ��� ��������� ���������. ��������, ��� ��������:
// 1 ������, �������
// 2 ������, �����
// 3 ������, �������
// 4 ������, �������
// 5 ������, �������
// 6 ������, �����������
// 7 ������, �����������
// � �.�.

let jan_nums = [];
for (i = 1; i <= 31; i ++) {
	jan_nums.push(i);
}
let week_days = ['�����������', '�������', '�����', '�������', '�������', '�������', '�����������'];
let start_week_day = '�������';
let start_week_day_index;
for (let i in week_days) {
	if (week_days[i] === start_week_day) {
		start_week_day_index = parseInt(i);
		break
	}
}
for (i = 0; i < jan_nums.length; i++) {
	console.log(`${jan_nums[i]} ������, ${week_days[(start_week_day_index + i) % 7]}`);
}