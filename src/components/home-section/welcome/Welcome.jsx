import './welcome.scss'

import HomeSection from '../HomeSection'
import {
  bg1
} from '../../../assets/images'

const Welcome = props => {
  return (
    <HomeSection
      className={`welcome ${props.isActive ? 'active' : ''}`}
      contentClassName="overlay welcome__content"
      bgImage={bg1}
    >
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="title">
            <span>Welcome To</span>
            <h2 className='main-color'>Summoner's Rift</h2>
          </div>
          <div className="description m-t-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero ullam est iure perferendis eos blanditiis tenetur nobis voluptate similique soluta distinctio? Obcaecati velit ullam recusandae laboriosam similique ut eveniet.
          </div>
          <div className='btns m-t-4'>
            <button>Play Now</button>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="welcome__img relative"></div>
    </HomeSection>
  )
}

export default Welcome

















