import { useEffect, useState } from 'react';

const CSIList = () => {

    const [series, setSeries] = useState([])
    
    useEffect(async () => {
        const url = "http://localhost:5000/series";
        const res = await fetch(url);
        setSeries(await res.json());
    }, [])
    
    return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Gênero</th>
                    <th>Temporada</th>
                    <th>Situação</th>
                    <th>Lançamento</th>
                </tr>
                </thead>

                <tbody>
                {series.map(serie => {
                    
                   let formatDate = (serie.lancamento).split('T', 1)
                                      

                    return(
                        <tr key={serie.id}>
                            <td>{serie.nome}</td>
                            <td>{serie.genero}</td>
                            <td>{serie.temporadas}</td>
                            <td>{serie.situacao}</td>
                            <td>{formatDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default CSIList;
