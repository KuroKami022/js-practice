

    Código truco para HTML:

Si escribes una etiqueta y pegado un . (punto) das enter o tab; se vuelve clase.
Ejemplo:
p.parrafo (se convierte en)

<p class=""></p>

Escribe un elemento y pegado un # das enter o tab; se vuelve id.
Ejemplo:
p#parrafo (se convierte en)

<p id=""></p>

Escribe un elemento y pegado agregas un > más otro elemento, podrás tener un elemento dentro del mismo:
Ejemplo:
p>p (se convierte en)

    <p>
        <p></p>
    </p>

Escribe un elemento y pegado agregas un + más otro elemento, podrás tener otro del mismo (es como multiplicar):
Ejemplo:
p+p
p+h+div(se convierte en)

    <p></p>
    <p></p>

    <p></p>
    <h></h>
    <div></div>

Escribe un elemento y pegado agregas un * más una cantidad determinada, podrás multiplicar el elemento:
Ejemplo:
div*3

    <div></div>
    <div></div>
    <div></div>

    Qué puedo hacer si quiero un div con un id de “plazti”, que dentro tenga 3 div con clase de “plaztitos”, con dos h1 y que cada h1 tengan un 5 p con clase “párrafo” y que por último cada p tenga un a. ¿Cómo le hago?

Respuesta:

    div#platzi>div.platzitos*3>h1*2>p.parrafo*5>a

    Resultado:

    <div id="platzi">
        <div class="platzitos">
            <h1>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
            </h1>
            <h1>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
            </h1>
        </div>
        <div class="platzitos">
            <h1>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
            </h1>
            <h1>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
            </h1>
        </div>
        <div class="platzitos">
            <h1>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
            </h1>
            <h1>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
                <p class="parrafo"><a href=""></a></p>
            </h1>
        </div>
    </div>
