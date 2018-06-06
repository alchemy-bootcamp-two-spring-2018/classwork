

export function getNeighborhoods() {
  return fetch('http://localhost:3000/api/neighborhoods', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addNeighborhood(neighborhood) {
  return fetch('http://localhost:3000/api/neighborhoods', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(neighborhood)
  })
    .then(response => response.json());
}

