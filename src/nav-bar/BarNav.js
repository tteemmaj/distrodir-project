import './styles.css'
import 'https://kit.fontawesome.com/d70b714f10.js'

function navBar() {
  function btnIcon () {
    const extended = document.querySelector("div.listNav");
    extended.classList.toggle("extended");
  }

  return (
    <div className='mainDiv'>
      <div className='logoName'><h1>DISTRODIR</h1></div>
      <div className='listNav'>
        <ul>
          <li><a href='#' className='navLinks'>Distros</a></li>
          <li><a href='#' className='navLinks'>Programas</a></li>
          <li><a href='#' id='btnBlog'>Blog</a></li>
        </ul>
      </div>
      <i className="fa-solid fa-bars" onClick={btnIcon}></i>
    </div>
    
  );
}

export default navBar;