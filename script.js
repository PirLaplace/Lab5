function validateForm() {
    var pibInput = document.getElementById("pib");
    var pibPattern = /^[А-ЯІЇЄҐа-яіїєґ]+\s[А-ЯІЇЄҐа-яіїєґ]\.[А-ЯІЇЄҐа-яіїєґ]\.$/;

    var dobInput = document.getElementById("dob");
    var dobPattern = /^\d\d\.\d\d\.\d\d\d\d$/;

    var addressInput = document.getElementById("address");
    var addressPattern = /м\.\s[А-ЯІЇЄҐа-яіїєґ\s]+/;

    var emailInput = document.getElementById("email");

    var telegramInput = document.getElementById("telegram");
    var telegramPattern = /@[\w\d_]+/;

    if (!pibPattern.test(pibInput.value)) {
        alert("Помилка у введенні ПІБ. Використовуйте формат ТТТТТТ Т.Т.");
        pibInput.style.border = "1px solid red";
    } else if (!dobPattern.test(dobInput.value)) {
        alert("Помилка у введенні дати народження. Використовуйте формат ЧЧ.ЧЧ.ЧЧЧЧ");
        dobInput.style.border = "1px solid red";
    } else if (!addressPattern.test(addressInput.value)) {
        alert("Помилка у введенні адреси. Використовуйте формат 'м. Назва'");
        addressInput.style.border = "1px solid red";
    } else if (!emailInput.checkValidity()) {
        alert("Помилка у введенні email. Використовуйте правильний формат.");
        emailInput.style.border = "1px solid red";
    } else if (!telegramPattern.test(telegramInput.value)) {
        alert("Помилка у введенні Telegram. Використовуйте формат @username");
        telegramInput.style.border = "1px solid red";
    } else {
        displayInfo();
    }

    
}

function displayInfo() {
    var pib = document.getElementById("pib").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var telegram = document.getElementById("telegram").value;

    var infoMessage = "ПІБ: " + pib + "\nДата народження: " + dob + "\nАдреса: " + address + "\nEmail: " + email + "\nTelegram: " + telegram;

    alert(infoMessage);
}

// Функція для генерації випадкового кольору
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Функція для інверсії кольору з формату RGB
  function invertColor(color) {
    var rgbValues = color.match(/\d+/g);
    var invertedRed = 255 - parseInt(rgbValues[0]);
    var invertedGreen = 255 - parseInt(rgbValues[1]);
    var invertedBlue = 255 - parseInt(rgbValues[2]);
    return 'rgb(' + invertedRed + ',' + invertedGreen + ',' + invertedBlue + ')';
  }
  
  // Функція для зміни кольору при наведенні на клітинку з номером 17
  function changeColorOnHover21(element) {
    element.addEventListener('mouseover', function () {
        if (element.innerText == '21') {
            element.style.backgroundColor = getRandomColor();
        }
    });
  }
  
  // Функція для відображення палітри при кліку на клітинку з номером 17
  function showColorPalette(element) {
    var colorPalette = document.getElementById('colorPalette');
    var colorPicker = document.getElementById('colorPicker');
    var okButton = document.getElementById('okButton');
  
    colorPalette.style.top = element.offsetTop + 'px';
    colorPalette.style.left = element.offsetLeft + 'px';
    colorPalette.style.display = 'block';
  
    okButton.addEventListener('click', function () {
        element.style.backgroundColor = colorPicker.value;
        colorPalette.style.display = 'none';
    });
  }
  
  // Функція для зміни кольору рядків
  function changeRowColor(rowNum, color) {
    var rows = table.getElementsByTagName('tr');
    rows[rowNum].style.backgroundColor = color;
  }
  
  // Функція для обробки події DoubleClick
  function handleDoubleClick(cell) {
    var cellValue = parseInt(cell.innerText);

    if (cellValue === 21) {
        var rowIndex = cell.parentNode.rowIndex;

        // Зміна кольору рядка при подвійному кліку
        changeRowColor(rowIndex, getRandomColor());
    }
  }
// Створення таблиці
var table = document.getElementById('myTable');

//Налаштування викликів функцій
for (var i = 0; i < 6; i++) {
    var row = table.insertRow();
    for (var j = 0; j < 6; j++) {
        var cell = row.insertCell();
        var cellValue = i * 6 + j + 1;
        cell.innerText = cellValue;
  
        changeColorOnHover21(cell);
        
        cell.addEventListener('click', function () {
            if (this.innerText === '21') {
                showColorPalette(this);
            }
        });
  
        cell.addEventListener('dblclick', function () {
          handleDoubleClick(this);
        });
    }
  }