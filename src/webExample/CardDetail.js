import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardDetail = () => {
  const slug = useParams();
  const decodedSlug = decodeURIComponent(slug.name);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  console.log("items", items);

  useEffect(() => {
    getdata();
  });

  const getdata = () => {
    fetch(`https://restcountries.com/v3.1/name/${decodedSlug}`)
      .then((res) => res.json())
      .then(
        (res) => {
          setItems(res[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    // console.log(filteredData[0])
  };

  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="viewDetails">
          <div className="container">
            <div className="details">
              <div className="row">
                <div className="col-md-5">
                  <img src={items.flags?.png} alt="" />
                </div>
                <div className="col-md-7">
                  <h1>Name : {items.name?.common}</h1>
                  <div className="row">
                    <div className="col-md-6">
                      <h3>
                        <strong>Capital :</strong> {items.capital}
                      </h3>

                      <h3>
                        <strong>tld :</strong> {items.tld}
                      </h3>
                      <h3>
                        <strong>Population :</strong> {items.population}
                      </h3>
                    </div>
                    <div className="col-md-6">
                      <h3>
                        <strong>Continents :</strong> {items.continents}
                      </h3>
                      <h3>
                        <strong>Timezones : </strong>
                        {items.timezones}
                      </h3>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    href={items.maps?.googleMaps}
                    rel="noreferrer"
                  >
                    <button type="submit" className="submit-btn-btn">
                      View Map
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default CardDetail;
