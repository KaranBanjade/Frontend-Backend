const DownloadProject = (data) =>{
    // const api = "https://scriptsorcerers-backend.adaptable.app/test ";
    const api = "http://localhost:5000/addNewBackend";
  fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "download.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
    );
}
// const DownloadFunctions = {
//   DownloadProject
// }
const DownloadLastProject = (e) =>{
  e.preventDefault();
  alert("Download Last Project")
  return;
  const api = "http://localhost:3001/project/last";
  const useId = localStorage.getItem('user');
  const data = {
    userId: useId
  }

  fetch(api, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        console.log(data);
        DownloadProject(data);
    });
}
const DownloadFunctions = {
  DownloadProject,
  DownloadLastProject
}
export default DownloadFunctions;
