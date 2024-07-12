import { useParams, useNavigate } from "react-router-dom";

export default function ContactDetailis() {
  const { id } = useParams();

  const navigat = useNavigate()

  const handlerContact = () => {
     alert("Conatato enviado")
     return navigat("/")
  }
  return (
    <div>
      <h1>exibindo mais informacoes do contato: {id}</h1>
      <button onClick={handlerContact} className="bg-blue-500 text-white px-6 py-2 rounded-md">Enviar mensagem</button>
    </div>
  );
}
