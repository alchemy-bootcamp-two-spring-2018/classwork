
const URL = '/api';
const NEIGHBORHOODS_URL = `${URL}/neighborhoods`;
const RESTAURANTS_URL = `${URL}/restaurants`;
const AUTH_URL = `${URL}/auth`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => { 
    throw err.message; 
  });
}

function getHeaders(hasBody) {
  const headers = {};
  if(hasBody) {
    headers['Content-Type'] = 'application/json';
  }

  const user = localStorage.user;
  if(user) {
    try {
      headers['Authorization'] = JSON.parse(user).id;
    }
    catch(err) {
      localStorage.removeItem('user');
    }
  }

  return headers;
}

export function getNeighborhoods() {
  return fetch(NEIGHBORHOODS_URL, {
    headers: getHeaders()
  })
    .then(response => response.json());
}

export function addNeighborhood(neighborhood) {
  return fetch(NEIGHBORHOODS_URL, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(neighborhood)
  })
    .then(responseHandler);
}

export function updateNeighborhood(neighborhood) {
  return fetch(`${NEIGHBORHOODS_URL}/${neighborhood.id}`, {
    method: 'PUT',
    headers: getHeaders(true),
    body: JSON.stringify(neighborhood)
  })
    .then(response => response.json());
}

export function removeNeighborhood(id) {
  return fetch(`${NEIGHBORHOODS_URL}/${id}`, {
    method: 'DELETE',
    headers: getHeaders()
  })
    .then(response => response.json());
}

export function getQuadrants() {
  return fetch(`${URL}/quadrants`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function getQuadrant(id) {
  return fetch(`${URL}/quadrants/${id}`, {
    headers: getHeaders()
  })
    .then(response => response.json());
}

export function getRestaurants(neighborhoodId) {
  // use `encodeURIComponent(value)` if things in query string need
  // to be escaped (like spaces, punctuation, etc)
  return fetch(`${RESTAURANTS_URL}?neighborhoodId=${neighborhoodId}`, {
    headers: getHeaders()
  })
    .then(response => response.json());
}

export function addRestaurant(restaurant) {
  return fetch(RESTAURANTS_URL, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(restaurant)
  })
    .then(response => response.json());
}

export function signUp(credentials) {
  return fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(credentials)
  })
    .then(responseHandler);
}

export function signIn(credentials) {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(credentials)
  })
    .then(responseHandler);
}


