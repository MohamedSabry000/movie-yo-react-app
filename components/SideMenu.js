import React, { Component } from 'react';
import Link from "next/link";

const SideMenu = (props) => {

    const {changeCategory, activeCategory, filterMovies} = props;
    const categories = props.genres;
    console.log(categories);
    
        return (
            <>
                <h1 className="my-4">Movie yo</h1>
                <div className="list-group" style={{marginBottom: "10px"}}>
                    <button type="button" className="btn btn-primary list-group-item list-group-item-action" data-toggle="collapse" data-target="#collapseExample" aria-pressed="false" autoComplete="off">
                        Toggle Categories
                    </button>
                </div>

                <ul className="list-group collapse" id="collapseExample">
                    <button 
                        type="button" 
                        className={`list-group-item list-group-item-action ${activeCategory===''? 'active': ''}`}
                        onClick={() => changeCategory('', null)}    
                    >
                        All Categories
                    </button>
                    {
                        categories.map(cat => 
                            filterMovies(undefined, cat.id).length!==0?
                            <li 
                                key={cat.id} 
                                className={`list-group-item d-flex justify-content-between align-items-center
                                    ${activeCategory===cat.name? 'active': ''}
                                `}
                                onClick={() => changeCategory(cat.name, cat.id)}
                            >
                                    {cat.name}
                                
                                <span className="badge badge-primary badge-pill">{filterMovies(undefined, cat.id).length}</span>
                            </li>
                            :null
                            
                        )
                    }
                </ul>
            </>
        )
}



export default SideMenu;