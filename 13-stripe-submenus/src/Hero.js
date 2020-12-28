import React from 'react';
import phoneImg from './images/phone.svg';

import { useGloablContext } from './context';

const Hero = () => {
    const { closeSubmenu } = useGloablContext();

    return (
        <section className="hero" onMouseOver={closeSubmenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Payment infrastructure for the internet</h1>
                    <p>
                        Millions of companies of all sizes from startups to
                        Fortune 500s use Stripe's Software and APIs to accept
                        payments, send payouts, and manage their businesses
                        online.
                    </p>
                    <button className="btn">Start now</button>
                </article>
                <article className="hero-images">
                    <img src={phoneImg} className="phone-img" alt="" />
                </article>
            </div>
        </section>
    );
};

export default Hero;
