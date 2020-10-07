import React from 'react';

const Pagination = (props) => {

        return (
            <div className="py-3">
                <button onClick= {props.prevPage} type="btn btn-info mr-1">&larr; Anterior</button>
                <button onClick= {props.nextPage}　type="btn btn-info">Siguiente &rarr;</button>
            </div>
        )

}


export default Pagination;