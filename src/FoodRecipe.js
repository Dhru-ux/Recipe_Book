import React from 'react'

function FoodRecipe(props) {
  const { recipe } = props
  return (
    <div className="card-columns py-2">
      {
        recipe.map(rec => (
          
            <div div className="card py-2 text-center" >
              <h6 className="mx-4 btn text-center btn-light">{rec.recipe.cuisineType}</h6>
              < img src={rec.recipe.image} alt="" className="img-fluid w-50 mx-auto rounded-circle" />
              <div className="card-body btn">
                <h5>{rec.recipe.label}</h5>
              </div>

              <ul className="list-group list-group-flush">
                {
                  rec.recipe.ingredientLines.map(ingredient => (
                    <li className='list-group-item'>{ingredient}</li>
                  ))
                }
              </ul>
            </div>
          

        ))
      }
    </div>
  )
}

export default FoodRecipe