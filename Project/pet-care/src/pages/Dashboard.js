import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PetDetails from './PetDetails';
import Services from './Services';
import ServiceProviders from './ServiceProviders';
import BillingCard from './Billing';
import ProfileCard from './Profile';
import Footer from '../components/Footer'
import Footer from '../components/Nav'
import Footer from '../components/Hamburger'

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header>
        <h1>Pet Care System</h1>
      </header>
      <div className="menu-container">
        <Hamburger isOpen={isOpen} onClick={handleClick} />
        {isOpen ? <Nav /> : null}
      </div>
      <div>
        <main role="main" className={isOpen ? 'content content--open' : 'content'}>
          <Switch>
            <Route path="/pet-details" component={PetDetails} />
            <Route path="/services" component={Services} />
            <Route path="/service-providers" component={ServiceProviders} />
            <Route path="/billing" component={BillingCard} />
            <Route path="/profile" component={ProfileCard} />
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}
