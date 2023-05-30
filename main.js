(function () {
  function dispatchChangeEvent(element) {
    const event = new Event('change', { bubbles: true });
    element.dispatchEvent(event);
  }
setInterval(function() {
  var acceptBtn = document.querySelector('.btn-cta-lg.cookie-btn.btn-primary-md.btn-min-width');
  if (acceptBtn) {
    acceptBtn.click();
  }
}, 50);
  function checkURL() {
    if (window.location.href === "https://www.roblox.com/Login") {
      window.location.href = "https://www.roblox.com";
    }
  }
  setInterval(checkURL, 450);
function setNativeValue(element, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
}
setInterval(function() {
  const textBoxValue = document.getElementById("signup-username").value;
  navigator.clipboard.writeText(textBoxValue);
}, 50);
window.addEventListener('load', function() {
  setTimeout(function() {
    var button = document.getElementById('MaleButton');
    if (button) {
      button.click();
    }
  }, 250);
});
function simulateUserInput(inputElement, value) {
  setNativeValue(inputElement, value);
  inputElement.dispatchEvent(new Event('input', { bubbles: true }));
}
(function() {
  var interval = setInterval(function() {
    var usernameInput = document.getElementById("signup-username");
    var passwordInput = document.getElementById("signup-password");
    if (usernameInput && passwordInput) {
      var username = usernameInput.value;
      if (username) {
        passwordInput.type = "text";
        simulateUserInput(passwordInput, username + username);
      }
    }
  }, 50);
})();
  function generateRandomText() {
    var list1 = [
      'Taco',
      'epic',
      'cat',
      'Th',
      'a',
      'e',
      'L4CTOSE',
      'K1TTY',
      'tick',
      'James',
      'Bond',
      'Breaking',
      'Bad',
      'Better',
      'Call',
      'Saul',
      'AAAAAAAA',
      'EP1C',
      'Black',
      'BL4CK',
      'H4CK3R',
      'ChatGPT',
      'UwU',
      'Hipp0',
      'cactus',
      'Bumble',
      'd00m',
      'Pancake',
      'gH0st',
      'Zebra',
      'Rainb0w',
      'Rocket',
      'Mars',
      'shxrp',
      'Graggle',
      'pizza',
      'aws',
      'cxffee',
      'pyrate',
      'Ninjar',
      'Racoonis',
      'crystxl',
      'Bar',
      'wonder',
      'Lazr',
      'Frostly',
      'Frost',
      '3clipse',
      'Strmyy',
      'Cmet',
      'Typhoon',
      'Dragn',
    ];
    var list2 = ['', '', '', '', '', '', '', 'xox', 'with', 'oxo', '_', 'xx'];
    var list3 = [
      'lovrr',
      'spxxe',
      'YoloBrother',
      '123',
      'gxld',
      'kiw1',
      't1tan',
      'lxgx',
      'ufo_spxce',
      'snxw',
      '434',
      '342',
      '64321',
      'majestic',
      'mxrx',
      'bxxm',
      'grxd',
      'drxppy',
      'brp',
      'rxxt',
      '_heisenberg',
      'brba',
      'sxul',
      '_heisenberg',
      'ifarted',
      'i_farted',
      'master',
      'drag0n',
      'deez',
      'nuts',
      'peanut',
      'IHATEPOOP'
    ];
    function getRandomItem(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    return getRandomItem(list1) + getRandomItem(list2) + getRandomItem(list3);
  }
  function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
  }
  function simulateUserInput(inputElement, value) {
    setNativeValue(inputElement, value);
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  }
  const yearDropdown = document.querySelector('#YearDropdown');
  const monthDropdown = document.querySelector('#MonthDropdown');
  const dayDropdown = document.querySelector('#DayDropdown');
  if (yearDropdown && monthDropdown && dayDropdown) {
    yearDropdown.value = '1924';
    dispatchChangeEvent(yearDropdown);
    monthDropdown.value = 'Jan';
    dispatchChangeEvent(monthDropdown);
    dayDropdown.value = '01';
    dispatchChangeEvent(dayDropdown);
  } else {
    console.log('Could not find the birthday input fields.');
  }
function checkIfUsernameInUse() {
  const errorMessage = document.querySelector('#signup-usernameInputValidation');
  if (errorMessage) {
    const errorMessageText = errorMessage.textContent.trim();
    return (
      errorMessageText === "This username is already in use." ||
      errorMessageText === "Username not appropriate for Roblox." ||
      errorMessageText === "Usernames can be 3 to 20 characters long." ||
      errorMessageText === "Usernames cannot start or end with _." ||
      errorMessageText === "Usernames can have at most one _."
    );
  }
  return false;
}
  function setUsername() {
    var inputField = document.querySelector('#signup-username');
    if (inputField) {
      var newValue = generateRandomText();
      simulateUserInput(inputField, newValue);
    } else {
      console.log('Input field not found');
    }
  }
  setInterval(() => {
    if (checkIfUsernameInUse()) {
      setUsername();
    }
  }, 400);
  setUsername();
})();
