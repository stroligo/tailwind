import Button from '../ui/Button';

function Nav() {
  return (
    <nav className="bg-blue-dark text-white flex  justify-between py-4 px-12  min-h-[76px]">
      <div className="flex items-center">Cidadania Digital</div>

      <div className=" gap-10 items-center hidden md:flex">
        <ul className="flex gap-10 flex-row uppercase font-semibold font-geo">
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
        </ul>
        <div>
          <Button />
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="flex md:hidden w-10 h-10 rounded-xl bg-white  items-center justify-center text-purple">
        X
      </div>
    </nav>
  );
}

export default Nav;
