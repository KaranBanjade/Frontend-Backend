const DownloadProject = (data) =>{
    const api = "http://localhost:3001/test";
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
export default DownloadProject;
