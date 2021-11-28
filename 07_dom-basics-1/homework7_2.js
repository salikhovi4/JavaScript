document.addEventListener("DOMContentLoaded", function () {
    let inp = document.createElement("input");
    inp.type = "text";
    inp.id = "inp-text";
    document.body.append(inp);
    let out = document.createElement("h2");
    out.id = "out-text";
    document.body.append(out);
    function delayedUpdate () {
        document.getElementById('out-text').textContent = document.getElementById('inp-text').value;
        window.setTimeout(delayedUpdate, 1);
    }
    delayedUpdate();
})