import {h, app} from 'hyperapp'

export default function Topimg({state, actions}) {
  return (
    <section id="Topimg">
    <div class="container">
    <div class="title">
      <h5>
      Welcome
      </h5>
      <h1>
      Prime Steak
      </h1>
    </div>
    <div class="contact-info">
      <div class="booking">Book table directly</div>
      <h2>(718) -219 - 8652</h2>
      <div class="hours">
      Opening hours <strong>Mon - Fri: </strong>  9am - 9pm
      <strong> Weekend:</strong> 9am - 11pm
      </div>
    </div>
    </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
