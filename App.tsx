import React from 'react';
import { Printer } from 'lucide-react';
import { SectionTitle, SubSectionTitle, Paragraph, Callout, List, DataTable, PageBreak } from './components/ReportUI';
import { PillarSection } from './components/PillarSection';
import { pillars } from './data/reportContent';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen p-8 print:p-0">
      {/* Floating Print Button for Screen */}
      <div className="fixed bottom-8 right-8 no-print z-50">
        <button
          onClick={handlePrint}
          className="bg-[#004080] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <Printer size={20} />
          Imprimir / Guardar PDF
        </button>
      </div>

      {/* Report Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl min-h-screen print:shadow-none print:w-full">
        
        {/* COVER PAGE */}
        <section className="h-[297mm] relative flex flex-col justify-center px-16 py-20 bg-white print-break-after-always">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#004080]"></div>
          <div className="mt-20">
            <h1 className="text-5xl font-serif font-black text-[#004080] leading-tight mb-8">
              Estratégia Nacional para o Desporto Escolar
            </h1>
            <div className="text-3xl font-serif text-gray-600 font-light mb-16">
              2026-2036
            </div>
            <div className="w-24 h-1 bg-[#004080] mb-12"></div>
            <p className="text-xl text-gray-800 font-medium tracking-wide uppercase">
              Um pilar da identidade da escola: educação, inclusão e excelência
            </p>
          </div>
          <div className="absolute bottom-16 left-16 text-sm text-gray-400">
            Documento Gerado • {new Date().getFullYear()}
          </div>
        </section>

        <PageBreak />

        {/* EXECUTIVE SUMMARY */}
        <section className="px-12 py-12">
          <SectionTitle>Resumo Executivo</SectionTitle>
          <Paragraph>
            O Desporto Escolar constitui um instrumento de educação através do desporto, fundamental para a promoção da atividade física, da saúde mental, do desenvolvimento integral, equidade e inclusão social de crianças e jovens em idade escolar. Contudo, o contexto atual revela desafios estruturais que requerem uma intervenção estratégica, coordenada e de longo prazo.
          </Paragraph>
          <Paragraph>
            A <strong>Estratégia Nacional para o Desporto Escolar (ENDE)</strong> formula um quadro de referência integrado para o período 2026-2036, com ciclos de implementação definidos (2026-2028, 2029-2032, 2033-2036), visando transformar o panorama do desporto na escola nomeadamente, aumentar a quantidade e a qualidade da prática desportiva de crianças e jovens em contexto escolar.
          </Paragraph>
          <Callout title="Diagnóstico Crítico">
            <p className="mb-2">A ENDE responde a níveis preocupantes de inatividade e bem-estar:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>80% dos adolescentes não realiza 60 min/dia de atividade física (OMS).</li>
              <li>Aumento da infelicidade percebida: 18,3% (2018) para 27,7% (2024).</li>
              <li>Persistência de desigualdades de género e territoriais.</li>
            </ul>
          </Callout>
          <Paragraph>
            Para enfrentar estes desafios, é definida uma direção estratégica suportada por <strong>4 pilares centrais</strong> e <strong>3 pilares transversais</strong>. Para operacionalizar a ENDE, definiram-se 13 Objetivos Operacionais e 13 Alvos Estratégicos a alcançar em 2036.
          </Paragraph>
        </section>

        <PageBreak />

        {/* SECTION 1: CONTEXT */}
        <section className="px-12 py-12">
          <SectionTitle number="1.">Enquadramento e Diagnóstico</SectionTitle>
          
          <SubSectionTitle number="1.1">O Contexto Nacional</SubSectionTitle>
          <Paragraph>
            Em Portugal, o desporto em contexto educativo enfrenta desafios multifacetados. A investigação científica evidencia que a prática desportiva regular durante a fase escolar correlaciona-se significativamente com benefícios para a saúde física e mental e desempenho académico.
          </Paragraph>

          <h4 className="font-bold text-[#004080] mt-4 mb-2">Inatividade física e sedentarismo</h4>
          <Paragraph>
            Segundo a OMS, aproximadamente <strong>80% dos adolescentes portugueses</strong> (11-17 anos) não realizam a quantidade mínima recomendada de atividade física. Adicionalmente, dados nacionais revelam que entre 54% e 59% das crianças e jovens passam pelo menos duas horas diárias em atividades sedentárias, contribuindo para a obesidade infantil (31,8%).
          </Paragraph>

          <h4 className="font-bold text-[#004080] mt-4 mb-2">Saúde mental e bem-estar</h4>
          <Paragraph>
            A perceção de infelicidade aumentou significativamente (27,7% em 2024). Paralelamente, 69,7% dos jovens afirmam insatisfação com a escola devido à carga escolar excessiva.
          </Paragraph>

          <h4 className="font-bold text-[#004080] mt-4 mb-2">Taxa de cobertura e dropout</h4>
          <Paragraph>
            Apenas 19,3% dos alunos matriculados são praticantes regulares do Desporto Escolar. Verifica-se um abandono significativo na transição do 3.º Ciclo para o Secundário, com maior incidência feminina.
          </Paragraph>

          <SubSectionTitle number="1.2">O Impacto Potencial</SubSectionTitle>
          <List items={[
            "Benefícios para a saúde: Redução de 20-40% no risco de sedentarismo adulto; prevenção de doenças crónicas.",
            "Desempenho académico: Atividade física contribui para melhorias na concentração e memória.",
            "Retorno do investimento: Para cada euro investido, retorno potencial de 3 a 5 euros (OMS).",
            "Inclusão: Ferramenta para equidade de género e integração de minorias."
          ]} />

          <SubSectionTitle number="1.3">Que Desporto queremos na Escola?</SubSectionTitle>
          <Paragraph>
            A estratégia é suportada pela visão de <strong>Educação através do Desporto</strong>. Foca-se no desenvolvimento integral do indivíduo, no encontro social e na construção de cidadania, validando o Desporto Escolar como espaço de aprendizagem não-formal essencial.
          </Paragraph>
        </section>

        <PageBreak />

        {/* SECTION 2: VISION & MISSION */}
        <section className="px-12 py-12">
          <SectionTitle number="2.">Visão, Missão e Valores</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#004080]">
              <h3 className="text-xl font-serif font-bold text-[#004080] mb-3">2.1 Visão</h3>
              <p className="font-medium text-gray-800 italic mb-2">"Ser um pilar da identidade da Escola."</p>
              <p className="text-sm text-gray-600 text-justify">
                O Desporto Escolar deve ser reconhecido como fundamental no desenvolvimento do projeto educativo, promovendo formação integral e estilos de vida ativos.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#004080]">
              <h3 className="text-xl font-serif font-bold text-[#004080] mb-3">2.2 Missão</h3>
              <p className="text-sm text-gray-600 text-justify">
                Promover e garantir o acesso à prática desportiva de qualidade, regular, gratuita, equitativa e eclética para todos os alunos, como ferramenta educativa essencial.
              </p>
            </div>
          </div>

          <SubSectionTitle number="2.3">Valores Fundamentais</SubSectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {[
               {t: "Cooperação", d: "Fomentar trabalho em equipa e solidariedade."},
               {t: "Equidade e Inclusão", d: "Acesso independente de género, aptidão ou origem."},
               {t: "Disciplina", d: "Competências que transcendem a competição."},
               {t: "Respeito", d: "Fair play e desenvolvimento socioemocional."},
               {t: "Dedicação", d: "Estabelecer metas e trabalhar consistentemente."}
             ].map((v, i) => (
               <div key={i} className="p-4 border border-gray-200 rounded">
                 <strong className="text-[#004080] block mb-1">{v.t}</strong>
                 <span className="text-xs text-gray-600">{v.d}</span>
               </div>
             ))}
          </div>
        </section>

        <PageBreak />

        {/* SECTION 3: PILLARS OVERVIEW */}
        <section className="px-12 py-12">
          <SectionTitle number="3.">Pilares Estratégicos</SectionTitle>
          <Paragraph>
            Para materializar a visão, são definidos <strong>7 Pilares Estratégicos</strong> (4 centrais e 3 transversais).
          </Paragraph>
          
          <div className="mb-6">
            <h4 className="font-serif font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">Pilares Centrais</h4>
            <List items={[
              "1. Prática Desportiva",
              "2. Equidade, Inclusão e Cidadania Ativa",
              "3. Comunidade Escolar e Compromisso",
              "4. Cooperação e Desenvolvimento Multinível"
            ]} />
          </div>

          <div>
            <h4 className="font-serif font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">Pilares Transversais</h4>
            <List items={[
              "5. Conhecimento, Capacitação e Valorização",
              "6. Comunicação e Sustentabilidade",
              "7. Qualidade, Avaliação e Monitorização"
            ]} />
          </div>
        </section>

        <PageBreak />

        {/* SECTION 4: ACTION PLAN (THE BIG TABLES) */}
        <section className="px-12 py-12">
          <SectionTitle number="4.">Plano de Ação: Medidas a Implementar</SectionTitle>
          <Paragraph>
            O Plano de Ação visa operacionalizar a Estratégia em três etapas: <strong>Mobilizar</strong> (2026-2028), <strong>Implementar e Consolidar</strong> (2028-2032) e <strong>Empoderar</strong> (2032-2036).
          </Paragraph>
          <Paragraph>
            Apresentamos de seguida os Pilares, Objetivos e Medidas para o ciclo 2026-2028.
          </Paragraph>

          <div className="mt-8">
            {pillars.map((pillar, index) => (
              <React.Fragment key={pillar.id}>
                 <PillarSection data={pillar} index={index} />
                 {/* Add page break after big sections if needed, mostly handled by CSS */}
                 {index !== pillars.length - 1 && <div className="h-8"></div>} 
              </React.Fragment>
            ))}
          </div>
        </section>

        <PageBreak />

        {/* SECTION 5: GOVERNANCE */}
        <section className="px-12 py-12">
          <SectionTitle number="5.">Modelo de Governança</SectionTitle>
          <Paragraph>
            O modelo será <strong>Multinível</strong> (diferentes níveis de governo) e <strong>Multissetorial</strong> (educação, desporto, saúde, autarquias).
          </Paragraph>

          <SubSectionTitle number="5.1">Bases da Governança</SubSectionTitle>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
            <div className="p-3 bg-gray-50 rounded"><strong className="text-[#004080]">Planeamento:</strong> Candidaturas plurianuais.</div>
            <div className="p-3 bg-gray-50 rounded"><strong className="text-[#004080]">Regulação:</strong> Guias organizacionais claros.</div>
            <div className="p-3 bg-gray-50 rounded"><strong className="text-[#004080]">Monitorização:</strong> Acompanhamento sistemático.</div>
            <div className="p-3 bg-gray-50 rounded"><strong className="text-[#004080]">Transparência:</strong> Relatórios públicos.</div>
            <div className="p-3 bg-gray-50 rounded"><strong className="text-[#004080]">Eficiência:</strong> Alocação baseada em desempenho.</div>
          </div>

          <SubSectionTitle number="5.2">Partes Interessadas</SubSectionTitle>
          <List items={[
            "Setor da Educação: Ministério, AGSE I.P., Direções Escolares.",
            "Setor do Desporto: Secretaria de Estado, IPDJ, COP, Federações, Clubes.",
            "Administração Local: Municípios e Freguesias.",
            "Setor da Saúde e Outros: ULS, ARS, Defesa Nacional."
          ]} />
          
          <Callout>
            A autonomia das escolas é reforçada, permitindo decisões sobre oferta e parcerias locais, respeitando o enquadramento legal.
          </Callout>
        </section>

        <PageBreak />

        {/* SECTION 6: FINAL CONSIDERATIONS */}
        <section className="px-12 py-12">
          <SectionTitle number="6.">Considerações Finais</SectionTitle>
          <Paragraph>
            A presente "Estratégia do Desporto Escolar 2026-2036" apresenta um quadro abrangente para transformar o panorama do desporto escolar, respondendo à inatividade física e desigualdades.
          </Paragraph>
          <Paragraph>
            O sucesso dependerá de um <strong>compromisso político de longo prazo</strong>, investimento adequado, governança eficaz e capacitação contínua. Portugal tem a oportunidade de liderar a transformação que esta estratégia propõe, promovendo saúde, inclusão e excelência.
          </Paragraph>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>Estratégia Nacional para o Desporto Escolar 2026-2036</p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;