import './App.css'

function App() {

  return (

    <>
      <main>
        <div className="social-media-links-container">
          <div className="social-media-links-card">

            <div className="profile-picture-description">

              <img src="/public/avatar-jessica.jpeg" alt="Profile Picture" />
              <h1>Jessica Randall</h1>
              <span>London, United Kingdom</span>
              <p>Front-end developer and avid reader.</p>

            </div>

            <div className="button-group-links">

              <button type='submit'><a href="#">GitHub</a></button>
              <button type='submit'><a href="#">Frontend Mentor</a></button>
              <button type='submit'><a href="#">LinkedIn</a></button>
              <button type='submit'><a href="#">Twitter</a></button>
              <button type='submit'><a href="#">Instagram</a></button>
            
            </div>

          </div>
        </div>
      </main>    
    </>
  )
}

export default App
