let arr = [
    {
        value: "Value1",
        label: "Label1",
    },
    {
        value: "Value2",
        label: "Label2",
    },
    {
        value: "Value3",
        label: "Label3",
    },
    {
        value: "Value4",
        label: "Label4",
    },
    {
        value: "Value5",
        label: "Label5",
    },
];

function createSelect(arr, str) {
    let select = document.createElement("select");
    if (Array.isArray(arr)) {
        if (typeof arr[0] === "number" || typeof arr[0] === "string")
            for (let value of arr) {
                let isSelected = str === value;
                let option = new Option(value, value, isSelected, isSelected);
                select.options.add(option);
            }
        else
            for (let el of arr) {
                let value = el.value;
                let isSelected = str === value;
                let option = new Option(el.label, value, isSelected, isSelected);
                select.options.add(option);
            }
    }
    else {
        for (let el of Object.entries(arr)) {
            let value = el[0];
            let isSelected = str === value;
            let option = new Option(el[1], value, isSelected, isSelected);
            select.options.add(option);
        }
    }
    return select;
}

document.body.append(createSelect(arr));
