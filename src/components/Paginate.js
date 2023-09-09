import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';


function Paginate({ pages, page, keyword = '',}) {
    const navigate = useNavigate()

    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }

    let page_array = []
    let page_start = Math.floor(page/10) * 10
    let page_end = page_start + 10

    for(page_start; page_start<page_end && page_start<=pages; page_start++){
        page_array.push(page_start)
       }
    
      


    return (pages > 1 && (
        <Pagination>
            {page_array.map((x) => (
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