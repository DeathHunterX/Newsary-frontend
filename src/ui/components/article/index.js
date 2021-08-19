import styled from "styled-components";
import { TextHighlightable } from "../text-highlight";


export const ArticleWrapper = styled.article`

`;

const BannerWrapper = styled.div`
    position: relative;
    height: 80vh;
`;

const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const BannerVeil = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
`;

const BannerText = styled.div`
    position: absolute;
    left: 50%;
    bottom: 10%;
    width: 80%;
    transform: translateX(-50%);
    color: white;

    & h1 {
        font-size: 2.5rem;
        font-weight: 300;
    }

    & h2 {
        font-size: 2rem;
        color ${props => props.theme.primaryColor}
    }
`;

const Main = styled.main`
    white-space: pre-wrap;
    width: 60%;
    margin: 1.5rem auto;
    font-size: 1.2rem;
`;

const Date = styled.p`
    font-style: italic;
    margin: 1rem 0;
`;

const LargeBanner = ({ image, title, authors }) => {
    return (
        <BannerWrapper>
            <BannerImage src={image} alt="Article big image"/>
            <BannerVeil/>
            <BannerText>
                <h1>{ title }</h1>
                <h2>By { authors }</h2>
            </BannerText>
        </BannerWrapper>
    )
}   

const ArticleMain = ({ text, date, onHighlight }) => {
    return (
        <Main>
            <Date>On {date}</Date>
            <TextHighlightable 
                content={text}
                onHighlight={onHighlight}/>
        </Main>
    )
}

export const ArticleDisplay = ({ article, onHighlight }) => {
    //Destruct
    const { image, title, authors, text, date } = article;

    return (
        <ArticleWrapper>
            <LargeBanner 
                image={image}
                title={title}
                authors={authors}/>

            <ArticleMain 
                text={text}
                date={date}
                onHighlight={onHighlight}/>
        </ArticleWrapper>
    )
};