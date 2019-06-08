import {h, app} from 'hyperapp'
import Header from './Header.js'
import Topimg from './Topimg.js'
import OurStory from './OurStory.js'

export default function App({state, actions}) {
  return (
    <div class={'app'}>
    <Header state={state} actions={actions}/>
    <Topimg state={state} actions={actions}/>
    <OurStory state={state} actions={actions}/>
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
