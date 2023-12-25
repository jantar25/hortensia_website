import React from 'react'
import {EditionContainer,EditionDesc,EditionCards,EditionCardsWrapper,
    EditionCard,Title,Description} from './Styles'

const index = () => {
    return (
        <EditionContainer>
            <EditionDesc>
                <p>
                    Jieleze Éditions est une maison d’édition qui promeut la liberté d’expression,
                    l’esprit de dialogue et de pacification et la culture du livre 
                    (lecture, écriture & échanges autour du livre) à travers les lettres, 
                    et surtout les jeunes lettres, dans la sous-région des Grands Lacs africains.<br/> 
                    Étymologiquement, « Jieleze » vient du Swahili et signifie en français « Exprime-toi ».<br/><br/>
                    Elle a pour mission d’accompagner les jeunes écrivains dans le monde éditorial en 
                    les outillant efficacement afin de contribuer à la littérature africaine moderne,
                     voire postmoderne.<br/><br/><br/>
                    Jieleze Éditions a 2 collections principales : 
                </p>
            </EditionDesc>
            <EditionCards>
                <EditionCardsWrapper>
                    <EditionCard>
                        <Title>Eleza</Title>
                        <Description>
                        <b>« Eleza »</b> vient du swahili et signifie « raconter » 
                        pour la publication des contes, des témoignages, des biographies,
                         des récits de voyage et de la poésie. 
                        </Description>
                    </EditionCard>
                    <EditionCard>
                        <Title>Orages et destinées </Title>
                        <Description>
                        Pour la publication des romans, des nouvelles et des essais.
                        </Description>
                    </EditionCard>
                </EditionCardsWrapper>
            </EditionCards>
            <EditionDesc>
                <p>
                Pour nous, la littérature est l’un des éléments cruciaux constituant 
                le patrimoine culturel et linguistique des peuples africains.<br/> 
                Elle permet d’éveiller la conscience collective et de consolider la mémoire populaire. 
                Le livre favorise un échange entre différentes générations, il contribue à la liberté 
                d’expression et il est un instrument de pacification, car chaque livre nous téléporte 
                dans un univers qui ne nous laisse pas indemnes.<br/><br/><br/>
                </p>
                <h3>Soumettez nous vos script ici:</h3>
            </EditionDesc>
        </EditionContainer>
    )
}

export default index
