import styled from "styled-components";

// Container principal que envolve a imagem de perfil
export const ProfilePicture = styled.div`


  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.6s ease; /* Aplica transição suave na transformação */
    position: absolute;
    top: 10%;
    left: 50%;
    right: 2%;
    transform: translate(-50%, -50%);
    display: flex /* Garante que a imagem esteja centralizada */
  }

  /* Ao passar o mouse, a imagem cresce e continua centralizada */
 
`;

// Título ou texto relacionado
export const Title = styled.h1`
  padding: 0;
  text-align: center;
  color: black;
  margin-top: -5px;
  margin-left: -5px;
  font-size: 20px;
`;
