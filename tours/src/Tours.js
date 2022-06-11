import Tour from './Tour';
const Tours = (props) => {
  return (
      <section>
          <div className='title'>
              <h2>Ours Tours</h2>
              <div className='underline'></div>
          </div>
          {props.tours.map(tour=>{
              return <Tour key={tour.id} tour={tour} removeTour={props.removeTour}/>
          })}
      </section>
  )
};

export default Tours;