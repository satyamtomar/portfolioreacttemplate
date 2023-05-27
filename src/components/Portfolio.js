import React, { useEffect, useState } from 'react'
import homeAction from '../actions/home.action';
import { TailSpin } from "react-loader-spinner";
import config from '../config/configg';
const BACKEND_URL=config.BACKEND_URL;
const Portfolio = () => {
    const [type,setType]=useState(1);
    const [portfolioData,setPortfolioData]=useState([]);
    const [mainLoader,setMainLoader]=useState(false);
    const [allServices,setAllServices]=useState();
    const [filter,setFilter]=useState('All');
    useEffect(() => {
      getServices();
      fetchAllPortfolioData();
    }, [filter])
    
    const getServices=async()=>{
      setMainLoader(true);
      // console.log(search, "search mai hai kya?");
      const response = await fetch(`${BACKEND_URL}/admin/getServices`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": localStorage.getItem("token"),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: JSON.stringify({
          
        // }),
      });
      const jsonnn = await response.json();
      console.log(jsonnn.data.list, "console the ServicesData");
      setAllServices(jsonnn.data.list);
      // setServicesDataDataUnAltered(jsonnn.data.list);
      // setPages(
      //   parseInt(jsonnn.data.count % sizePerPage) == 0
      //     ? parseInt(jsonnn.data.count / sizePerPage)
      //     : parseInt(jsonnn.data.count / sizePerPage + 1)
      // );
      setMainLoader(false);
  
  
    }
   
    const fetchAllPortfolioData = async () => {
      setMainLoader(true);
      const response = await fetch(
        `${BACKEND_URL}/admin/getPortfolioData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'authorization':localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      const jsonnn = await response.json();
      console.log(jsonnn,'satyamtomar');
      setPortfolioData(jsonnn.data.list);
      setMainLoader(false);
      console.log("all my portfolio datas are", jsonnn.data);
    };
   
  return (
    <>
          <section id="portfolio" class="portfolio">
  
    <div class="container">

<div class="section-title">
  <h2>Portfolio</h2>
  <p>My Works</p>
</div>

{/* <div class="row">
  <div class="col-lg-12 d-flex justify-content-center">
    <ul id="portfolio-flters">
      <li data-filter="*" class="filter-active">All</li>
      <li data-filter=".filter-app">App</li>
      <li data-filter=".filter-card">Card</li>
      <li data-filter=".filter-web">Web</li>
    </ul>
  </div>
</div> */}

<div class="row portfolio-container">

  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>App 1</h4>
        <p>App</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>Web 3</h4>
        <p>Web</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>App 2</h4>
        <p>App</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>Card 2</h4>
        <p>Card</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>Web 2</h4>
        <p>Web</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>App 3</h4>
        <p>App</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>Card 1</h4>
        <p>Card</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>Card 3</h4>
        <p>Card</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
      <div class="portfolio-info">
        <h4>Web 3</h4>
        <p>Web</p>
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

</div>

</div>
</section>
</>
  )

}

export default Portfolio