let content = document.getElementById('content');

function toggleMenu(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('show');
}



function home(){
    content.innerHTML = `
         <section class="content-home">
            <div class="content-text">
                <h2>Olá, meu nome é <span class="name">Felipe Silva</span></h2>
                <h1>Eu sou <span class="profision">Desenvolvedor Full Stack</span></h1>
                <p>
                   Eu sou desenvolvedor de softwares a mais de 4 anos. 
                   Tenho experiência em front-end com criação de layouts de paginas intuitivas e responsivas e tambem atuo no back-end integrando a 
                   parte do usuario e a lógica de negócio.   
                </p>

                <div class="btn-about">
                    <p onclick="about()">Mais sobre mim</p>
                </div>
            </div>

            <div class="content-image">
                <div class="bord-image">
                    <img class="image-profile" src="../img/profile.jpeg" alt="">
                </div>
            </div>
        </section>
    `
}

function about(){
    content.innerHTML = `
         <section class="content-about">
            <h1>Sobre mim</h1>
            <hr class="crosse1-about">
            <hr class="crosse2-about">
            <div class="content-text-about">
                <h2 class="content-text-about-name">Meu nome é Felipe Silva e sou <span class="profision">Desenvolvedor Full Stack</span> </h2>
                <p>
                    Olá! Sou um desenvolvedor full stack com quase 4 anos de experiência, sendo quase 2 deles como analista de sistemas no AME em Caraguatatuba. No AME, trabalho com manutenção e desenvolvimento de sistemas web utilizando HTML, CSS, JavaScript e ASP Classic, além de bibliotecas como jQuery, DataTables, Bootstrap e FullCalendar. 
                    Esses sistemas ajudam a melhorar o dia a dia dos colaboradores do ambulatório.
                    Fora do AME, também desenvolvo utilizando Node.js, React.js, MySQL e TypeScript, sempre buscando novas soluções e desafios que me ajudam a crescer como desenvolvedor. Amo aprender novas tecnologias e criar sistemas que realmente fazem a diferença!   
                </p>
            </div>
        </section>

        <section class="content-about-profile">
            <div class="content-about-profile-data">
                <div class="content-about-profile-list">
                    <div>
                        <ul class="content-about-profile-list-data">
                            <li class="content-about-profile-list-item">Aniversario: 09 Abril 1993</li>
                            <li class="content-about-profile-list-item">Email: felipe.rtec@gmail.com</li>
                            <li class="content-about-profile-list-item">Cidade: Caraguatatuba</li>
                        </ul>
                    </div>
                    <div>
                        <ul class="content-about-profile-list-data">
                            <li class="content-about-profile-list-item">Idade: 31 anos</li>
                            <li class="content-about-profile-list-item">Telefone: (12) 98299-1429</li>
                        </ul>
                    </div>
                </div>
                <div class="content-about-profile-progress">
                    <div class="progress-container">
                        <label for="">HTML</label>
                        <span class="progress-label">75%</span>
                        <progress id="file1" value="75" max="100"></progress>
                    </div>
                    <div class="progress-container">
                        <label for="">CSS</label>
                        <span class="progress-label">75%</span>
                        <progress id="file2" value="75" max="100"> 75% </progress>
                    </div>
                    <div class="progress-container">
                        <label for="">Javascript</label>
                        <span class="progress-label">90%</span>
                        <progress id="file3" value="90" max="100"> 90% </progress>
                    </div>
                    <div class="progress-container">
                        <label for="">ASP Classic</label>
                        <span class="progress-label">75%</span>
                        <progress id="file4" value="75" max="100"> 75% </progress>
                    </div>
                    <div class="progress-container">
                        <label for="">ORACLE</label>
                        <span class="progress-label">70%</span>
                        <progress id="file5" value="70" max="100"> 70% </progress>
                    </div>
                    <div class="progress-container">
                        <label for="">PHP</label>
                        <span class="progress-label">70%</span>
                        <progress id="file6" value="70" max="100"> 70% </progress>
                    </div>
                    <div class="progress-container">
                        <label for="">NodeJS</label>
                        <span class="progress-label">80%</span>
                        <progress id="file7" value="80" max="100"> 80% </progress>
                    </div>
                    <div class="progress-container">
                        <label for="">ReactJS</label>
                        <span class="progress-label">75%</span>
                        <progress id="file8" value="75" max="100"> 75% </progress>
                    </div>
                </div>
            </div>
            <div class="timeline">
                <div class="container left">
                    <div class="content-timeline">
                        <h2>2022</h2>
                        <p>Analista de Sistemas no AME Caraguatatuba (2022 - Presente), atuando com HTML, CSS, JavaScript, ASP Classic, PHP, Oracle, Python, Bootstrap e jQuery.</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content-timeline">
                      <h2>2020</h2>
                      <p>Contratado como Analista de Suporte na DK Consultorias (2020), atuando com infraestrutura e desenvolvimento de software utilizando PHP, SQL Server, HTML, CSS, JavaScript e Bootstrap.</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content-timeline">
                      <h2>2019</h2>
                      <p>Conclusão da Graduação em Análise e Desenvolvimento de Sistemas - IF Campus Caraguatatuba (2019)</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content-timeline">
                      <h2>2017</h2>
                      <p>Atuação como Técnico em Informática (2017), promovido a Coordenador de Informática na UPA de Caraguatatuba.</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content-timeline">
                      <h2>2015</h2>
                      <p>Graduação em Análise e Desenvolvimento de Sistemas - IF Campus Caraguatatuba (Início em 2015)</p>
                    </div>
                </div>
            </div>
        </section>
    `
}


home();