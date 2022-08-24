import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Header } from "../common/Header"
import { Home } from "../components/home/Home"
import { Resume } from "../components/page/Resume"
import { Portfolio } from "../components/page/Portfolio"
import { Blog } from "../components/page/Blog"
import { Contact } from "../components/page/Contact"
import { SideContent } from "../components/side/SideContent"

export const Pages = () => {
  return (
    <>
      <div className='main-div'>
        <div className='side'>
          <SideContent />
        </div>
        <main>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </Router>
        </main>
      </div>
    </>
  )
}
