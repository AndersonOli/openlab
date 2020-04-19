<!doctype html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="assets/css/estilo.css">
    </head>
    <body>
        <main>
            <div class="logo">
            </div>

            <div class="content-about">
                <div class="shape"></div>
                <p>
                    O <span id="marked-link" onclick="redirect('instagram')">@labiras</span> dá início a um novo projeto: o LABIRAS Openlab.
                    Periodicamente, pretendemos compartilhar conhecimentos sobre o âmbito da tecnologia bem como nossas experiências na pesquisa aplicada por meio de mesas redondas, de palestras, de workshops, dentre outras modalidades.
                    Este momento será reservado para que o laboratório se aproxime de vocês, além de promover a divulgação de pesquisadores e suas respectivas pesquisas, o LABIRAS Openlab tem o objetivo de atear a chama que é o interesse por conhecimento dos estudantes e entusiastas.
                    AMANHÃ divulgaremos nosso primeiro convidado e o tema de sua palestra.
                </p>
            </div>

            <footer class="footer">
                <h4>All rights reserved by <span id="marked-link" onclick="redirect('site')">labiras.cc</span></h4>
            </footer>
        </main>
    </body>
    <script>
        function redirect(addressSite) {
            switch (addressSite) {
                case 'instagram':
                    window.open("https://www.instagram.com/labiras", "_blank");
                    break;
                case 'site':
                    window.open("https://labiras.cc", "_blank");
                    break;
                default:
                    window.open("https://labiras.cc", "_blank");
            }

        }
    </script>
</html>