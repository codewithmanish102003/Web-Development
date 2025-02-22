async function getData() {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data=await res.json();
    // console.log(data);
    
    return data;
    }
 export default async function handler() {
const data=await getData();
// console.log(data);



return(
    <div>
    <h1>title : {data.title}</h1>
    <p>description : {data.body}</p>
    </div>
)
    }
