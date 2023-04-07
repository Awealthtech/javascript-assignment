let inputs = [];
let display_values = "";
const input = (val) => {
    inputs.push(val);
    display_values = inputs.join("");
    document.getElementById("initial-display").value = display_values;
};

const Answer = () => {
    console.log(display_values);
    display_values = display_values.replace(/%/g, "/100*");

    if (display_values.endsWith("*")) {
        display_values = display_values.replace("*", "");
    }
    const result = eval(display_values);
    document.getElementById("initial-display").value = result;
    inputs = [result];
};

function clr() {
    document.getElementById("initial-display").value = "";
    inputs = [];
};



