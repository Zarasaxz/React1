import React from 'react';

const Form = () => {
    return (
        <>
            <form className="d-flex" role="search">
                <input className="form-control me-2 text-center" type="search" placeholder="Buscar" aria-label="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </>
    );
}

export default Form;