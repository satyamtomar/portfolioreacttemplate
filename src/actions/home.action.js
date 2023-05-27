import Agent from "./superAgent";
import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = config.BACKEND_URL;

function fetchAllDataPortfolio(payload, cb) {
    Agent
      .fire('post', `${BACKEND_URL}/website/getDataPortfolio`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  
  
function getBorhanUserDetails( cb) {
    Agent
      .fire('get', `${BACKEND_URL}/website/getBorhanUserDetails`)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }

  const editBorhanUserDetails=(payload,cb)=>{
    Agent
    .fire('put', `${BACKEND_URL}/website/editBorhanUserDetails`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
  }
  
  function fetchSearchedPracticeArea(payload,cb) {
    Agent
      .fire('post', `${BACKEND_URL}/website/getPracticeAreaDataSearched`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  function fetchTestimonies( cb) {
    Agent
      .fire('get', `${BACKEND_URL}/website/getTestimonies`)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  function newsletterSubscribed( payload,cb) {
    Agent
      .fire('post', `${BACKEND_URL}/website/subscribeNewsletter`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
export default {
  fetchAllDataPortfolio,
    getBorhanUserDetails,
    editBorhanUserDetails,
    fetchSearchedPracticeArea,
    fetchTestimonies,
    newsletterSubscribed,
  }