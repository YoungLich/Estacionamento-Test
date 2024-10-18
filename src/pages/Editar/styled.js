import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  display: block;
  margin-top: 50px;
  margin-left: 50px;
  letter-spacing: 3px;
  word-spacing: -2px;
  border: 1px solid #180101;
  border-radius: 1%;
`;


export const ProfilePicture = styled.div`
  width: 185px;
  height: 185px;
  left: 250px;
  position: fixed;
  border-radius: 60%;
  border: 3px;
  img {
   width: 180px;
   height: 180px;
   border-radius: 50%;
   border: 3px solid #180101;
  }
  .edit-icon {
  position: absolute;
  right: 70px;
  cursor: pointer;
  padding:6px;
  opacity: 0.6;
  
}

.delete-icon{
  position: absolute;
  margin-top: 130px;
  right: 70px;
  cursor: pointer;
  padding: 6px;
  opacity: 0.6;
}
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  button{
  background-color: #512da8;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

button.hidden{
    background-color: transparent;
    border-color: #fff;
}

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-weight: bold;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    font-weight: bold;

    &:focus {
      border: 1px solid blue;
    }
  }
`;


export const Title = styled.h1`
  padding: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: rgb(235, 87, 29);
  margin-top: 5px;
  margin-left: 150px;

`;

