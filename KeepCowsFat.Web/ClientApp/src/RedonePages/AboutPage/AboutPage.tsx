import { FunctionComponent } from 'react';

import "./aboutPage.scss";

export const AboutPage: FunctionComponent = () => {
    return (
        <div className="container">
            <h2>The Plan</h2>
            <hr />
            <p className="bodyText">
                Project Foodify, devised by vizier Imhotep, aims at ensuring Egypt constantly remains well nourished, irrelevant of the land's natural fertility rates. The plan also aims
                at propelling Egypt to a position of world power, not despite the famine, but because of it. In keeping with these goals, the entirety of the grain growing and production
                industry is placed under central government control, namely Imhotep and his men. This is to ensure that each and every kernel of grain is accounted for and used to its fullest.
                Through following closely to its guidelines, project Foodify enables us to fight this famine, guard the grain, and be hailed as heroes of the harvest, and many other alluring
                alliterations alluding to the ultimatum: we will survive the starvation, emerge triumphant from its trials, challenges, and tribulations, and Egypt will be propelled to the
                pedestal of world power. Together, everyone achieves more. (or some other deep inspirational ending.)
            </p>
            <br />
            <h2>How It Works</h2>
            <hr />
            <p className="bodyText">
                The country of Egypt was divided into five regions, each with their own Regional Supervisor. The Supervisor is in charge of keeping an accounting of every inch of farmland,
                how much it should produce, does produce, and will produce. The Supervisor also controls the percentage of grain reaching the markets, the prices in the markets, the preserving
                of grain, and the collection of the government grain tax. There is a 20% tax on all grain grown. These are still times of plenty, and plenty there shall be. But one out of
                every five bundles of grain will be dedicated to preserving the Egyptian empire as a whole. Additionally, all surplus non-perishables should be brought to the regional collection
                center, where it will be stored for the household who brought it for the hard times to come.
            </p>
            <br />
            <h2>Your Part</h2>
            <hr />
            <p className="bodyText">
                Your part in this plan is simple: grow as much as you can! Make use of every inch of fertility! There will be supervising officials coming around keeping tally of everything
                that grows and to take the 20% tax off your hands. The rest of the crop is yours to enjoy! The Department of Erroneous Advancements or Whatever strongly encourage rationing now,
                even in the good times. Because saving food now means having what to eat later… Experts recommend visiting your local collection center at least once a month, where your grain will
                be preserved for you, stored under your name, and waiting to be given back to you and you only. The local collection center is not a group share project - whatever you store, that's
                what you'll have. Those who will not have enough, will be able to buy from the government's grain storehouses. But remember - saving now means eating later!
            </p>
        </div>
    )
};
