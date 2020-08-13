$(function () {
  $("#btnBegin").click(function () {
    $("#btnBegin").fadeOut("slow", function () {
      var p = $('<p id="escriba">Escriba un número entre 2 y 12</p>');
      $(this).replaceWith(p);
      $("#btnBegin").fadeIn("slow");
      var input = $('<input type="text">').attr({
        id: "txtNumber",
        name: "number",
      });
      p.after(input);
      var btnEnter = $('<br><button id="btnJugar">Jugar</button>');
      input.after(btnEnter);
      $(btnEnter).click(function () {
        var inputText = $("#txtNumber").val();
        if (isNaN(inputText)) {
          input.after('<span id="notNumber">No es un número</span>');
        } else {
          $("#btnJugar").fadeOut("slow");
          $("#imgDice").fadeOut("slow", function () {
            var resultado = $('<p id="resultado">El resultado es...</p>');

            function getRandomIntInclusive(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
            }
            var random = getRandomIntInclusive(2, 12);

            $(this).replaceWith(resultado);
            $("#imgDice").fadeIn("slow");

            setTimeout(() => {
              var resultNumberString =
                '<p id="resultNumber">' + random + "</p>";
              var resultNumber = $(resultNumberString);
              resultado.after(resultNumber);

              var btnReload = $(
                '<button id="btnReload">Jugar de Nuevo</button>'
              );
              $(btnReload).click(function () {
                location.reload(true);
              });
              setTimeout(() => {
                resultNumber.after(btnReload);
              }, 1000);
            }, 1000);
          });
        }
      });
    });
  });
});
