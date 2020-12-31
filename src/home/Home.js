import {List} from '../components/List'

function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-1">Ugly HN Reader</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <List />
      </main>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-center"><small>Really Ugly @2020</small></p>
            </div>
          </div>
        </div>  
      </footer>
    </>
  );
}

export default Home;
