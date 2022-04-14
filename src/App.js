import './style.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className='card-header'>
          <img src="https://www.svgrepo.com/show/27447/document.svg" alt="" className='card-image' />
          <img src="https://www.svgrepo.com/show/335432/more.svg" alt="" className='card-plus' />
        </div>
      </header>
      <main>
        <div class="container">
          <p>Available</p>

          <h1>Package of useful documents</h1>
        </div>
      </main>
      <footer>
        <p>Download our package to organise your documents.</p>

      </footer>
    </div>
  );
}

export default App;
