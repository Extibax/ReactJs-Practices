const descargarUsuarios = cantidad =>
  new Promise((resolve, reject) => {
    /* Pasar la cantitdad a la api */
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    /* Llamada a ajax */
    const xhr = new XMLHttpRequest();

    /* Abrir la conexion */
    xhr.open("GET", api, true);

    /* On load */
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    /* Opcional (on error) */
    xhr.onerror = error => reject(error);

    /* Send */
    xhr.send();
  });

descargarUsuarios(30).then(
  miembros => console.log(miembros),
  error => console.error(new Error("Hubo un error: ", error))
);
