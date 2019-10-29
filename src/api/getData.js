export async function getData() {
  const promise = await fetch("http://localhost:3000/data").then(response =>
    response.json()
  );
  return promise;
}
