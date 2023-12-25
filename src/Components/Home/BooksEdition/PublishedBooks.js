import React from 'react'
import Book1 from '../../../images/Nostalgie.jpg'
import Book2 from '../../../images/destin.jpg'
import Book3 from '../../../images/cicatrices.jpg'
import {
    BooksContent,
    BooksTrail,
    BooksWrapper,
    BookCard,BookImg,
    BookDescription,BookBtn} from "./Styles";

const PublishedBooks = () => {
    return (
<BooksContent>
      <h1>Livres Publier</h1>
      <BooksTrail>
        <BooksWrapper>
            <BookCard>
                <BookImg src={Book1} alt={Book1} />
                <BookDescription>
                We labour the land whith natural means,no chemical product in our
                vegetable
                </BookDescription>
                <BookBtn>Acheter</BookBtn>
            </BookCard>
            <BookCard>
                <BookImg src={Book2} alt={Book2} />
                <BookDescription>
                We labour the land whith natural means,no chemical product in our
                vegetable
                </BookDescription>
                <BookBtn>Acheter</BookBtn>
            </BookCard>
            <BookCard>
                <BookImg src={Book3} alt={Book3} />
                <BookDescription>
                We labour the land whith natural means,no chemical product in our
                vegetable
                </BookDescription>
                <BookBtn>Acheter</BookBtn>
            </BookCard>
        </BooksWrapper>
    </BooksTrail>
</BooksContent>
    )
}

export default PublishedBooks
