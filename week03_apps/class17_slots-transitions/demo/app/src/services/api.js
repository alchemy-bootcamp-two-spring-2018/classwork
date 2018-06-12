
const URL = 'http://localhost:3000/api';
const NEIGHBORHOODS_URL = `${URL}/neighborhoods`;
const RESTAURANTS_URL = `${URL}/restaurants`;

export function getNeighborhoods() {
  return fetch(NEIGHBORHOODS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addNeighborhood(neighborhood) {
  return fetch(NEIGHBORHOODS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(neighborhood)
  })
    .then(response => response.json());
}

export function updateNeighborhood(neighborhood) {
  return fetch(`${NEIGHBORHOODS_URL}/${neighborhood.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(neighborhood)
  })
    .then(response => response.json());
}

export function removeNeighborhood(id) {
  return fetch(`${NEIGHBORHOODS_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}

export function getQuadrants() {
  return fetch(`${URL}/quadrants`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getQuadrant(id) {
  return fetch(`${URL}/quadrants/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getRestaurants(neighborhoodId) {
  // use `encodeURIComponent(value)` if things in query string need
  // to be escaped (like spaces, punctuation, etc)
  return fetch(`${RESTAURANTS_URL}?neighborhoodId=${neighborhoodId}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addRestaurant(restaurant) {
  return fetch(RESTAURANTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(restaurant)
  })
    .then(response => response.json());
}


