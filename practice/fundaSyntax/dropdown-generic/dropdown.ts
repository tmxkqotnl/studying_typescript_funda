interface dataForm<T> {
  value: T;
  selected: boolean;
}

const emailData: dataForm<string>[] = [
  {
    value: "google.com",
    selected: true,
  },
  {
    value: "naver.com",
    selected: false,
  },
  {
    value: "hanmail.com",
    selected: false,
  },
];
const numberOfProducts: dataForm<number>[] = [
  {
    value: 1,
    selected: true,
  },
  {
    value: 2,
    selected: false,
  },
  {
    value: 3,
    selected: false,
  },
];

function createDropDownItem<T>(item: T) {
  const opt = document.createElement("option");
  opt.value = item.value.toString();
  opt.innerText = item.value.toString();
  opt.selected = item.selected;

  return opt;
}

const emailDropDown = document.querySelector("#email-select");
const quantityDropDown = document.querySelector("#quantity-select");

emailData.forEach((item) => {
  const createdItem = createDropDownItem<dataForm<string>>(item);
  emailDropDown.appendChild(createdItem);
});

numberOfProducts.forEach((item) => {
  const createdItem = createDropDownItem<dataForm<number>>(item);
  quantityDropDown.appendChild(createdItem);
});
