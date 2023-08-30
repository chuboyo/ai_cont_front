import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';


function Paginate({ pages, page, keyword = '',}) {
    const navigate = useNavigate()

    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }


    return (pages > 1 && (
        <Pagination>
            {[...Array(pages).keys()].map((x) => (
                // <LinkContainer
                //     key={x + 1}
                //     to={`/?keyword=${keyword}&page=${x + 1}`}
                // >
                    <Pagination.Item key={x+1} active={x + 1 === page} onClick={()=> navigate(`/?keyword=${keyword}&page=${x + 1}`)} style={{'color': '#667085', 'backgroundColor': '#FFFFFF' }}>{x + 1}</Pagination.Item>
                // </LinkContainer>
            ))}
        </Pagination>
    )
    )
}

export default Paginate