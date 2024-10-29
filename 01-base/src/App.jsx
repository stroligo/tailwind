/* import Button from './components/ui/Button'; */

import Nav from './components/layout/Nav';
import Button from './components/ui/Button';
/* import Label from './components/ui/Label'; */

function App() {
  return (
    <>
      <Nav />
      <main>
        <section>
          <div className="container mx-auto px-5 py-10 md:px-0 bg-gray">
            <div className="flex md:hidden bg-white p-6  w-fit">=</div>
            <div className="flex flex-col md:flex-row">
              <div className=" bg-blue md:w-1/2 ">Conteúdo 1</div>
              <div className=" bg-orange md:w-1/2 ">Conteúdo 2</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
