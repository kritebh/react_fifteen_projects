
import data from './data';
import SingleQuestion from './Question';

function App() {

  return (
    <main>

      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className='info'>
        {
          data.map(d => {
            return <SingleQuestion {...d} key={d.id}/>                    
          })
        }
        </section>

      </div>
    </main>
  );
}

export default App;
