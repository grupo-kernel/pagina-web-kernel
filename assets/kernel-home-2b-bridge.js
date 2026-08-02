(() => {
  "use strict";

  const KERNEL_HOME_ROOT_FIX_VERSION = "3.0.0";

  const STYLE_ID = "kernel-home-2b-styles";

  const DATA = {
    researchers: "./core/data/researchers.v2.json",
    publications: "./core/data/publications.v2.json",
    projects: "./core/data/projects.v2.json"
  };

  let dataPromise;
  let renderTicket = 0;

  const escapeHtml = value =>
    String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]);

  const currentLanguage = () => {
    const htmlLanguage = String(
      document.documentElement.lang || ""
    ).toLowerCase();

    const saved = String(
      localStorage.getItem("kernel-language") ||
      localStorage.getItem("language") ||
      localStorage.getItem("lang") ||
      ""
    ).toLowerCase();

    return htmlLanguage.startsWith("en") || saved === "en"
      ? "en"
      : "es";
  };

  const route = () =>
    (
      location.hash
        .replace(/^#\/?/, "")
        .split(/[/?]/)[0] || "home"
    ).toLowerCase();

  const labels = () =>
    currentLanguage() === "en"
      ? {
          welcome: "Welcome to",
          name: "El Kernel",
          group: "Research Group",
          intro:
            "We generate knowledge, develop solutions and promote scientific and technological innovation with social and academic impact.",
          work: "Explore our work",
          laboratory: "Explore the Laboratory",
          researchers: "Researchers",
          publications: "Publications",
          projects: "Featured projects",
          participations: "Project participations",
          toolsTitle: "Featured tools",
          xmeraTitle: "ITLA · Xmera",
          xmeraText: "Grade publishing assistant for ITLA.",
          bannerTitle: "UNAPEC · Banner",
          bannerText: "Grade file preparation for UNAPEC.",
          calculatorsTitle: "Statistical calculators",
          calculatorsText: "Analysis tools for research data.",
          assistantsTitle: "Research assistants",
          assistantsText:
            "Smart guidance for methodology and statistics.",
          open: "Open",
          researchLines: "Research areas",
          seeAll: "See all",
          appliedStats: "Applied statistics",
          appliedStatsText:
            "Statistical models, inference and evidence-based decision making.",
          computing: "Scientific computing",
          computingText:
            "Numerical algorithms, artificial intelligence and scientific software.",
          methodology: "Research methodology",
          methodologyText:
            "Design, validation, reproducibility and academic integrity.",
          education: "Mathematics education",
          educationText:
            "Teacher education, curriculum and educational innovation.",
          nonlinear: "Nonlinear systems",
          nonlinearText:
            "High-order iterative methods, stability and dynamics.",
          recent: "Platform highlights",
          item1:
            "Kernel Core integrated without losing institutional tools",
          item1Text:
            "Team, academic background, projects and publications in one platform.",
          item2: "Intelligent Research Laboratory",
          item2Text:
            "Protected access, statistical assistant, calculators and methodological library.",
          item3: "Scientific catalog 2.0",
          item3Text:
            "Searchable publications and projects with traceable relationships.",
          quick: "Quick access",
          team: "Research team",
          formation: "Academic background",
          publications20: "Publications 2.0",
          projects20: "Projects 2.0",
          profiles: "Scientific profiles",
          featuredProjects: "Featured initiatives",
          laboratoryTitle: "Intelligent Research Laboratory",
          laboratoryText:
            "Statistical assistant, calculators, methodological library and protected research services.",
          enterLaboratory: "Enter the Laboratory",
          loading: "Loading the integrated platform…",
          error:
            "The new homepage could not load its institutional data."
        }
      : {
          welcome: "Bienvenidos a",
          name: "El Kernel",
          group: "Grupo de Investigación",
          intro:
            "Generamos conocimiento, desarrollamos soluciones y promovemos la innovación científica y tecnológica con impacto académico y social.",
          work: "Conoce nuestro trabajo",
          laboratory: "Explora el Laboratorio",
          researchers: "Investigadores",
          publications: "Publicaciones",
          projects: "Proyectos destacados",
          participations: "Participaciones en proyectos",
          toolsTitle: "Herramientas destacadas",
          xmeraTitle: "ITLA · Xmera",
          xmeraText:
            "Asistente para publicación de calificaciones del ITLA.",
          bannerTitle: "UNAPEC · Banner",
          bannerText:
            "Preparación de archivos de calificaciones para UNAPEC.",
          calculatorsTitle: "Calculadoras estadísticas",
          calculatorsText:
            "Herramientas para análisis de datos de investigación.",
          assistantsTitle: "Asistentes de investigación",
          assistantsText:
            "Orientación inteligente en metodología y estadística.",
          open: "Abrir",
          researchLines: "Líneas de investigación",
          seeAll: "Ver todas",
          appliedStats: "Estadística aplicada",
          appliedStatsText:
            "Modelos estadísticos, inferencia y decisiones basadas en evidencia.",
          computing: "Computación científica",
          computingText:
            "Algoritmos numéricos, inteligencia artificial y software científico.",
          methodology: "Metodología de la investigación",
          methodologyText:
            "Diseño, validación, reproducibilidad e integridad académica.",
          education: "Educación matemática",
          educationText:
            "Formación docente, currículo e innovación educativa.",
          nonlinear: "Sistemas no lineales",
          nonlinearText:
            "Métodos iterativos de alto orden, estabilidad y dinámica.",
          recent: "Novedades de la plataforma",
          item1:
            "Kernel Core integrado sin perder herramientas institucionales",
          item1Text:
            "Equipo, formación, proyectos y publicaciones dentro de una sola plataforma.",
          item2: "Laboratorio Inteligente de Investigación",
          item2Text:
            "Acceso protegido, asistente estadístico, calculadoras y biblioteca metodológica.",
          item3: "Catálogo científico 2.0",
          item3Text:
            "Publicaciones y proyectos consultables con relaciones trazables.",
          quick: "Acceso rápido",
          team: "Equipo de investigadores",
          formation: "Formación académica",
          publications20: "Publicaciones 2.0",
          projects20: "Proyectos 2.0",
          profiles: "Perfiles científicos",
          featuredProjects: "Iniciativas destacadas",
          laboratoryTitle:
            "Laboratorio Inteligente de Investigación",
          laboratoryText:
            "Asistente estadístico, calculadoras, biblioteca metodológica y servicios de investigación con acceso protegido.",
          enterLaboratory: "Ingresar al Laboratorio",
          loading: "Cargando la plataforma integrada…",
          error:
            "No fue posible cargar los datos institucionales de la nueva portada."
        };

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;

    style.textContent = `
      .kernel-home-2b{
        --kh-navy:#071820;
        --kh-blue:#0b4e88;
        --kh-teal:#0f5b5d;
        --kh-gold:#d5a54a;
        --kh-soft:#f4f8fb;
        width:100%;
        background:#eef4f8;
        color:#0f172a;
        font-family:inherit
      }

      .kernel-home-2b *{
        box-sizing:border-box
      }

      .kernel-home-2b button{
        font:inherit
      }

      .kernel-home-2b__layout{
        display:grid;
        grid-template-columns:minmax(0,1fr) 310px;
        max-width:1680px;
        margin:0 auto;
        background:#fff;
        box-shadow:0 24px 80px rgba(7,24,32,.13)
      }

      .kernel-home-2b__main{
        min-width:0
      }

      .kernel-home-2b__hero{
        position:relative;
        min-height:410px;
        overflow:hidden;
        padding:clamp(2rem,5vw,4.6rem);
        color:#fff;
        background:
          radial-gradient(
            circle at 66% 26%,
            rgba(40,155,255,.38),
            transparent 20%
          ),
          radial-gradient(
            circle at 38% 70%,
            rgba(15,91,93,.42),
            transparent 24%
          ),
          linear-gradient(
            135deg,
            #06141f 0%,
            #062d52 52%,
            #071820 100%
          )
      }

      .kernel-home-2b__hero:before{
        content:"";
        position:absolute;
        inset:0;
        opacity:.28;
        background-image:
          linear-gradient(
            rgba(111,190,255,.2) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(111,190,255,.16) 1px,
            transparent 1px
          );
        background-size:44px 44px;
        mask-image:linear-gradient(
          to right,
          black,
          transparent 88%
        )
      }

      .kernel-home-2b__hero:after{
        content:"";
        position:absolute;
        right:6%;
        top:11%;
        width:42%;
        height:78%;
        border-radius:50%;
        border:1px solid rgba(102,190,255,.18);
        box-shadow:
          0 0 90px rgba(46,161,255,.18),
          inset 0 0 60px rgba(46,161,255,.1);
        transform:rotate(-12deg)
      }

      .kernel-home-2b__hero-grid{
        position:relative;
        z-index:1;
        display:grid;
        grid-template-columns:
          minmax(0,.95fr)
          minmax(430px,1.25fr);
        gap:2rem;
        align-items:center
      }

      .kernel-home-2b__welcome{
        font-size:clamp(1rem,2vw,1.35rem);
        font-weight:700;
        color:#c9e7ff
      }

      .kernel-home-2b__hero h1{
        margin:.25rem 0 0;
        font-size:clamp(3rem,7vw,6.2rem);
        font-weight:950;
        line-height:.92;
        letter-spacing:-.055em
      }

      .kernel-home-2b__group{
        margin:.55rem 0 0;
        font-size:clamp(1.25rem,3vw,2.05rem);
        font-weight:850;
        color:#eaf6ff
      }

      .kernel-home-2b__intro{
        max-width:610px;
        margin:1.35rem 0 0;
        color:#c9d8e5;
        font-size:clamp(.98rem,1.5vw,1.12rem);
        line-height:1.72
      }

      .kernel-home-2b__actions{
        display:flex;
        flex-wrap:wrap;
        gap:.8rem;
        margin-top:1.45rem
      }

      .kernel-home-2b__action{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:.55rem;
        min-height:48px;
        padding:.78rem 1.15rem;
        border:1px solid rgba(255,255,255,.38);
        border-radius:.75rem;
        background:rgba(255,255,255,.06);
        color:#fff;
        font-size:.78rem;
        font-weight:900;
        text-transform:uppercase;
        letter-spacing:.025em;
        transition:.18s ease
      }

      .kernel-home-2b__action--primary{
        border-color:#2679df;
        background:#1267ca;
        box-shadow:0 10px 30px rgba(18,103,202,.28)
      }

      .kernel-home-2b__action:hover{
        transform:translateY(-2px);
        background:#fff;
        color:#071820
      }

      .kernel-home-2b__stats{
        display:grid;
        grid-template-columns:repeat(4,minmax(0,1fr));
        overflow:hidden;
        border:1px solid rgba(255,255,255,.2);
        border-radius:1.25rem;
        background:rgba(255,255,255,.12);
        box-shadow:0 18px 48px rgba(0,0,0,.2);
        backdrop-filter:blur(14px)
      }

      .kernel-home-2b__stat{
        min-width:0;
        padding:1.55rem .8rem;
        text-align:center;
        border-right:1px solid rgba(255,255,255,.15)
      }

      .kernel-home-2b__stat:last-child{
        border-right:0
      }

      .kernel-home-2b__stat i{
        display:block;
        margin-bottom:.45rem;
        color:#82bdff;
        font-size:2rem
      }

      .kernel-home-2b__stat strong{
        display:block;
        font-size:clamp(1.55rem,3vw,2.25rem);
        line-height:1;
        font-weight:950
      }

      .kernel-home-2b__stat span{
        display:block;
        margin-top:.55rem;
        color:#d9e7f2;
        font-size:.72rem;
        font-weight:750;
        line-height:1.35
      }

      .kernel-home-2b__content{
        padding:1.25rem 1.5rem 2rem;
        background:#fff
      }

      .kernel-home-2b__section-head{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:1rem;
        margin-bottom:.9rem
      }

      .kernel-home-2b__section-head h2{
        margin:0;
        color:#071820;
        font-size:.93rem;
        font-weight:950;
        text-transform:uppercase;
        letter-spacing:.02em
      }

      .kernel-home-2b__link{
        border:0;
        background:transparent;
        color:#1267ca;
        font-size:.72rem;
        font-weight:850
      }

      .kernel-home-2b__upper{
        display:grid;
        grid-template-columns:
          minmax(0,1.25fr)
          minmax(310px,.75fr);
        gap:1.2rem
      }

      .kernel-home-2b__areas{
        display:grid;
        grid-template-columns:repeat(5,minmax(0,1fr));
        gap:.7rem
      }

      .kernel-home-2b__area{
        min-height:185px;
        padding:1rem .75rem;
        border:1px solid #d9e4ed;
        border-radius:.75rem;
        background:linear-gradient(180deg,#fff,#f8fbfd);
        text-align:center;
        box-shadow:0 5px 16px rgba(7,24,32,.045)
      }

      .kernel-home-2b__area-icon{
        display:grid;
        width:64px;
        height:64px;
        margin:0 auto .85rem;
        place-items:center;
        border-radius:50%;
        color:#fff;
        font-size:1.85rem;
        box-shadow:0 8px 18px rgba(7,24,32,.15)
      }

      .kernel-home-2b__area:nth-child(1)
      .kernel-home-2b__area-icon{
        background:linear-gradient(135deg,#1976d2,#5ea7ff)
      }

      .kernel-home-2b__area:nth-child(2)
      .kernel-home-2b__area-icon{
        background:linear-gradient(135deg,#07996a,#36c995)
      }

      .kernel-home-2b__area:nth-child(3)
      .kernel-home-2b__area-icon{
        background:linear-gradient(135deg,#6535a4,#9d66d9)
      }

      .kernel-home-2b__area:nth-child(4)
      .kernel-home-2b__area-icon{
        background:linear-gradient(135deg,#dc7200,#f3a13c)
      }

      .kernel-home-2b__area:nth-child(5)
      .kernel-home-2b__area-icon{
        background:linear-gradient(135deg,#168fa1,#49c3d1)
      }

      .kernel-home-2b__area h3{
        margin:0;
        color:#071820;
        font-size:.8rem;
        font-weight:900;
        line-height:1.35
      }

      .kernel-home-2b__area p{
        margin:.65rem 0 0;
        color:#617386;
        font-size:.67rem;
        line-height:1.45
      }

      .kernel-home-2b__news{
        display:grid;
        gap:.65rem;
        padding-left:1.1rem;
        border-left:1px solid #dce6ed
      }

      .kernel-home-2b__news-item{
        display:grid;
        grid-template-columns:64px 1fr;
        gap:.7rem;
        align-items:center;
        padding-bottom:.65rem;
        border-bottom:1px solid #e4ebf1
      }

      .kernel-home-2b__news-icon{
        display:grid;
        width:64px;
        height:48px;
        place-items:center;
        border-radius:.55rem;
        background:linear-gradient(135deg,#071820,#0f5b5d);
        color:#8ec9ff;
        font-size:1.45rem
      }

      .kernel-home-2b__news-item h3{
        margin:0;
        color:#071820;
        font-size:.76rem;
        font-weight:900;
        line-height:1.35
      }

      .kernel-home-2b__news-item p{
        margin:.25rem 0 0;
        color:#64748b;
        font-size:.64rem;
        line-height:1.4
      }

      .kernel-home-2b__lower{
        display:grid;
        grid-template-columns:
          minmax(0,.92fr)
          minmax(0,1.08fr);
        gap:1.2rem;
        margin-top:1.35rem
      }

      .kernel-home-2b__quick{
        display:grid;
        grid-template-columns:repeat(5,minmax(0,1fr));
        gap:.65rem
      }

      .kernel-home-2b__quick-card{
        min-height:105px;
        padding:.85rem .55rem;
        border:1px solid #d9e4ed;
        border-radius:.65rem;
        background:#fff;
        color:#071820;
        text-align:center;
        font-size:.68rem;
        font-weight:900;
        line-height:1.35;
        box-shadow:0 4px 12px rgba(7,24,32,.04)
      }

      .kernel-home-2b__quick-card i{
        display:block;
        margin-bottom:.45rem;
        color:#1267ca;
        font-size:1.7rem
      }

      .kernel-home-2b__projects{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:.65rem
      }

      .kernel-home-2b__project{
        min-height:105px;
        padding:.85rem;
        border:1px solid #d9e4ed;
        border-radius:.65rem;
        background:#fff
      }

      .kernel-home-2b__project span{
        display:inline-flex;
        padding:.25rem .45rem;
        border-radius:999px;
        background:#dff5ec;
        color:#0f6f4f;
        font-size:.55rem;
        font-weight:900;
        text-transform:uppercase
      }

      .kernel-home-2b__project h3{
        margin:.55rem 0 0;
        color:#071820;
        font-size:.68rem;
        font-weight:900;
        line-height:1.38
      }

      .kernel-home-2b__aside{
        display:flex;
        flex-direction:column;
        gap:.75rem;
        padding:1rem;
        background:#f7f9fb;
        border-left:1px solid #dae5ed
      }

      .kernel-home-2b__aside-title{
        margin:.1rem 0 .15rem;
        color:#071820;
        font-size:.76rem;
        font-weight:950;
        text-transform:uppercase
      }

      .kernel-home-2b__tool{
        position:relative;
        overflow:hidden;
        min-height:132px;
        padding:1rem;
        border:0;
        border-radius:.7rem;
        color:#fff;
        text-align:left;
        box-shadow:0 8px 20px rgba(7,24,32,.13)
      }

      .kernel-home-2b__tool:after{
        content:"";
        position:absolute;
        right:-35px;
        bottom:-48px;
        width:135px;
        height:135px;
        border-radius:50%;
        background:rgba(255,255,255,.1)
      }

      .kernel-home-2b__tool:nth-of-type(1){
        background:linear-gradient(135deg,#183575,#2855a4)
      }

      .kernel-home-2b__tool:nth-of-type(2){
        background:linear-gradient(135deg,#164b43,#287363)
      }

      .kernel-home-2b__tool:nth-of-type(3){
        background:linear-gradient(135deg,#432d77,#7452a7)
      }

      .kernel-home-2b__tool:nth-of-type(4){
        background:linear-gradient(135deg,#0b4e88,#176eb4)
      }

      .kernel-home-2b__tool-icon{
        position:absolute;
        right:1rem;
        top:1rem;
        color:rgba(255,255,255,.75);
        font-size:2.35rem
      }

      .kernel-home-2b__tool h3{
        position:relative;
        z-index:1;
        margin:0;
        max-width:170px;
        font-size:.87rem;
        font-weight:950;
        line-height:1.25
      }

      .kernel-home-2b__tool p{
        position:relative;
        z-index:1;
        max-width:200px;
        margin:.55rem 0 .7rem;
        color:#e8f2ff;
        font-size:.65rem;
        line-height:1.4
      }

      .kernel-home-2b__tool span{
        position:relative;
        z-index:1;
        display:inline-flex;
        padding:.42rem .65rem;
        border-radius:.35rem;
        background:#fff;
        color:#071820;
        font-size:.57rem;
        font-weight:950;
        text-transform:uppercase
      }

      .kernel-home-2b__lab{
        position:relative;
        overflow:hidden;
        margin-top:auto;
        min-height:190px;
        padding:1.15rem;
        border-radius:.75rem;
        background:
          radial-gradient(
            circle at 75% 40%,
            rgba(47,147,255,.55),
            transparent 25%
          ),
          linear-gradient(145deg,#06141f,#072c53);
        color:#fff;
        box-shadow:0 10px 26px rgba(7,24,32,.2)
      }

      .kernel-home-2b__lab:after{
        content:"";
        position:absolute;
        right:15px;
        top:48px;
        width:120px;
        height:90px;
        border:1px solid rgba(100,190,255,.5);
        border-radius:50%;
        box-shadow:
          0 0 30px rgba(66,167,255,.4),
          inset 0 0 20px rgba(66,167,255,.25)
      }

      .kernel-home-2b__lab h3{
        position:relative;
        z-index:1;
        margin:0;
        max-width:190px;
        font-size:.9rem;
        font-weight:950;
        text-transform:uppercase;
        line-height:1.25
      }

      .kernel-home-2b__lab p{
        position:relative;
        z-index:1;
        max-width:190px;
        margin:.75rem 0;
        color:#cfe2f5;
        font-size:.65rem;
        line-height:1.45
      }

      .kernel-home-2b__lab button{
        position:relative;
        z-index:1;
        margin-top:.45rem;
        padding:.58rem .75rem;
        border:0;
        border-radius:.4rem;
        background:#1267ca;
        color:#fff;
        font-size:.6rem;
        font-weight:950;
        text-transform:uppercase
      }

      .kernel-home-2b__loading,
      .kernel-home-2b__error{
        max-width:1200px;
        margin:3rem auto;
        padding:2rem;
        border-radius:1rem;
        text-align:center;
        font-weight:850
      }

      .kernel-home-2b__loading{
        background:#eef8ff;
        color:#0b4e88
      }

      .kernel-home-2b__error{
        background:#fef2f2;
        color:#991b1b
      }

      @media(max-width:1280px){
        .kernel-home-2b__layout{
          grid-template-columns:minmax(0,1fr) 280px
        }

        .kernel-home-2b__areas{
          grid-template-columns:repeat(3,minmax(0,1fr))
        }

        .kernel-home-2b__quick{
          grid-template-columns:repeat(3,minmax(0,1fr))
        }
      }

      @media(max-width:990px){
        .kernel-home-2b__layout{
          grid-template-columns:1fr
        }

        .kernel-home-2b__aside{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          border-left:0;
          border-top:1px solid #dae5ed
        }

        .kernel-home-2b__aside-title{
          grid-column:1/-1
        }

        .kernel-home-2b__lab{
          margin-top:0
        }

        .kernel-home-2b__hero-grid{
          grid-template-columns:1fr
        }

        .kernel-home-2b__stats{
          max-width:780px
        }

        .kernel-home-2b__upper,
        .kernel-home-2b__lower{
          grid-template-columns:1fr
        }

        .kernel-home-2b__news{
          padding-left:0;
          border-left:0;
          border-top:1px solid #dce6ed;
          padding-top:1rem
        }
      }

      @media(max-width:680px){
        .kernel-home-2b__hero{
          min-height:auto;
          padding:2rem 1rem
        }

        .kernel-home-2b__stats{
          grid-template-columns:repeat(2,minmax(0,1fr))
        }

        .kernel-home-2b__stat:nth-child(2){
          border-right:0
        }

        .kernel-home-2b__stat:nth-child(-n+2){
          border-bottom:
            1px solid rgba(255,255,255,.15)
        }

        .kernel-home-2b__content{
          padding:1rem
        }

        .kernel-home-2b__areas{
          grid-template-columns:repeat(2,minmax(0,1fr))
        }

        .kernel-home-2b__quick{
          grid-template-columns:repeat(2,minmax(0,1fr))
        }

        .kernel-home-2b__projects{
          grid-template-columns:1fr
        }

        .kernel-home-2b__aside{
          grid-template-columns:1fr
        }

        .kernel-home-2b__action{
          width:100%
        }

        .kernel-home-2b__hero h1{
          font-size:3.4rem
        }
      }

      @media(max-width:420px){
        .kernel-home-2b__areas{
          grid-template-columns:1fr
        }

        .kernel-home-2b__quick{
          grid-template-columns:1fr
        }

        .kernel-home-2b__hero h1{
          font-size:3rem
        }
      }

      @media(prefers-reduced-motion:reduce){
        .kernel-home-2b__action,
        .kernel-home-2b__card{
          transition:none
        }

        .kernel-home-2b__action:hover{
          transform:none
        }
      }
    `;

    document.head.appendChild(style);
  }

  async function loadData() {
    if (!dataPromise) {
      dataPromise = Promise.all([
        fetch(DATA.researchers, {
          cache: "default"
        }).then(response =>
          response.ok
            ? response.json()
            : Promise.reject(
                new Error(`researchers ${response.status}`)
              )
        ),

        fetch(DATA.publications, {
          cache: "default"
        }).then(response =>
          response.ok
            ? response.json()
            : Promise.reject(
                new Error(`publications ${response.status}`)
              )
        ),

        fetch(DATA.projects, {
          cache: "default"
        }).then(response =>
          response.ok
            ? response.json()
            : Promise.reject(
                new Error(`projects ${response.status}`)
              )
        )
      ]).then(
        ([researchers, publications, projects]) => ({
          researchers,
          publications,
          projects
        })
      );
    }

    return dataPromise;
  }

  const routeButton = (
    routeName,
    inner,
    className = ""
  ) => `
    <button
      type="button"
      class="${className}"
      data-kernel-home-route="${escapeHtml(routeName)}"
    >
      ${inner}
    </button>
  `;

  function areaCard(icon, title, description) {
    return `
      <article class="kernel-home-2b__area">
        <span class="kernel-home-2b__area-icon">
          <i class="bx ${icon}"></i>
        </span>

        <h3>${escapeHtml(title)}</h3>

        <p>${escapeHtml(description)}</p>
      </article>
    `;
  }

  function toolCard(
    routeName,
    icon,
    title,
    description
  ) {
    return routeButton(
      routeName,
      `
        <i
          class="kernel-home-2b__tool-icon bx ${icon}"
        ></i>

        <h3>${escapeHtml(title)}</h3>

        <p>${escapeHtml(description)}</p>

        <span>
          ${escapeHtml(labels().open)} →
        </span>
      `,
      "kernel-home-2b__tool"
    );
  }

  function quickCard(routeName, icon, label) {
    return routeButton(
      routeName,
      `
        <i class="bx ${icon}"></i>
        ${escapeHtml(label)}
      `,
      "kernel-home-2b__quick-card"
    );
  }

  async function render() {
    if (route() !== "home") return;

    const currentTicket = renderTicket;
    const main = document.getElementById("main");

    if (!main) return;

    if (!main.dataset.kernelHomeOriginalStyle) {
      main.dataset.kernelHomeOriginalStyle =
        main.getAttribute("style") || "";
    }

    main.style.maxWidth = "none";
    main.style.padding = "0";
    main.style.marginTop = "0";
    main.style.marginBottom = "0";

    let t = labels();

    if (!main.querySelector(".kernel-home-2b")) {
      main.innerHTML = `
        <div class="kernel-home-2b__loading">
          ${escapeHtml(t.loading)}
        </div>
      `;
    }

    try {
      const {
        researchers,
        publications,
        projects
      } = await loadData();

      t = labels();

      if (
        currentTicket !== renderTicket ||
        route() !== "home"
      ) {
        return;
      }

      const memberCount = Number(
        researchers.group?.member_count ||
        (researchers.researchers || []).length ||
        9
      );

      const publicationCount = Number(
        publications.summary?.unique_records ||
        publications.records?.length ||
        162
      );

      const featuredProjects = Number(
        projects.summary?.featured_approved_projects ||
        10
      );

      const participations = Number(
        projects.summary
          ?.additional_participations_not_itemized ||
        48
      );

      const signature = [
        currentLanguage(),
        memberCount,
        publicationCount,
        featuredProjects,
        participations
      ].join(":");

      if (
        main.dataset.kernelHomeSignature === signature
      ) {
        return;
      }

      main.dataset.kernelHomeSignature = signature;

      /*
       * El catálogo contiene dos arreglos:
       *
       * 1. approved_projects
       * 2. proposals
       *
       * Ambos deben combinarse para construir las
       * iniciativas visibles en la portada.
       */
      const projectRecords = [
        ...(
          Array.isArray(projects.approved_projects)
            ? projects.approved_projects
            : []
        ),
        ...(
          Array.isArray(projects.proposals)
            ? projects.proposals
            : []
        )
      ].sort(
        (a, b) =>
          Number(a.order || 999) -
          Number(b.order || 999)
      );

      /*
       * Selección explícita de tres proyectos para
       * la portada. El proyecto aprobado de Antmel
       * aparece en primer lugar.
       */
      const featuredProjectIds = [
        "uasd-dinamica-sin-jacobiana",
        "procesos-iterativos",
        "fondocyt-transporte-nutrientes"
      ];

      const selectedProjects = featuredProjectIds
        .map(id =>
          projectRecords.find(
            project => project?.id === id
          )
        )
        .filter(Boolean);

      /*
       * Respaldo: si alguno de los proyectos
       * seleccionados no existe, se completa la
       * lista con otros proyectos destacados.
       */
      const fallbackProjects = projectRecords
        .filter(project => project?.featured === true)
        .slice(0, 3);

      const visibleProjects = [
        ...selectedProjects,
        ...fallbackProjects
      ]
        .filter(
          (project, index, records) =>
            records.findIndex(
              candidate =>
                candidate?.id === project?.id
            ) === index
        )
        .slice(0, 3);

      const projectStatusLabel = project => {
        const isEnglish =
          currentLanguage() === "en";

        const status = String(
          project?.status || ""
        ).toLowerCase();

        if (status === "under-review") {
          return isEnglish
            ? "Under review"
            : "En evaluación";
        }

        if (status === "approved") {
          return isEnglish
            ? "Approved"
            : "Aprobado";
        }

        return isEnglish
          ? "Featured"
          : "Destacado";
      };

      const projectTitle = project => {
        if (
          currentLanguage() === "en" &&
          project?.title_en
        ) {
          return project.title_en;
        }

        return (
          project?.title ||
          project?.name ||
          t.projects20
        );
      };

      const projectCards = visibleProjects.length
        ? visibleProjects
            .map(
              project => `
                <article
                  class="kernel-home-2b__project"
                  data-kernel-home-project="${escapeHtml(
                    project.id || ""
                  )}"
                >
                  <span>
                    ${escapeHtml(
                      projectStatusLabel(project)
                    )}
                  </span>

                  <h3>
                    ${escapeHtml(
                      projectTitle(project)
                    )}
                  </h3>
                </article>
              `
            )
            .join("")
        : [1, 2, 3]
            .map(
              index => `
                <article
                  class="kernel-home-2b__project"
                >
                  <span>
                    ${escapeHtml(
                      currentLanguage() === "en"
                        ? "Featured"
                        : "Destacado"
                    )}
                  </span>

                  <h3>
                    ${escapeHtml(
                      index === 1
                        ? t.laboratoryTitle
                        : index === 2
                          ? t.publications20
                          : t.projects20
                    )}
                  </h3>
                </article>
              `
            )
            .join("");

      main.innerHTML = `
        <section
          class="kernel-home-2b"
          data-kernel-platform-page="home-2b"
        >
          <div class="kernel-home-2b__layout">
            <div class="kernel-home-2b__main">
              <header class="kernel-home-2b__hero">
                <div
                  class="kernel-home-2b__hero-grid"
                >
                  <div>
                    <div
                      class="kernel-home-2b__welcome"
                    >
                      ${escapeHtml(t.welcome)}
                    </div>

                    <h1>
                      ${escapeHtml(t.name)}
                    </h1>

                    <div
                      class="kernel-home-2b__group"
                    >
                      ${escapeHtml(t.group)}
                    </div>

                    <p
                      class="kernel-home-2b__intro"
                    >
                      ${escapeHtml(t.intro)}
                    </p>

                    <div
                      class="kernel-home-2b__actions"
                    >
                      ${routeButton(
                        "lineas",
                        `
                          ${escapeHtml(t.work)}
                          <i
                            class="bx bx-right-arrow-alt"
                          ></i>
                        `,
                        "kernel-home-2b__action kernel-home-2b__action--primary"
                      )}

                      ${routeButton(
                        "laboratorioKernel",
                        `
                          <i class="bx bx-flask"></i>
                          ${escapeHtml(t.laboratory)}
                        `,
                        "kernel-home-2b__action"
                      )}
                    </div>
                  </div>

                  <div
                    class="kernel-home-2b__stats"
                    aria-label="${escapeHtml(
                      t.group
                    )}"
                  >
                    <article
                      class="kernel-home-2b__stat"
                    >
                      <i class="bx bx-group"></i>

                      <strong>
                        ${memberCount}
                      </strong>

                      <span>
                        ${escapeHtml(
                          t.researchers
                        )}
                      </span>
                    </article>

                    <article
                      class="kernel-home-2b__stat"
                    >
                      <i
                        class="bx bx-book-open"
                      ></i>

                      <strong>
                        ${publicationCount}+
                      </strong>

                      <span>
                        ${escapeHtml(
                          t.publications
                        )}
                      </span>
                    </article>

                    <article
                      class="kernel-home-2b__stat"
                    >
                      <i
                        class="bx bx-folder-open"
                      ></i>

                      <strong>
                        ${featuredProjects}
                      </strong>

                      <span>
                        ${escapeHtml(
                          t.projects
                        )}
                      </span>
                    </article>

                    <article
                      class="kernel-home-2b__stat"
                    >
                      <i
                        class="bx bx-network-chart"
                      ></i>

                      <strong>
                        ${participations}+
                      </strong>

                      <span>
                        ${escapeHtml(
                          t.participations
                        )}
                      </span>
                    </article>
                  </div>
                </div>
              </header>

              <div
                class="kernel-home-2b__content"
              >
                <div
                  class="kernel-home-2b__upper"
                >
                  <section>
                    <div
                      class="kernel-home-2b__section-head"
                    >
                      <h2>
                        ${escapeHtml(
                          t.researchLines
                        )}
                      </h2>

                      ${routeButton(
                        "lineas",
                        `${escapeHtml(
                          t.seeAll
                        )} →`,
                        "kernel-home-2b__link"
                      )}
                    </div>

                    <div
                      class="kernel-home-2b__areas"
                    >
                      ${areaCard(
                        "bx-line-chart",
                        t.appliedStats,
                        t.appliedStatsText
                      )}

                      ${areaCard(
                        "bx-network-chart",
                        t.computing,
                        t.computingText
                      )}

                      ${areaCard(
                        "bx-flask",
                        t.methodology,
                        t.methodologyText
                      )}

                      ${areaCard(
                        "bx-book-reader",
                        t.education,
                        t.educationText
                      )}

                      ${areaCard(
                        "bx-infinite",
                        t.nonlinear,
                        t.nonlinearText
                      )}
                    </div>
                  </section>

                  <section>
                    <div
                      class="kernel-home-2b__section-head"
                    >
                      <h2>
                        ${escapeHtml(t.recent)}
                      </h2>
                    </div>

                    <div
                      class="kernel-home-2b__news"
                    >
                      <article
                        class="kernel-home-2b__news-item"
                      >
                        <span
                          class="kernel-home-2b__news-icon"
                        >
                          <i
                            class="bx bx-layer"
                          ></i>
                        </span>

                        <div>
                          <h3>
                            ${escapeHtml(
                              t.item1
                            )}
                          </h3>

                          <p>
                            ${escapeHtml(
                              t.item1Text
                            )}
                          </p>
                        </div>
                      </article>

                      <article
                        class="kernel-home-2b__news-item"
                      >
                        <span
                          class="kernel-home-2b__news-icon"
                        >
                          <i
                            class="bx bx-brain"
                          ></i>
                        </span>

                        <div>
                          <h3>
                            ${escapeHtml(
                              t.item2
                            )}
                          </h3>

                          <p>
                            ${escapeHtml(
                              t.item2Text
                            )}
                          </p>
                        </div>
                      </article>

                      <article
                        class="kernel-home-2b__news-item"
                      >
                        <span
                          class="kernel-home-2b__news-icon"
                        >
                          <i
                            class="bx bx-data"
                          ></i>
                        </span>

                        <div>
                          <h3>
                            ${escapeHtml(
                              t.item3
                            )}
                          </h3>

                          <p>
                            ${escapeHtml(
                              t.item3Text
                            )}
                          </p>
                        </div>
                      </article>
                    </div>
                  </section>
                </div>

                <div
                  class="kernel-home-2b__lower"
                >
                  <section>
                    <div
                      class="kernel-home-2b__section-head"
                    >
                      <h2>
                        ${escapeHtml(t.quick)}
                      </h2>
                    </div>

                    <div
                      class="kernel-home-2b__quick"
                    >
                      ${quickCard(
                        "equipment",
                        "bx-user-circle",
                        t.team
                      )}

                      ${quickCard(
                        "formacion",
                        "bx-graduation",
                        t.formation
                      )}

                      ${quickCard(
                        "publicaciones",
                        "bx-file",
                        t.publications20
                      )}

                      ${quickCard(
                        "proyectos",
                        "bx-folder",
                        t.projects20
                      )}

                      ${quickCard(
                        "equipment",
                        "bx-id-card",
                        t.profiles
                      )}
                    </div>
                  </section>

                  <section>
                    <div
                      class="kernel-home-2b__section-head"
                    >
                      <h2>
                        ${escapeHtml(
                          t.featuredProjects
                        )}
                      </h2>

                      ${routeButton(
                        "proyectos",
                        `${escapeHtml(
                          t.seeAll
                        )} →`,
                        "kernel-home-2b__link"
                      )}
                    </div>

                    <div
                      class="kernel-home-2b__projects"
                    >
                      ${projectCards}
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <aside
              class="kernel-home-2b__aside"
            >
              <h2
                class="kernel-home-2b__aside-title"
              >
                ${escapeHtml(t.toolsTitle)}
              </h2>

              ${toolCard(
                "herramientas",
                "bx-code-alt",
                t.xmeraTitle,
                t.xmeraText
              )}

              ${toolCard(
                "herramientas",
                "bx-spreadsheet",
                t.bannerTitle,
                t.bannerText
              )}

              ${toolCard(
                "laboratorioKernel",
                "bx-calculator",
                t.calculatorsTitle,
                t.calculatorsText
              )}

              ${toolCard(
                "laboratorioKernel",
                "bx-bot",
                t.assistantsTitle,
                t.assistantsText
              )}

              <section
                class="kernel-home-2b__lab"
              >
                <h3>
                  ${escapeHtml(
                    t.laboratoryTitle
                  )}
                </h3>

                <p>
                  ${escapeHtml(
                    t.laboratoryText
                  )}
                </p>

                ${routeButton(
                  "laboratorioKernel",
                  `${escapeHtml(
                    t.enterLaboratory
                  )} →`,
                  ""
                )}
              </section>
            </aside>
          </div>
        </section>
      `;

          } catch (error) {
      if (
        currentTicket !== renderTicket ||
        route() !== "home"
      ) {
        return;
      }

      main.innerHTML = `
        <div
          class="kernel-home-2b__error"
          role="alert"
        >
          ${escapeHtml(t.error)}
        </div>
      `;

      console.error(
        "Kernel Home 2B Bridge:",
        error
      );
    }
  }

  function handleHomeRouteClick(event) {
    const button = event.target.closest(
      "[data-kernel-home-route]"
    );

    if (!button) return;

    const target =
      button.dataset.kernelHomeRoute;

    if (!target) return;

    event.preventDefault();

    const nextHash = `#/${target}`;

    if (location.hash === nextHash) {
      schedule();
      return;
    }

    location.hash = nextHash;
  }

  function restoreMain() {
    renderTicket += 1;
    const main = document.getElementById("main");

    if (!main) return;

    delete main.dataset.kernelHomeSignature;

    if (
      main.dataset.kernelHomeOriginalStyle !==
      undefined
    ) {
      const original =
        main.dataset.kernelHomeOriginalStyle;

      if (original) {
        main.setAttribute("style", original);
      } else {
        main.removeAttribute("style");
      }
    }
  }

  function schedule() {
    addStyles();
    observeMain();

    if (route() === "home") {
      [0, 80, 260].forEach(delay => {
        window.setTimeout(render, delay);
      });
    } else {
      restoreMain();
    }
  }

  let mutationTimer = 0;
  let observedMain = null;
  let mainObserver = null;

  function observeMain() {
    const main = document.getElementById("main");

    if (!main || main === observedMain) return;

    mainObserver?.disconnect();
    observedMain = main;

    mainObserver = new MutationObserver(() => {
      window.clearTimeout(mutationTimer);

      mutationTimer = window.setTimeout(() => {
        if (
          route() === "home" &&
          !main.querySelector(
            '[data-kernel-platform-page="home-2b"]'
          ) &&
          !main.querySelector(
            ".kernel-home-2b__loading"
          )
        ) {
          render();
        }
      }, 50);
    });

    mainObserver.observe(main, {
      childList: true
    });
  }

  document.addEventListener(
    "click",
    handleHomeRouteClick
  );

  window.addEventListener(
    "hashchange",
    schedule
  );

  window.addEventListener(
    "pageshow",
    schedule
  );

  window.addEventListener(
    "kernel-language-change",
    schedule
  );

  document.addEventListener(
    "kernel-language-change",
    schedule
  );

  document.addEventListener(
    "DOMContentLoaded",
    schedule
  );

  schedule();
})();
