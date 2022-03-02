import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from '../helpers/GetGifs';



export const GifGrid = ({category}) => {

  if(category.length < 1 || category === undefined || category === null){
    category = 'One punch';
  }

  const {data,loading} = useFetchGifs(category);

  console.log(data);
  console.log(loading);

  

  // const[images, setImage] = useState([]);

  // useEffect( ()=> {
  //             getGifs( category)
  //             .then(setImage);
  // },[category])


  
  return (
    <>
    <h3>{category} </h3>
    <h3>{ loading ? 'Cargando'  : null }</h3>
    <div className='card-grid'>
        
        <ol>         
            {
            data.map( (datos) => (           
                
               <GifGridItem key = {datos.id} title={datos.title} url={datos.url} />             
            ))
            }
    
        </ol>
    </div>
    </>
  )
}
