import React from "react";
import "./home.css"
import MainImage from "../images/wedding-main.jpg";



// 1. General Messages from the groom and bride
// 2. Location and Time 
// 3. Photo Gallery
// 4. 

function home() {
    return (
        <div className='page-home'>
            <section className='section-intro'>
                <img src={MainImage} width={800} />
                <div id='greeting'>
                    <h1>John Davison & Harley Rose</h1>
                    <h2>We are getting married!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </div>
            </section>
            <section className='section-locationtime'>
                <p id='event-location'>Centennial Hall at Sydney Town Hall</p>
                <p id='event-time'>11:00am, 26 October 2023</p>
                {/* embed google map API  */}
            </section>
        </div>
    )
}

export default home;