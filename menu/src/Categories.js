

const Categories = ({filterItems,categories}) => {
  return (
      <div className='btn-container'>
          {
              categories.map((c,i)=>{
                  return <button className='filter-btn' onClick={()=>filterItems(c)} key={i}>{c}</button>
              })
          }
          
      </div>
  );
};

export default Categories;