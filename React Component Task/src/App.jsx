import './App.css'
import NavComp from './Components/NavComp'
import HeadComp from './Components/HeadComp'
import IconicComp1 from './Components/IconicComp'
import { IconicComp2, IconicComp3 } from './Components/IconicComp'
import Content1, { Content2, Content3, Content4 } from './Components/Content'
import ReviewComp1, { ReviewComp2, ReviewComp3, Title } from './Components/ReviewComp'
import BotComp from './Components/BotComp'
import FootComp from './Components/FootComp'





function App() {

  return (
    <>
      <div id='main'>

        <NavComp />

        <div id='headcomp'>
          <HeadComp />
        </div>


        <div id="new"><IconicComp1 />
          <IconicComp2 />
          <IconicComp3 /> </div>


        <div id="content"> <Content1 />
          <Content2 />
          <Content4 />
          <Content3 />
        </div>

        <div id='title'><Title /></div>
        <div id='review'>

          <ReviewComp1 />
          <ReviewComp2 />
          <ReviewComp3 />
        </div>

        <div id="botcomp">
          <BotComp/>
        </div>
      </div>
      <div id="foot">
        <FootComp/>
       
      </div>


    </>
  )
}

export default App
