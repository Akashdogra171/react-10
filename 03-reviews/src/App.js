import React from 'react';
import Review from './Review';



///Icons go for react icons
function App() {
  return (
    <main>
      <section className='constainer'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review/>
      </section>

    </main>
  )
}

export default App;
