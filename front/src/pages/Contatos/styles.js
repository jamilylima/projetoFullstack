import styled from "styled-components";


export const ContatosStyled = styled.div`
   width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  gap: 2rem;
  width: 50rem;
  color: #000;

  backdrop-filter: blur(0px) saturate(0%);
  -webkit-backdrop-filter: blur(0px) saturate(0%);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  .send__data {
    width: 13rem;
    height: 40px;
    cursor: pointer;
  }

`



export const MainStyled = styled.main`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
 

  

div{
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;

}
`