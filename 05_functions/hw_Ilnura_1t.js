/* Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов
функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке. */
function validator(inp_list, black_list) {
	let out_list = [];
	for (let el of inp_list) {
		if (!(black_list.includes(el))) {
			out_list.push(el)
		}
	}
	console.log(out_list);
	return out_list;
}

let inp_list = ['masha', 'sasha', 'petya', 'misha', 'lalka'];
let black_list = ['lalka', 'sasha'];
validator(inp_list, black_list);