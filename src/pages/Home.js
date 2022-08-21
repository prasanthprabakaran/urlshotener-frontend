import React from 'react'
// import { Container } from 'react-bootstrap'


const Home = () => {
  return (
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h1>URL Shortener</h1>
            </div>
        </div>
        <form action="/create" method="POST">
            <div class="row">
                <div class="input-group mb-3">
                    <input type="text" name="longurl" class="form-control" placeholder="Paste your long URL"
                        aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <div class="input-group-append">
                        <input type="submit" class="btn btn-outline-secondary" value="Submit"/>
                    </div>
                </div>
            </div>
        </form>

        
    </div>
  )
}

export default Home