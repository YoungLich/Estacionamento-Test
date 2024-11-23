import React from "react";
import { Header } from "../../components/Header";
import "./reservas.css";

export const Reservas = () => {
    return (
        <>
            <Header />
            <main className="reservas">
                <h1 id="reserva">Reservas por Dia</h1>
                <div className="filtro-reservas">
                    <label for="filtro">Filtrar por:

                    </label>
                    <input type="date" className="data-filtro" placeholder="Selecione a data" />
                    <div>
                        <button className="btn6">Filtrar Reservas</button>
                    </div>


                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Data de Chegada</th>
                            <th>Hora de Chegada</th>
                            <th>Data de Partida</th>
                            <th>Hora de Partida</th>
                            <th>Vaga</th>
                        </tr>
                    </thead>
                    <tbody id="tabela-reservas">
                        <tr>
                            <td>João da Silva</td>
                            <td>joao@email.com</td>
                            <td>2023-05-01</td>
                            <td>10:00</td>
                            <td>2023-05-03</td>
                            <td>18:00</td>
                            <td>1A</td>
                        </tr>
                        <tr>
                            <td>Maria Souza</td>
                            <td>maria@email.com</td>
                            <td>2023-05-02</td>
                            <td>08:00</td>
                            <td>2023-05-04</td>
                            <td>20:00</td>
                            <td>1B</td>
                        </tr>
                        <tr>
                            <td>Pedro Oliveira</td>
                            <td>pedro@email.com</td>
                            <td>2022-02-02</td>
                            <td>08:00</td>
                            <td>2022-02-03</td>
                            <td>20:00</td>
                            <td>4C</td>
                        </tr>
                    </tbody>
                </table>


                <div className="card-container">
                    <div className="card1">
                        <h2 className="text-reservas">Cancelamentos e No-Shows</h2>
                        <div className="content-space">
                            <p><span id="cancelamentos">5</span> cancelamentos e <span id="no-shows">2</span> no-shows.</p>
                        </div>
                        <div className="button-group2">
                            <button className="btn2" id="exportar-excel-cancelamentos">Exportar para Excel</button>
                            <button className="btn2" id="exportar-pdf-cancelamentos">Exportar para PDF</button>
                            <button className="btn2" id="exportar-docx-cancelamentos">Exportar para DOCX</button>
                        </div>
                    </div>

                    <div className="card1">
                        <h2 className="text-reservas">Demografia dos Usuários</h2>
                        <div className="content-space" id="demografia-chart"></div>
                        <div className="button-group2">
                            <button className="btn2" id="exportar-excel-demografia">Exportar para Excel</button>
                            <button className="btn2" id="exportar-pdf-demografia">Exportar para PDF</button>
                            <button className="btn2" id="exportar-docx-demografia">Exportar para DOCX</button>
                        </div>
                    </div>

                    <div className="card1">
                        <h2 className="text-reservas">Fidelidade do Cliente</h2>
                        <div className="content-space">
                            <p>Clientes com mais de <span id="reserva-alvo">5</span> reservas:</p>
                            <ul id="clientes-fieis"> </ul>
                        </div>
                        <div className="button-group2">
                            <button className="btn2" id="exportar-excel-fidelidade">Exportar para Excel</button>
                            <button className="btn2" id="exportar-pdf-fidelidade">Exportar para PDF</button>
                            <button className="btn2" id="exportar-docx-fidelidade">Exportar para DOCX</button>
                        </div>
                    </div>

                    <div className="card1">
                        <h2 className="text-reservas">Atividades Recorrentes</h2>
                        <div className="content-space" id="atividades-chart"> </div>
                        <div className="button-group2">
                            <button className="btn2" id="exportar-excel-atividades">Exportar para Excel</button>
                            <button className="btn2" id="exportar-pdf-atividades">Exportar para PDF</button>
                            <button className="btn2" id="exportar-docx-atividades">Exportar para DOCX</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}