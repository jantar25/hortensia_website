import React from "react";
import {
  ProgramsContent,
  ProgramsTrail,
  ProgramsCard,
  ProgramsImgCntainer,
  ProgramsImg,
  ProgramsTitle,
  DescriptionCntainer,
  ProgramsDescription,
} from "./Styles";
import Hadisi from "../../images/Hadisi.JPG";
import Interprenship from "../../images/Interprenship.JPG";
import Pambazuko from "../../images/Pambazuko.JPG";

const Programs = () => {
  return (
    <ProgramsContent>
      <ProgramsTrail>
          <ProgramsCard>
            <ProgramsTitle>Hadisi Njo</ProgramsTitle>
            <ProgramsImgCntainer>
              <ProgramsImg src={Hadisi} alt={Hadisi} />
            </ProgramsImgCntainer>
            <DescriptionCntainer>
              <ProgramsDescription>
              <b> Hadisi Njo </b> , qui, en swahili, veut-dire « Voici l’histoire », 
              est une plateforme numérique éducative et culturelle prônant la sauvegarde et 
              la transmission du patrimoine oral et linguistique africain. C’est une plateforme qui 
              met à la disposition de la communauté africaine et celle de la diaspora, une variété 
              des productions littéraires (contes, devinettes, culture populaire…) sous un support digital 
              (podcasts et e-books), avec la mission d’accompagner la femme dans son rôle d’éducatrice, 
              les chants, contes et devinettes étant au centre de l’éducation dans la tradition africaine.<br/><br/>
              En Afrique : le savoir, la sagesse, et les valeurs se transmettaient autrefois à travers la littérature orale. 
              Aussi bonne et efficace qu’elle soit, cette oralité n’a pas pu résister au temps et aux différents 
              courants de pensées qui influencent l’Afrique depuis le XIXème siècle ; en perdant cette dernière, 
              l’africain est en train de perdre également les connaissances, la sagesse et les valeurs de ses ancêtres.
              </ProgramsDescription>
            </DescriptionCntainer>
          </ProgramsCard>
          <ProgramsCard>
          <ProgramsTitle>PAMBAZUKO</ProgramsTitle>
            <ProgramsImgCntainer>
              <ProgramsImg src={Pambazuko} alt={Pambazuko} />
            </ProgramsImgCntainer>
            <DescriptionCntainer>
              <ProgramsDescription>
              Avec comme slogan en swahili : Nenda, waka kama nyota, qui veut dire en français 
              « Va, brille comme une étoile ! » ; PAMBAZUKO, signifiant « l’aube » en swahili ; 
              est un programme de gestion de carrière d’artistes qui veut offrir un nouveau champ 
              de vision aux jeunes talents en les guidant dans la mis en avant de leur potentiel sous 
              une approche entrepreneuriale et offrir au bon public une consommation originale et adaptée 
              au marché du divertissement, en faisant vivre l’artiste de son talent.<br/>
              Le divertissement, la culture et les arts, étant au centre de la communauté africaine, 
              présentant ainsi un moyen incontesté de transmission des valeurs et d’éducation de masse… 
              c’est un art pour tout un peuple de transcender un quotidien obscur en mettant plus d’attention 
              sur des instants beaucoup plus éclairés, sur des moments positifs, qui rassemblent et 
              qui redonnent une flamme à la communauté, une façon pour cette génération de résister face 
              aux événements qui les contraignent à rester froids.<br/><br/>
              L’industrie du divertissement, dans la région de l’Est de la République Démocratique du Congo 
              en particulier et tout le pays en générale, est un secteur naissant dans le circuit économique local 
              qui manque une structuration professionnelle et un investissement en capitaux suffisant. <br/>
              Il a fallu plusieurs aventures et de l’expérience dans le secteur pour que les opérateurs culturels
              de la région prennent conscience de l’opportunité que présente cette industrie si elle serait bien gérée, 
              contrôlée et développée. C’est dans cette philosophie qu’HORTENSIA Organisation, 
              en collaboration avec KONGO Culture et EDIK Entretainment ; avons pris l’initiative d’initier le programme
                Pambazuko.
              </ProgramsDescription>
            </DescriptionCntainer>
          </ProgramsCard>
          <ProgramsCard>
            <ProgramsTitle>Entrepreneurship Program</ProgramsTitle>
            <ProgramsImgCntainer>
                <ProgramsImg src={Interprenship} alt={Interprenship} />
            </ProgramsImgCntainer>
            <DescriptionCntainer>
                <ProgramsDescription>
                This Entrepreneurship Program is the empowerment of youth. It offers spaces for the exhibition 
                and sale of artistic works. It is a program that will offer training in entrepreneurship, 
                leadership and personal development with the aim of empowering young people. <br/>
                Its mission is to make entrepreneurship a means of building peace in Eastern Congo where young 
                people are often manipulated, recruited into armed groups and actors of certain vices in society.<br/> 
                The target is to create sources of income for 200 young people within three years. 
                And provide the right information to 2,000 young people on issues of peace and entrepreneurship through
                conferences, focus groups and other youth mobilization activities over the next three years.<br/><br/>
                Beyond the deficit in the promotion of the cultural and linguistic heritage of Afro-descendants 
                and Africans on the continent, the youth empowerment is today more important so that 
                it does not become a time bomb. Already, more than 60% of the African population is made up of 
                the youth; which requires us to provide efforts so that this youth generation will be the present 
                and the bright future of their respective communities.
                </ProgramsDescription>
            </DescriptionCntainer>
          </ProgramsCard>
      </ProgramsTrail>
    </ProgramsContent>
  );
};

export default Programs;
