import React,{useState, useEffect} from 'react';
import openStringsData from './open-strings.data';

const OpenStrings = () => {
    
    const [stringsData, setStringsData] = useState({stringsArr : [], current : null});
    const { stringsArr } = stringsData;

    //Component did mount
    useEffect(() => {
        sortArray();
    },[]);

    //Generate a random string number between 1 and 6
    const randomString = () => Math.ceil(Math.random() * 6);
    
    //Sort Guitar Strings array in a random order
    const sortArray = (stringList = []) => {

        if(stringList.length < 6){
            let stringNumber = randomString();

            //If the string isnt in the array yet
            if(!stringList.includes(stringNumber)){
                stringList.push(stringNumber);
            }
            
            //Check if stringList already have 6 strings
            if(stringList.length < 6){
                sortArray(stringList);
            }else{
                let stringsSorted = [];

                //Use stringList to push strings in order into a final array
                stringList.map(stringNumber => {
                    let currentString = openStringsData.filter(s => s.id === stringNumber);
                    stringsSorted.push(currentString[0]);
                })

                //Save the strings array in the right order
                setStringsData({stringsArr : stringsSorted});
            }
        }
    }
    
    

    return(
        <div>
            {
              stringsArr !== null ? (
                stringsArr.map(guitarString =>
                    ( <div className="container" key={guitarString.id}>
                        <h2>Nome da corda: {guitarString.nome}</h2>
                            <audio controls>
                        <source src={guitarString.arquivo} type="audio/mpeg"></source>
                        Your browser does not support the audio element.
                        </audio>
                    </div>)
                    )
              ) : null
            }
        <button onClick={() => sortArray()}>Teste</button>
{/* 
        <div className="strings-panel">
            <p className="question">Ouça o som da corda solta e diga,qual o nome da nota que foi tocada?</p>
        </div>
        <ul className="string-options">
            <li><button>Mizinha (E)</button></li>
            <li><button>Si (B)</button></li>
            <li><button>Sol (G)</button></li>
            <li><button>Ré (D)</button></li>
            <li><button>Lá (A)</button></li>
            <li><button>Mizona (E)</button></li>
        </ul> */}

        </div>
    );
}

export default OpenStrings;