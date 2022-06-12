const url = "http://127.0.0.1:8000/"


export async function getProjects() {
  let response = await fetch(`${url}api/projects`)
  let list = await response.json()
  return list;
}
let projectList = getProjects()
console.log(projectList)

export const getFetch = new Promise((resolve, reject)=>{
  setTimeout(()=>{
  resolve(projectList)
},1500)})
