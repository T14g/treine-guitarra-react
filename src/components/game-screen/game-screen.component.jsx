import React,{ useState } from 'react';

import {
    GameBackground,
    ScoreBox, 
    GameContainer, 
    GameLogo,
    GameExplanation,
    Container,
    BotaoDefault
} from './game-screen.style';

const GameScreen = () => {
    
    const [ gameState, setState ] = useState({started : false});
    const { started } = gameState;

    //Render game instructions if the game dont started yet
    const renderInstructions = () =>
        <Container>
            <GameExplanation>
                O objetivo do jogo é ouvir o som das cordas soltas e apertar a opção que você acha ser a certa.
                Você pode ver no canto superior direito quantos acertos/ erros / total de notas a serem descobertas.
            </GameExplanation>

            <GameExplanation>
                Ao final do jogo você pode optar por jogar novamente apertando o botão Restart
            </GameExplanation>
            
            <BotaoDefault onClick={() => setState({started: true})}>INICIAR</BotaoDefault>
        </Container>

    return(
        <GameBackground>
            <GameContainer>
                <Container>
                    <GameLogo>OpenStrings Training</GameLogo>
                    <ScoreBox>Acertos: 1 | Erros: 0 | Total : 10</ScoreBox>
                </Container>
                {
                    started ? (<h1>Começou</h1>) : renderInstructions()
                }
                
            </GameContainer>
        </GameBackground>
    );
}

export default GameScreen;