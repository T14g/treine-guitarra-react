import React from 'react';
import openStringsData from './open-strings.data';

const OpenStrings = () => {
    

return(
    <div>
        {
            openStringsData.map(guitarString =>
              ( <div className="container" key={guitarString.id}>
                   <h2>Nome da corda: {guitarString.nome}</h2>
                    <audio controls>
                <source src={guitarString.arquivo} type="audio/mpeg"></source>
                Your browser does not support the audio element.
                </audio>
               </div>)
            )
        }

    </div>
    );
}

export default OpenStrings;