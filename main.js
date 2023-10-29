function registroUsuario() {
    let identificar = true;
    let intentos = 1;

    do {
        let usuario = prompt("Ingresa tu usuario (solo 5 intentos)");
        if (usuario === null) {
            break;
        }

        if (usuario !== "" && intentos <= 5) {
            alert(`¡Bienvenido ${usuario}!`);
            let ropa = prompt("¿Qué prenda le gustaría comprar?").toLowerCase();
            if (ropa == "remera" || ropa == "chomba") {
                alert("Sólo me queda una chomba disponible");
                console.log("Sólo nos queda una chomba disponible.");
            } else if (
                ropa === "pantalones" ||
                ropa === "pantalon" ||
                ropa === "short"
            ) {
                let pantalonShort = parseFloat(prompt("Ingrese su talle"));
                if (pantalonShort <= 40 && pantalonShort > 30) {
                    alert("No me quedan pantalones en su talle.");
                    console.log("No nos quedan pantalones de talles 30-40");
                } else {
                    if (pantalonShort >= 70) {
                        alert(
                            `Sos re gordo chabón, como vas a tener talle ${pantalonShort}? hacete tratar loco, podes morir de una enfermedad vos te das una idea de lo peligroso que es eso? no te dice nada tu familia, tus amigos, no te preocupa tu salud viejo? con la mejor, pero no vuelvas a pasarte por acá, anda a una tienda de gordos o de esas que usan personas como vos, nv`
                        );
                        alert("Mentira gordi, te amo no te enojes");
                        alert("Sólo me queda un pantalon en su talle");
                    } else {
                        alert(`No nos quedan pantalones en talle ${pantalonShort}`);
                        console.log("Comprar pantalones");
                    }
                }
            } else {
                alert("Por favor, vuelva a intentarlo.");
            }
            identificar = false;
        } else {
            alert("No se reconoce el usuario " + usuario);
            intentos++;
            if (intentos > 5) {
                alert("Has superado los 5 intentos, vuelve más tarde");
                console.error("No se reconoce el usuario");
                break;
            }
        }
    } while (identificar);
}



registroUsuario();

