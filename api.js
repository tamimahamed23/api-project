const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    
    displayPhone(phones);
    

}

const displayPhone = phones => {

   const showCard = document.getElementById("phone-container");

//    clear phone container cards before adding new cards 

     showCard.textContent = "";

     const showAllBtn = document.getElementById("show-all");
     if (phones.length > 12) {
        showAllBtn.classList.remove("hidden");
     }else{
        showAllBtn.classList.add("hidden");
     }
     phones = phones.slice(0,12);
    phones.forEach(phone => {
        console.log(phone);

        const card = document.createElement("div");
        card .innerHTML = `
        
        
  <figure class="px-10 pt-10">
    <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>${phone.slug}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>

        
        `;
        card.classList.add("border");
        card.classList.add("rounded-xl"); 
        card.classList.add("col-span-4");
        showCard.appendChild(card);
       
        
        

    });


    // toggle hide 
    toggleLoadingSpinner(false);


};


//  Search Phone 

const searchPhone = () => {
    // 

    toggleLoadingSpinner(true);
    
    const getSearch = document.getElementById("search");
    const searchText = getSearch.value;
    console.log(searchText);
    loadPhone(searchText);
    
}

const toggleLoadingSpinner = (isLoading) => {

    const loadingSpinner = document.getElementById("loading-spinner");
    
    if(isLoading){
        
    loadingSpinner.classList.remove("hidden");
    }else{
       
        loadingSpinner.classList.add("hidden");
    }
}















