let content = document.getElementById('content');

function home(){
    content.innerHTML = `
         <section class="content-home">
            <div class="content-text">
                <h2>Olá, meu nome é <span class="name">Felipe Silva</span></h2>
                <h1>Eu sou <span class="profision">Desenvolvedor Full Stack</span></h1>
                <p>
                   Eu sou desenvolvedor de softwares a mais de 3 anos. 
                   Tenho experiência em front-end com criação de layouts de paginas intuitivas e responsivas e tambem atuo no back-end integrando a 
                   parte do usuario e a lógica de negócio.   
                </p>

                <div class="btn-about">
                    <p>Mais sobre mim</p>
                </div>
            </div>

            <div class="content-image">
                <div class="bord-image">
                    <img class="image-profile" src="" alt="">
                </div>
            </div>
        </section>
    `
}


// home();