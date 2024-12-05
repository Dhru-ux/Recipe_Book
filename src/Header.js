import React from 'react'

function Header(props) {
    return (
        <div className='jumbotron'>
            <h1 className='display-1'><span class="brand-icon material-symbols-outlined">
                fastfood
            </span>Food Recipe</h1>

            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Search Your Recipe..." value={props.search} 
                    onChange={props.InputChange}
                />
                <div className="input-group-append">
                    <button className='btn btn-dark' onClick={ props.funClick} >Search Recipe</button>
                </div>
            </div>
        </div>
    )
}

export default Header