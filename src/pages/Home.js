import React from "react";
// import { Container } from 'react-bootstrap'

const Home = () => {
  const urlResult = [
    {
      longUrl:
        "https://docs.google.com/document/d/1nD7fzgzw5UmFSpnHK2FWVadnp4y7EaND26…",
      shortUrl: "15d1kH",
      clickCount: 1,
      id:1
    },
    {
      longUrl:
        "https://docs.google.com/document/d/1nD7fzgzw5UmFSpnHK2FWVadnp4y7EaND26…",
      shortUrl: "15d1kH",
      clickCount: 1,
      id:2
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1>URL Shortener</h1>
        </div>
      </div>
      <form action="/create" method="POST">
        <div className="row">
          <div className="input-group mb-3">
            <input
              type="text"
              name="longurl"
              className="form-control"
              placeholder="Paste your long URL"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <input
                type="submit"
                className="btn btn-outline-secondary"
                value="Submit"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="row">
        {urlResult.map((i) => {
          return (
            <div className="col-lg-3" key={i.id}>
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "18rem"}}
              >
                <div className="card-header">Total Click: ${i.clickCount}</div>
                <div className="card-body text-secondary">
                  <h6 className="card-title">
                    <a
                      href="https://pithy.site/${i.shortUrl}"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://pithy.site/${i.shortUrl}
                    </a>
                  </h6>
                  <p className="card-text">${i.longUrl}</p>
                  <a href="/delete/${i.id}" className="btn btn-sm btn-danger">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="row">
             {for(let i=0;i< urlResult.length;i++) { %>
            <div className="col-lg-3">
                <div className="card border-secondary mb-3" style="max-width: 18rem;">
                    <div className="card-header">Total Click : <%= urlResult[i].clickCount %></div>
                    <div className="card-body text-secondary">
                        <h6 className="card-title">
                            <a href="http://localhost:3000/<%= urlResult[i].shortUrl %>" target="_blank">http://localhost:3000/<%= urlResult[i].shortUrl %></a>
                        </h6>
                        <p className="card-text"><%= urlResult[i].longUrl %></p>
                        <a href="/delete/<%= urlResult[i].id %>" className="btn btn-sm btn-danger">Remove</a>
                    </div>
                </div>
            </div>
            <% } }
        </div> */}
    </div>
  );
};

export default Home;
