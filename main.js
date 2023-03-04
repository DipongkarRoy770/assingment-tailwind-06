
const userData= ()=>{
  fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(res =>res.json())
  .then(data =>displayData(data.data.tools))
}
const displayData = loadData =>{
  const container = document.getElementById('container-data');
  loadData.forEach(element => {
   //console.log(element.features[1])
    const crateDiv = document.createElement('div');
    //crateDiv.classList.add('col')
    crateDiv.innerHTML = ` 
    <div class="modal-box relative w-96 shadow-xl">
  <img src="${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h1 class="text-xl font-bold">Features</h1>
    <li class="list-decimal">${element.features[1]?element.features[1]:'No Data'}</li>
    <li class="list-decimal">${element.features[2]?element.features[2]:'No Data'}</li>
    <li class="list-decimal">${element.features[3]?element.features[3]:'No Data'}</li>
   <hr>
  <div class="flex justify-between	">
      <div>
      <h2 class="card-title medium">${element.name}</h2>
      </div>
      <div>
      <label for="my-modal-3">
      <i for="my-modal-3" onclick=onclickData() class="bg-red-200 px-3 py-3 rounded-full
      fa-solid fa-arrow-right"></i>
      </label>
      </div>
  </div>
  <div class="flex gap-4 ">
      <div><i class="bg-info
      fa-solid fa-calendar-days"></i></div>
      <div><p>${element.published_in}</p></div>
  </div>
</div>
  `;
  container.appendChild(crateDiv);
  }); 
};
function onclickData(){
  const url =`https://openapi.programming-hero.com/api/ai/tool/01`
  fetch(url)
   .then(res => res.json())
   .then(data =>displayModal(data.data))
}
const displayModal=modal =>{
  const container = document.getElementById('container');
  //console.log(modal)modal-box
  const box= document.createElement('div');
  box.innerHTML = `
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="relative w-10/12 ">
      <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      
      <div class= flex >
      <div class="w-6/12 bg-rose-100 ">
      <h1 class="text-1xl font-semibold px-5 pt-4 text-black	" >${modal.description? modal.description:'No Description Data'}</h1>
      <h1 class="text-1xl font-semibold px-5 pt-4 text-black	" >${modal.accuracy.description? modal.accuracy.description:'No Description Data'}</h1>
      <div class="flex justify-around mt-6">
          <div class="bg-yellow-100 w-40 rounded py-5">
           <h2 class="text-1xl font-bold text-center">${modal.pricing[0].price?modal.pricing[0].price:'No Cost Data'}</h2>
           <h2 class="text-1xl font-bold text-center">${modal.pricing[0].plan}</h2>
          </div>
          <div class="bg-yellow-100 w-40 rounded py-5">
             <h2 class="text-1xl font-bold text-center">${modal.pricing[1].price?modal.pricing[1].price:'No Cost Data'}</h2>
             <h2 class="text-1xl font-bold text-center">${modal.pricing[1].plan}</h2>
          </div>
           <div class="bg-yellow-100 w-40 rounded py-5">
           <h2 class="text-1xl font-bold text-center">${modal.pricing[2].price?modal.pricing[2].price:'No Cost Data'}</h2>
           <h2 class="text-1xl font-bold text-center">${modal.pricing[2].plan}</h2>          
          </div>
      </div>
       <div class="flex justify-around">
          <div>
          <h1 class="text-2xl mt-5 font-semibold text-black	">Features:</h1>
          <ul>
             <li class="mt-1 list-disc">${modal.features[1].feature_name}</li>
             <li class="mt-1 list-disc
             ">${modal.features[2].feature_name}</li>
             <li class="mt-1 list-disc
             ">${modal.features[3].feature_name}</li>
          </ul>
          </div>
          <div>
          <h1 class=" text-2xl mt-5 font-semibold text-black	">Integrations:</h1>
          <ul>
             <li class="mt-1 list-disc
             ">${modal.integrations[0]}</li>
             <li class="mt-1 list-disc
             ">${modal.integrations[1]}</li>
             <li class="mt-1 list-disc
             ">${modal.integrations[2]}</li>
          </ul>
          </div>
       </div>
      </div>
      <div class="w-6/12 bg-indigo-100">
          <div><img class="rounded px-4 pt-4" src="${modal.image_link[0]}"class="card-img-top" alt="...">
          </div>
          
         <h4 class="text-center text-xl medium mt-5">Hi, how are you doing today?</h4>
         <p class="text-center pb-4">I'm doing well, thank you for asking. How can I assist you today?</p>
      </div>
    </div>

     </div>
  </div>
  `
  container.appendChild(box)
}
userData()
