import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import AboutPro from './AboutPro'

const About = () => {
  //   const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");

  const handelSearchName = (e) => {
    setSearchName(decodeURIComponent(e.target.value));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://restcountries.com/v3.1/name/${searchName}`)
      .then((res) => {
        setitem(res.data);
        setSearchName("");
      })
      .catch((error) => console.log(error));
  };

  //   const navigateToDetails = () => {
  //     navigate("/carddetails");
  //   };

  const [item, setitem] = useState([]);
  // const [q, setQ] = useState("");
  // const [searchParam] = useState(["capital", "name", "numericCode"]);
  // const [filterParam, setFilterParam] = useState(["Greece"]);
  // console.log('tems===>', item);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setitem(res.data))
      .catch((error) => console.log(error));
  }, []);

  // function search(items) {
  //     return items.filter((item) => {
  //         if (item.name == filterParam) {
  //             return searchParam.some((newItem) => {
  //                 return (
  //                     item[newItem]
  //                 );
  //             });
  //         } else if (filterParam == "All") {
  //             return searchParam.some((newItem) => {
  //                 return (
  //                     item[newItem]
  //                 );
  //             });
  //         }
  //     });
  // }
  // const [data, setData] = useState({ data: [] });
  // const [isLoading, setIsLoading] = useState(false);
  // const [err, setErr] = useState('')

  // const handleClick = async () => {
  //     setIsLoading(true);
  //     try {
  //         const { data } = await axios.get('https://reqres.in-', {
  //             header: {
  //                 Accept: 'application/json'

  //             }
  //         });

  //         console.log('data is:', JSON.stringify(data, null, 4))
  //         setData(data);
  //     }
  //     catch (err) {
  //         setErr(err.message);

  //     } finally {
  //         setIsLoading(false);
  //     }
  // };

  // // useEffect(() =>{
  // //     getUsers();

  // // }, []);

  return (
    <div>
      <div className="About">
        <svg>
          <defs>
            <symbol viewBox="0 0 1440 120" id="wave">
              <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
            </symbol>
          </defs>
        </svg>

        <section className="hero hero--pricing gradient inverse">
          <div className="container">
            <header>
              <h1>Search Country</h1>
            </header>
            <section className="card">
              <header>
                <form id="form" className="form">
                  <button type="submit" className="search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search for any country..."
                    autocomplete="off"
                    autofocus
                    onChange={handelSearchName}
                  />
                  <span className="sr-only">Search countries here</span>
                  <button
                    type="submit"
                    className="search-btn"
                    onClick={handleSearch}
                  >
                    Go
                  </button>
                </form>
              </header>
            </section>
          </div>
        </section>

        <div className="wave">
          <svg viewBox="0 0 1440 120">
            <use href="#wave"></use>
          </svg>
        </div>
      </div>
      {/* <AboutPro img='' Name='A' language=''
                    />
                    <AboutPro img='' Name='B' language=''/>
                    <AboutPro img='' Name='C' language=''/>
                    <AboutPro img='' Name='D' language=''/>
                    <AboutPro img='' Name='E' language=''/>
                    <AboutPro img='' Name='F' language=''/> */}

      <div className="imagecontent">
        <div className="container">
          <div className="grid">
            {item?.map((item, index) => {
              return (
                <div className="grid1">
                  <Link to={"/carddetail" + "/" + item.name.common}>
                    <article key={index}>
                      <img src={item.flags.png} alt="" />
                      <div className="text">
                        <h3>{item.name.common}</h3>
                        {/* <p>{item.languages}</p> */}
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
