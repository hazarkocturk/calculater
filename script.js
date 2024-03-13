let btn = document.querySelectorAll(".btn");
      let screen = document.querySelector(".screen");
      let history = document.querySelector(".history");
      let historyArray = [];
      
      screen.innerText = "";
      btn.forEach(function (element) {
        element.addEventListener("click", function (e) {
          let input = e.target.innerText;
          if (input === "=") {
            let result = eval(screen.innerText);
            historyArray.push(screen.innerText + " = " + result);
            screen.innerText = result;
          } else if (input === "AC") {
            screen.innerText = "";
          } else {
            screen.innerText += input;
          }
          history.innerHTML = historyArray.join("<br>");
        });
      });
      window.addEventListener("keydown", function (e) {
        
        let input = e.key;
        if (input === "Enter") {
          let result = eval(screen.innerText);
          historyArray.push(screen.innerText + " = " + result);
          screen.innerText = result;
        } else if (input === "Escape") {
          screen.innerText = "";
        } else if (input === "Backspace") {
            screen.innerText = screen.innerText.slice(0, -1);
        }else if (!isNaN(input) || input === "." || input === "+" || input === "-" || input === "*" || input === "/" || input === "%" || input === "("|| input === ")") {
        screen.innerText += input;
        }
        history.innerHTML = historyArray.join("<br>");
      });