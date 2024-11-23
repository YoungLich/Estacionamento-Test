import React from "react";
import { Header } from "../../components/Header";
import "./relatorio.css";

export const Relatorio = () => {
  return (
    <>
      <Header />

      <div className="relatorios" >
        <center>
          <h1>Relatórios</h1>
        </center>

        <div class="card-container3">

          <div class="card3">
            <h2 class="text-relatories">Resumo do Mês</h2>
            <div class="date-filter">
              <label for="data-inicial-resumo">Data Inicial:</label>
              <input type="date" id="data-inicial-resumo" />
              <label for="data-final-resumo">Data Final:</label>
              <input type="date" id="data-final-resumo" />
            </div>

            <div class="content-space">

            </div>

            <div class="button-group4">
              <button className="btn4" id="exportar-excel-resumo">Exportar para Excel</button>
              <button className="btn4" id="exportar-pdf-resumo">Exportar para PDF</button>
              <button className="btn4" id="exportar-docx-resumo">Exportar para DOCX</button>
            </div>
          </div>

          <div class="card3">
            <h2 class="text-relatories">Crescimento de Clientes</h2>
            <div class="date-filter">
              <label for="data-inicial-clientes">Data Inicial:</label>
              <input type="date" id="data-inicial-clientes" />
              <label for="data-final-clientes">Data Final:</label>
              <input type="date" id="data-final-clientes" />
            </div>

            <div class="content-space">

            </div>

            <div class="button-group4">
              <button className="btn4" id="exportar-excel-clientes">Exportar para Excel</button>
              <button className="btn4" id="exportar-pdf-clientes">Exportar para PDF</button>
              <button className="btn4" id="exportar-docx-clientes">Exportar para DOCX</button>
            </div>
          </div>


          <div class="card3">
            <h2 class="text-relatories">Novos Usuários</h2>
            <div class="date-filter">
              <label for="data-inicial-novos">Data Inicial:</label>
              <input type="date" id="data-inicial-novos" />
              <label for="data-final-novos">Data Final:</label>
              <input type="date" id="data-final-novos" />
            </div>

            <div class="content-space">

            </div>

            <div class="button-group4">
              <button className="btn4" id="exportar-excel-novos">Exportar para Excel</button>
              <button className="btn4" id="exportar-pdf-novos">Exportar para PDF</button>
              <button className="btn4" id="exportar-docx-novos">Exportar para DOCX</button>
            </div>
          </div>


          <div class="card3">
            <h2 class="text-relatories">Taxa de Retenção dos Usuários</h2>
            <div class="date-filter">
              <label for="data-inicial-retencao">Data Inicial:</label>
              <input type="date" id="data-inicial-retencao" />
              <label for="data-final-retencao">Data Final:</label>
              <input type="date" id="data-final-retencao" />
            </div>

            <div class="content-space">

            </div>

            <div class="button-group4">
              <button className="btn4" id="exportar-excel-retencao">Exportar para Excel</button>
              <button className="btn4" id="exportar-pdf-retencao">Exportar para PDF</button>
              <button className="btn4" id="exportar-docx-retencao">Exportar para DOCX</button>
            </div>
          </div>


          <div class="card3">
            <h2 class="text-relatories">Monitoramento de Incidentes</h2>
            <div class="date-filter">
              <label for="data-inicial-incidentes">Data Inicial:</label>
              <input type="date" id="data-inicial-incidentes" />
              <label for="data-final-incidentes">Data Final:</label>
              <input type="date" id="data-final-incidentes" />
            </div>

            <div class="content-space">

            </div>

            <div class="button-group4">
              <button className="btn4" id="exportar-excel-incidentes">Exportar para Excel</button>
              <button className="btn4" id="exportar-pdf-incidentes">Exportar para PDF</button>
              <button className="btn4" id="exportar-docx-incidentes">Exportar para DOCX</button>
            </div>
          </div>
        </div>
      </div>




    </>
  );
}