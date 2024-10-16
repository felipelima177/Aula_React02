export default function HelloWorld() {
    const lista = [
        {
        name: "Fulano",
        idade: 17,
        escola: "senai"
    },
    {
        name: "Maria",
        idade: 18,
        escola: "senai"
    },
    {
        name: "Fulana",
        idade: 19,
        escola: "Escola Teste"
    }
];
  
   const MapPessoas = ({pessoas}) => {
    return pessoas.map((ps,index) =>
        <div key={index}>
            <h1>{ps.name}</h1>
            <h1>{ps.idade}</h1>
            <h1>{ps.escola}</h1>
        </div>
    )
}

   return (
    <>
        <MapPessoas pessoas={lista} />
    </>
   )
}