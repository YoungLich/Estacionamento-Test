import React from "react";
import { Header } from "../../components/Header";
import "./pagamento.css";

export const Pagamento = () => {
    return (
        <>
            <Header />
            <div className="pagamentos">
                <h1 id="titulo-pagamentos">Pagamentos</h1>
                <div className="filtro-pagamentos">
                    <label for="filtro-pagamento">Filtrar por:</label>
                    <input type="date" className="data-filtro-pagamento" />
                    <div>
                        <button className="filtrar-pagamentos">Filtrar Pagamentos</button>

                    </div>

                </div>
                <table id="tabela-pagamentos">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>CPF</th>
                            <th>Forma de Pagamento</th>
                            <th>Data de Compra</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>João da Silva</td>
                            <td>joao@email.com</td>
                            <td>000000-00</td>
                            <td>Pix</td>
                            <td>2023-05-03</td>
                            <td>8:00</td>
                        </tr>
                        <tr>
                            <td>Maria Souza</td>
                            <td>maria@email.com</td>
                            <td>000000-00</td>
                            <td>Crédito</td>
                            <td>2023-05-04</td>
                            <td>7:00</td>
                        </tr>
                    </tbody>
                </table>
                <div className="card-container">
                    <div className="card2">
                        <h2 className="text-relatories">Receita Gerada</h2>
                        <div className="content-space">
                            <p>Total de Receita: R$ <span id="total-receita">0,00</span></p>
                        </div>
                        <div className="button-group3">
                            <button className="btn3" id="exportar-excel-receita">Exportar para Excel</button>
                            <button className="btn3" id="exportar-pdf-receita">Exportar para PDF</button>
                            <button className="btn3" id="exportar-docx-receita">Exportar para DOCX</button>
                        </div>
                    </div>
                    <div className="card2">
                        <h2 className="text-relatories">Resumo de Pagamentos Mensais</h2>
                        <div className="content-space">
                            <ul id="lista-resumo-pagamentos"></ul>
                        </div>
                        <div className="button-group3">
                            <button className="btn3" id="exportar-excel-resumo">Exportar para Excel</button>
                            <button className="btn3" id="exportar-pdf-resumo">Exportar para PDF</button>
                            <button className="btn3" id="exportar-docx-resumo">Exportar para DOCX</button>
                        </div>
                    </div>
                </div>
                <div className="receitas-estacionamento">
                    <h2 className="text-relatories">Receitas de Estacionamentos</h2>
                    <div className="filtro-receitas">
                        <label for="select-estacionamento">Selecionar Estacionamento:</label>
                        <select className="data-estacionamento">
                            <option value="tatuape">Tatuapé</option>
                            <option value="aricanduva">Aricanduva</option>
                            <option value="analia-franco">Anália Franco</option>
                            <option value="vila-ema">Vila Ema</option>
                        </select>

                        <label for="select-estacionamento">Selecionar Data:</label>
                        <input type="date" id="date" className="data-estacionamento" />
                        <div>
                            <button className="btn8" id="filtrar-receitas">Filtrar Receitas</button>

                        </div>





                    </div>
                    <div id="grafico-receitas" className="grafico-container">
                        <div className="grafico-placeholder">
                            <p>Gráfico aparecerá aqui</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}