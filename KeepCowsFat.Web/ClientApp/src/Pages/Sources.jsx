﻿import './Sources.css';

//this is where we will have all sources, divided by which page
//like:

//Services
//The live feed grain sacks count is not accurate, because breishit ??:?? says it was impossible to count
//the total, but i liked it, so i did it

//the cities and thier locations are from wikipedia - www.???.com the names in [square brackets] are the
//more modern names for some of the ancient cities.
//Some cities you may want to note are Per Atum, also
//known as Pithom, or Pissom. Pi Ramesse, which is the biblical Ramses. Iuni, or Heliopolis, in Hebrew
//is known as On, known to us from Potiphar, the priest of On. (breishit, ??:??)

//https://amun-ra-egyptology.blogspot.com/2013/11/value-for-money-in-ancient-egypt.html
//deben reference sheet

//donate to cause - thanks to zlaty!

function Sources() {

    var title = String.raw`
             ___| |_  ___  _____ __      _  ___  _____ ___
            / __| __|/ _  |  __/ \ \ /\ / // _  |  __// __|
            \__ | |_  (_| | |     \ V  V /  (_| | |   \__ |
            |___/\__|\__,_|_|      \_/\_/  \__,_|_|   |___/
        `;

    return (
        <div style={{ margin: 150 }}>
            <pre>{title}</pre>
            <h4>Sources</h4>
            <h>Whatever I based on facts, I tried to list here. Everything else is just about as real as talking donkeys flying over the moon [figure out own reference]</h>
            <br/>
            <pre>this is text
                and here
                ahtnla skdgj            lkfdjs
                line many
                many more
            okay?</pre>

            <p>Home:</p>
            <p>There is nothing on this page that has to be sourced</p>
            <p>About:</p>
            <p>The understanding of the plan is based on Let My Nation Descend. Whatever I could confirm on my own, I did. Whatever I could not, I left their sources.</p>
        </div>
    )
};

export default Sources;