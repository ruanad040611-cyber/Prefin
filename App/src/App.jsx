import { useState } from "react";
import "./App.css";

const imoveis = [
  { imagem: "/img/casa_rica.webp", tipo: "Casa", titulo: "Casa moderna com piscina", descricao: "Casa ampla, com área de lazer e acabamento de alto padrão.", valor: "R$ 1.250.000" },
  { imagem: "/img/images (1).jpeg", tipo: "Apartamento", titulo: "Apartamento aconchegante", descricao: "Imóvel confortável, ideal para morar com a família.", valor: "R$ 480.000" },
  { imagem: "/img/images (2).jpeg", tipo: "Casa", titulo: "Casa contemporânea", descricao: "Projeto atual, com ambientes bem iluminados.", valor: "R$ 720.000" },
  { imagem: "/img/images (3).jpeg", tipo: "Apartamento", titulo: "Apartamento com varanda", descricao: "Ambientes integrados e varanda para aproveitar o dia.", valor: "R$ 650.000" },
  { imagem: "/img/images (4).jpeg", tipo: "Casa", titulo: "Casa de campo", descricao: "Um lugar tranquilo para descansar e aproveitar a natureza.", valor: "R$ 890.000" },
  { imagem: "/img/images (5).jpeg", tipo: "Apartamento", titulo: "Apartamento familiar", descricao: "Espaços confortáveis em uma ótima localização.", valor: "R$ 560.000" },
  { imagem: "/img/images (6).jpeg", tipo: "Casa", titulo: "Casa com varanda", descricao: "Varanda agradável e espaços integrados para o dia a dia.", valor: "R$ 610.000" },
  { imagem: "/img/images (7).jpeg", tipo: "Apartamento", titulo: "Apartamento elegante", descricao: "Acabamento moderno e ambientes bem aproveitados.", valor: "R$ 940.000" },
  { imagem: "/img/images (8).jpeg", tipo: "Casa", titulo: "Casa ampla", descricao: "Vários ambientes para viver com conforto e praticidade.", valor: "R$ 780.000" },
  { imagem: "/img/images (9).jpeg", tipo: "Apartamento", titulo: "Apartamento com lazer", descricao: "Conforto e praticidade para aproveitar todos os dias.", valor: "R$ 830.000" },
  { imagem: "/img/images (10).jpeg", tipo: "Casa", titulo: "Casa prática e moderna", descricao: "Planta funcional e visual moderno em todos os ambientes.", valor: "R$ 590.000" },
  { imagem: "/img/images (11).jpeg", tipo: "Apartamento", titulo: "Apartamento charmoso", descricao: "Detalhes acolhedores em um espaço cheio de personalidade.", valor: "R$ 520.000" },
  { imagem: "/img/images (12).jpeg", tipo: "Casa", titulo: "Casa espaçosa", descricao: "Boa distribuição dos cômodos e espaço para toda a família.", valor: "R$ 670.000" },
  { imagem: "/img/images (13).jpeg", tipo: "Apartamento", titulo: "Apartamento contemporâneo", descricao: "Linhas atuais e ambientes bem planejados.", valor: "R$ 760.000" },
  { imagem: "/img/images (14).jpeg", tipo: "Casa", titulo: "Casa acolhedora", descricao: "Um lar confortável, com espaços convidativos.", valor: "R$ 450.000" },
  { imagem: "/img/images (15).jpeg", tipo: "Apartamento", titulo: "Apartamento com piscina", descricao: "Condomínio com área de lazer para aproveitar em casa.", valor: "R$ 1.080.000" },
  { imagem: "/img/images (16).jpeg", tipo: "Casa", titulo: "Casa de dois andares", descricao: "Mais espaço e privacidade em uma planta bem distribuída.", valor: "R$ 810.000" },
  { imagem: "/img/images (17).jpeg", tipo: "Apartamento", titulo: "Apartamento com vista", descricao: "Ambiente tranquilo, com espaços confortáveis e iluminados.", valor: "R$ 700.000" },
  { imagem: "/img/images (18).jpeg", tipo: "Casa", titulo: "Casa moderna e iluminada", descricao: "Boa entrada de luz natural e ambientes integrados.", valor: "R$ 740.000" },
  { imagem: "/img/images (19).jpeg", tipo: "Apartamento", titulo: "Apartamento confortável", descricao: "Um imóvel funcional para viver com tranquilidade.", valor: "R$ 495.000" },
  { imagem: "/img/images (20).jpeg", tipo: "Casa", titulo: "Residência sofisticada", descricao: "Acabamentos elegantes e espaços generosos.", valor: "R$ 1.150.000" },
  { imagem: "/img/images (21).jpeg", tipo: "Apartamento", titulo: "Apartamento com espaço externo", descricao: "Espaço agradável para relaxar e aproveitar o tempo livre.", valor: "R$ 630.000" },
  { imagem: "/img/images (22).jpeg", tipo: "Casa", titulo: "Casa de estilo clássico", descricao: "Fachada tradicional e ambientes confortáveis.", valor: "R$ 680.000" },
  { imagem: "/img/images.jpeg", tipo: "Apartamento", titulo: "Apartamento para a família", descricao: "Espaços acolhedores para construir novas histórias.", valor: "R$ 575.000" },
];

const itensPorPagina = 3;

function App() {
  const [filtro, setFiltro] = useState("Todos");
  const [pagina, setPagina] = useState(0);
  const filtrados = filtro === "Todos" ? imoveis : imoveis.filter((imovel) => imovel.tipo === filtro);
  const totalPaginas = Math.ceil(filtrados.length / itensPorPagina);
  const visiveis = filtrados.slice(pagina * itensPorPagina, (pagina + 1) * itensPorPagina);

  function alterarFiltro(novoFiltro) {
    setFiltro(novoFiltro);
    setPagina(0);
  }

  return (
    <div className="site">
      <header className="topo">
        <a className="marca" href="#inicio" aria-label="Prefin, início">Prefin</a>
        <p>Encontre o lugar ideal para viver.</p>
      </header>
      <main id="inicio" className="conteudo">
        <section className="introducao">
          <p className="sobrelinha">SEU PRÓXIMO CAPÍTULO COMEÇA AQUI</p>
          <h1>Encontre seu novo lar</h1>
          <p>Explore imóveis selecionados para diferentes estilos de vida.</p>
        </section>
        <section className="listagem" aria-labelledby="titulo-imoveis">
          <div className="titulo-listagem">
            <div>
              <p className="sobrelinha">OPÇÕES PARA VOCÊ</p>
              <h2 id="titulo-imoveis">Imóveis</h2>
            </div>
            <span className="contador">{filtrados.length} imóveis</span>
          </div>
          <div className="filtros" aria-label="Filtrar imóveis">
            {["Todos", "Casa", "Apartamento"].map((opcao) => (
              <button key={opcao} type="button" className={filtro === opcao ? "filtro ativo" : "filtro"} aria-pressed={filtro === opcao} onClick={() => alterarFiltro(opcao)}>
                {opcao === "Todos" ? "Todos os imóveis" : opcao === "Casa" ? "Casas" : "Apartamentos"}
              </button>
            ))}
          </div>
          <div className="grade-imoveis">
            {visiveis.map((imovel) => (
              <article className="cartao-imovel" key={imovel.imagem}>
                <div className="imagem-imovel"><img src={imovel.imagem} alt={imovel.titulo} loading="lazy" /></div>
                <div className="detalhes-imovel">
                  <span className="tipo-imovel">{imovel.tipo}</span>
                  <h3>{imovel.titulo}</h3>
                  <p className="descricao">{imovel.descricao}</p>
                  <p className="preco">{imovel.valor}</p>
                </div>
              </article>
            ))}
          </div>
          <nav className="paginacao" aria-label="Paginação de imóveis">
            <button type="button" onClick={() => setPagina((atual) => Math.max(0, atual - 1))} disabled={pagina === 0}>← Anterior</button>
            <span>Página {pagina + 1} de {totalPaginas}</span>
            <button type="button" onClick={() => setPagina((atual) => Math.min(totalPaginas - 1, atual + 1))} disabled={pagina >= totalPaginas - 1}>Próxima →</button>
          </nav>
        </section>
      </main>
      <footer className="rodape">
        <a className="marca marca-rodape" href="#inicio">Prefin</a>
        <p>© 2026 Ruan Almeida Duarte</p>
        <nav className="redes-sociais" aria-label="Redes sociais">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
