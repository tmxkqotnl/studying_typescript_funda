const url = "https://jsonplaceholder.typicode.com/users";
const _name = document.querySelector("#username");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

let userData;

// only JS
const startApp = async () => {
  try {
    const response = await axios.get(url);
    userData = response.data;

    _name.innerText = userData[0].username;
    email.innerText = userData[0].email;

    for (const key in userData[0].address) {
      if (Object.hasOwnProperty.call(userData[0].address, key)) {
        address.innerText +=
          "{ " + key + ":" + userData[0].address[key] + " } ";
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log(userData);
  }
};

// startApp();

// **** typeScript **** //

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} info
 * @property {string} username
 * @property {string} email
 * @property {Address} address
 */

/**
 * @typedef {object} userData
 * @property {Array<info>} data
 */

/**
 * @return {Promise<userData>}
 */
function fetchUsingTypeScript() {
  return axios.get(url);
}

fetchUsingTypeScript().then((res) => {
  res.data.forEach((v) => {
    console.log(v.email);
    console.log(v.username);
    console.log(v.address.street);
    console.log(v.address.city);
  });
});
