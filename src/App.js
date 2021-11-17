import FoodCard from "./FoodCard";
import {useState} from 'react';
import EditScreen from "./EditScreen";

const totalFoodList= [
{
  id:0,
  title: "chicken 65",
  price:160,
  status:true,
  flavor:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!",
  imageUrl:"https://i2.wp.com/rodebz.com/wp-content/uploads/chicken-65-recipe-1.jpg?fit=700%2C625&ssl=1",
  quantity:"12pc",
  deliveryTime:"30min",
},

{
  id:1,
  title: "chicken curry",
  price:70,
  status:true,
  flavor:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!",
  imageUrl:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/chicken-curry-recipe.jpg",
  deliveryTime:"30min",
},

{
  id:2,
  title: "chicken kabab",
  price:120,
  status:true,
  flavor:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!",
  imageUrl:"https://www.thespruceeats.com/thmb/CbsD3vAtQv0l2Pm6IhUlQ5k33U0=/3000x2000/filters:fill(auto,1)/murg-malai-kabab-1957372-Hero_01-bb66c49fd80e4b95b26a6fdd68bd7a7d.jpg",
  quantity:"10pc",
  deliveryTime:"30min",
},
{
  id:3,
  title: "chicken shawarma",
  price:110,
  status:false,
  flavor:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!",
  imageUrl:"https://www.recipefy.com/media/W1siZiIsIjIwMTgvMDcvMjkvMjFfMjlfMzRfNDQzX1Nsb3dfQ29va2VyX0NoaWNrZW5fU2hhd2FybWFfV2l0aF9Ub21hdG9fQ3VjdW1iZXJfUmVsaXNoXzFfV0VCXzEwMjR4NjgzLmpwZyJdLFsicCIsImF1dG9fb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMDAweDIwMDA%2BIl0sWyJlIiwianBnIl1d/Slow-Cooker-Chicken-Shawarma-With-Tomato-Cucumber-Relish-1_WEB-1024x683.jpg",
  quantity:"12pc",
  deliveryTime:"30min",
},
]
const App= ()=>{
  const [foodList,setFoodList]=useState(totalFoodList)
 //const [sortInput,setSortInput]=useState();
 const [editScreenVisibility,setEditScreenVisibility]=useState(false);
 const [editFoodIndex,setEditFoodIndex]=useState(null);
  const sort=(order)=>{
     switch(order){
       case"High to Low":
       setFoodList(prev=>{
        let newList=[...prev];
        return newList.sort((second,first)=>first.price-second.price)
       }
       );
       break;
      case"Low To High":
      setFoodList(prev=>{
        let newList=[...prev];
        return newList.sort((second,first)=>second.price-first.price)
       }
       );
       break;
       default:
       break;
     }
  }
  return(
    <>
    <div className="sort-section">
      <h1 className="heading">😍.......CREAM OF THE CROP.......😍</h1>
      <div>
        <select  
        //value={sortInput}
        onChange={(e)=>{
        //setSortInput(e.target.value);
        sort(e.target.value);
        
        }}
        >
           
              <option value="">Select</option>
              <option value="High to Low">High to Low</option>
              <option value="Low To High">Low To High</option>
        </select>
      </div>
    </div>
    <div className="food-card-list">
      {foodList.map((food,i)=>{
        return(<FoodCard
          {...food}
          key={food.id}
          closeCard={()=>{
          setFoodList(foodList.filter((_val,index)=>i!=index))
        }}
        toggleStatus={()=>{
          setFoodList(prev=>{
            let newList=[...prev];
            let newFood={...newList[i]};
            newFood.status=!newFood.status;
            newList[i]=newFood;
            return newList;
          })
        }}
        editFood={()=>{
          setEditFoodIndex(i)
          setEditScreenVisibility(true)

        }}

        />)
     })}
     </div>
     {editScreenVisibility && <EditScreen setEditScreenVisibility={setEditScreenVisibility} 
     editFoodIndex={editFoodIndex}
     foodList={foodList}
     />}
     </>
  );
  
  }

  export default App;