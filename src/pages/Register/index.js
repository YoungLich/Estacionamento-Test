import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../../service/firebaseConfig';
import "./register.css";

// Função para validar o CNPJ através da API
// const validaCNPJAPI = async (cnpj) => {
//   try {
//     const response = await axios.get(`h`ttps://www.receitaws.com.br/v1/${cnpj});
//     if (response.data && response.data.status === 'OK') {
//       return response.data;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error('Erro ao consultar o CNPJ:', error);
//     return null;
//   }
// };

export const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // const [cnpjInfo, setCnpjInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Valida o CNPJ através da API
    // const cnpjData = await validaCNPJAPI(cnpj);
    // if (!cnpjData) {
    //   setError('CNPJ inválido ou não encontrado!');
    //   return;
    // }

    // Caso o CNPJ seja válido, continua com o cadastro
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await addDoc(collection(db, 'Usuarios'), {
        nome: nome,
        email: email,
        password: password,
        telefone: telefone,
        cnpj: cnpj,
        cep: cep,
        rua: rua,
        bairro: bairro,
        numero: numero,
        cidade: cidade,
        estado: estado,
        createdAt: new Date(),
      });

      setSuccess(`Usuário ${nome} criado com sucesso!`);
      setNome('');
      setEmail('');
      setPassword('');
      setTelefone('');
      setCnpj('');
      setCep('');
      setRua('');
      setBairro('');
      setNumero('');
      setCidade('');
      setEstado('');
    } catch (e) {
      setError('Erro ao criar usuário: ' + e.message);
      setSuccess('');
    }
  };

  // const handleCnpjChange = async (e) => {
  //   const cnpjValue = e.target.value;
  //   setCnpj(cnpjValue);

  //   // Quando o CNPJ tem 14 caracteres, faz a consulta à API
  //   if (cnpjValue.length === 14) {
  //     const cnpjData = await validaCNPJAPI(cnpjValue);
  //     if (cnpjData) {
  //       setCnpjInfo(cnpjData);

  //       // Preenche os campos automaticamente com os dados retornados pela API
  //       setNome(cnpjData.nome);
  //       setRua(cnpjData.logradouro);
  //       setBairro(cnpjData.bairro);
  //       setCep(cnpjData.cep);
  //       setCidade(cnpjData.municipio);
  //       setEstado(cnpjData.uf);
  //     } else {
  //       setCnpjInfo(null);
  //     }
  //   }
  // };

  return (
    <div className='criar'>
      <h2>Criar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Telefone:
          <input type="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </label>
        <label>
          CNPJ:
          <input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required
          />

          {/* {cnpjInfo && (
            <div>
              <p><strong>Razão Social:</strong> {cnpjInfo.nome}</p>
              <p><strong>Fantasia:</strong> {cnpjInfo.fantasia}</p>
              <p><strong>Atividade:</strong> {cnpjInfo.atividade_principal[0].text}</p>
            </div>
          )} */}
        </label>
        <label>
          CEP:
          <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} required />
        </label>
        <label>
          Rua:
          <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} required />
        </label>
        <label>
          Bairro:
          <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
        </label>
        <label>
          Numero:
          <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} required />
        </label>
        <label>
          Cidade:
          <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
        </label>
        <label>
          Estado:
          <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} required />
        </label>
        <button class="btncreate" type="submit">Criar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};
