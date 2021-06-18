var emailData = [
    {
        value: "google.com",
        selected: true
    },
    {
        value: "naver.com",
        selected: false
    },
    {
        value: "hanmail.com",
        selected: false
    },
];
var numberOfProducts = [
    {
        value: 1,
        selected: true
    },
    {
        value: 2,
        selected: false
    },
    {
        value: 3,
        selected: false
    },
];
function createDropDownItem(item) {
    var opt = document.createElement("option");
    opt.value = item.value.toString();
    opt.innerText = item.value.toString();
    opt.selected = item.selected;
    return opt;
}
var emailDropDown = document.querySelector("#email-select");
var quantityDropDown = document.querySelector("#quantity-select");
emailData.forEach(function (item) {
    var createdItem = createDropDownItem(item);
    emailDropDown.appendChild(createdItem);
});
numberOfProducts.forEach(function (item) {
    var createdItem = createDropDownItem(item);
    quantityDropDown.appendChild(createdItem);
});
