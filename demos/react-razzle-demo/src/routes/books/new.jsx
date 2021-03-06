import React, { useEffect, useState } from 'react';
import BookForm from 'components/book/book-form';
import { BtnLink } from 'components/basics/links';
import { MktRoute } from 'components/basics/routes';
import { Container, Row, Col } from 'components/basics/grids';
import { SectionBlock, SectionHeader, SectionBody, SectionFooter } from 'components/basics/sections';
import { timeout } from 'utils/helpers';

const BooksNewRoute = (props) => {
	const { store = {}, toast, history } = props;
	const [ book, setBook ] = useState({});
	const [ loading, setLoading ] = useState(false);


	// Hooks
	useEffect(() => {
		createBook();
		return () => {
			store.removeRecord('book', book);
		};
	}, [])


	// Methods
  const createBook = () => {
  	let book = store.createRecord('book');
  	setBook(book);
  }


	return (
		<MktRoute title='Library - New Book'>
			<Container className='pt-3 pb-3'>

				<SectionBlock>
					<BookForm
						title='New Book'
						book={book}
						nextAction={() => history.push(`/books/${book.id}`)}
					/>
				</SectionBlock>

			</Container>
		</MktRoute>
	);
}

export default BooksNewRoute;
