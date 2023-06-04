
import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { ContatosStyled, MainStyled } from "./styles";

export const Contatos = () => {
    const [contatos, setContatos] = useState([])
 
    useEffect(() => {
        async function getContatos() {
            try {
            const token =localStorage.getItem("projetofull:token")
              api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.get('contatos')
            setContatos(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        getContatos();
      }, []);
    
  

    return (
      <>
        <MainStyled>
          <ContatosStyled>
        <div>
            {contatos?.map((contato, id) => <li key={id}>{contato.name} / {contato.email} / {contato.telefone}</li>) }
        </div>
          </ContatosStyled>
        </MainStyled>
        </> 
    )

 }
