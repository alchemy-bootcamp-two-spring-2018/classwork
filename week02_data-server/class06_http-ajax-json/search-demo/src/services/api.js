

// url:
// 1) protocol (https://)
// 2) host server  (swapi.co)
// 3) path (/api/people)
// 4) search or query
//    - separated from path via "?"
//    - name=value pairs separted by "&"
//    - use "encodeURIComponent" to escape search values
//    ?APIKEY=abc123&search=name

export function getPeople(name) {
  const url = 'https://swapi.co/api/people?search=' + encodeURIComponent(name);
  return fetch(url)
    .then(response => response.json());
}