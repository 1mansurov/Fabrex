import './App.css';
import logo from './images/logo.svg'
import ava from './images/ava.svg'
import strelka from './images/strelka.svg'
import box from './images/box.svg'
import zvanok from './images/zvanok.svg'
import hero from './images/Hero.png'
import watch from './images/watch.png'
import naushnik from './images/naushnik.png'
import tel from './images/tel.png'
import olo from './images/olo.png'
import oq from './images/oq.png'
import kamp from './images/kamp.png'
import klaviatura from './images/klaviatura.png'
import achki from './images/achki.png'
import baz from './images/baz.png'
import moshin from './images/moshin.png'
import tuya from './images/tuya.png'
import su from './images/su.png'
import input from './images/input.png'
import fut from './images/fut.svg'
import inst from './images/inst.png'

function App() {
  return (
    <div className="nav">
      <div className="nav__content">
        <a href=""><img src={logo} alt="" /></a>
        <div className="nav__src">
          <a href=""><img src={ava} alt="" /></a>
          <small>Bruce Lee</small>
          <a href=""><img src={strelka} alt="" /></a>
          <img src={box} alt="" />
          <img src={zvanok} alt="" />

        </div>
      </div>
      <div className="hero">
        <img src={hero} alt="" />
      </div>
      <div className="articles">
        <h3>Featured articles</h3>
        <div className="articles__box">
          <div className="box__card">
            <img src={watch} alt="" />
            <h3>10 beaches you must visit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed dolores nostrum alias quia praesentium, iure rerum. Natus, labore nihil.</p>
          </div>
          <div className="box__card">
            <img src={naushnik} alt="" />
            <h3>10 beaches you must visit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed dolores nostrum alias quia praesentium, iure rerum. Natus, labore nihil.</p>
          </div>
          <div className="box__card">
            <img src={tel} alt="" />
            <h3>10 beaches you must visit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed dolores nostrum alias quia praesentium, iure rerum. Natus, labore nihil.</p>
          </div>
        </div>
        <div className="articles__box">
          <div className="box__card">
            <img src={olo} alt="" />
            <h3>10 beaches you must visit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed dolores nostrum alias quia praesentium, iure rerum. Natus, labore nihil.</p>
          </div>
          <div className="box__card">
            <img src={oq} alt="" />
            <h3>10 beaches you must visit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed dolores nostrum alias quia praesentium, iure rerum. Natus, labore nihil.</p>
          </div>
          <div className="box__card">
            <img src={kamp} alt="" />
            <h3>10 beaches you must visit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed dolores nostrum alias quia praesentium, iure rerum. Natus, labore nihil.</p>
          </div>
        </div>
      </div>
      <div className="section">
        <img src={klaviatura} alt="" />
      </div>
      <div className="section5">
        <h3>Featured articles</h3>
        <div className='wrapper'>
          <div className="wr__card">
            <img src={achki} alt="" />
            <div className='card__content'>
              <h3>Pathway to the Mediterranean</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur, dolorem adipisci magni culpa sapiente aspernatur alias! Ea facere aspernatur labore eligendi laboriosam iste, ut rem qui ipsum est quia?</p>
            </div>
          </div>
          <div className="wr__card">
            <img src={baz} alt="" />
            <div className='card__content'>
              <h3>Pathway to the Mediterranean</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur, dolorem adipisci magni culpa sapiente aspernatur alias! Ea facere aspernatur labore eligendi laboriosam iste, ut rem qui ipsum est quia?</p>
            </div>
          </div>
          <div className="wr__card">
            <img src={moshin} alt="" />
            <div className='card__content'>
              <h3>Pathway to the Mediterranean</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur, dolorem adipisci magni culpa sapiente aspernatur alias! Ea facere aspernatur labore eligendi laboriosam iste, ut rem qui ipsum est quia?</p>
            </div>
          </div>
          <div className="wr__card">
            <img src={tuya} alt="" />
            <div className='card__content'>
              <h3>Pathway to the Mediterranean</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur, dolorem adipisci magni culpa sapiente aspernatur alias! Ea facere aspernatur labore eligendi laboriosam iste, ut rem qui ipsum est quia?</p>
            </div>
          </div>
          <div className="wr__card">
            <img src={su} alt="" />
            <div className='card__content'>
              <h3>Pathway to the Mediterranean</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur, dolorem adipisci magni culpa sapiente aspernatur alias! Ea facere aspernatur labore eligendi laboriosam iste, ut rem qui ipsum est quia?</p>
            </div>
          </div>
          <button className='knop'>Load more</button>

        </div>

      </div>
      <div className="search">
        <h3><strong>Incredible deals, right to your inbox!</strong></h3>
        <div className='searc'>
          <input type="text" name="" id="" placeholder='Placeholder' />
          <button><img src={strelka} alt="" /></button>

        </div>
        <p>By joining you agree to our Terms and Conditions</p>
      </div>
      <div className="futer">
        <div className="futer__content">
          <div className='futer__text'>
            <strong>First Column</strong>
            <p><a href="">Link One</a></p>
            <p><a href="">Link Two</a></p>
            <p><a href="">Link Three</a></p>
            <p></p>
          </div>
          <div className='futer__text'>
            <strong>Second Column</strong>
            <p><a href="">Link One</a></p>
            <p><a href="">Link Two</a></p>
            <p><a href="">Link Three</a></p>
            <p></p>
          </div>
          <div className='futer__text'>
            <strong>Third Column</strong>
            <p><a href="">Link One</a></p>
            <p><a href="">Link Two</a></p>
            <p><a href="">Link Three</a></p>
            <p></p>
          </div>
          <div className='futer__text'>
            <strong>Fourth Column</strong>
            <p><a href="">Link One</a></p>
            <p><a href="">Link Two</a></p>
            <p><a href="">Link Three</a></p>
            <p></p>
          </div>
          <img className='input' src={input} alt="" />
        </div>
        <div className="futer__logo">
          <img src={fut} alt="" />
          <span>© 2019 Fabrx </span>
          <img src={inst} alt="" />
        </div>
      </div>
    </div>

  );


}



export default App;
