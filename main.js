
const cars = [
    { id: 1, name: "Toyota Camry", price: 25000, image: "images/toyota.jpg", details: "Engine: 2.5L, Mileage: 30,000 miles,model: 2022" },
    { id: 2, name: "Honda Accord", price: 22000, image: "images/honda.jpg", details: "Engine: 2.4L, Mileage: 40,000 miles,model: 2021" },
    { id: 3, name: "BMW 3 Series", price: 35000, image: "images/bmw.jpg", details: "Engine: 3.0L, Mileage: 25,000 miles,model: 2020" },
    { id: 4, name: "Audi A4", price: 30000, image: "images/audi.jpg", details: "Engine: 2.0L, Mileage: 35,000 miles,model: 2023" },
    { id: 5, name: "Ford Mustang", price: 45000, image: "images/ford.jpg", details: "Engine: 5.0L, Mileage: 10,000 miles,model: 2016" },
    { id: 6, name: "Mercedes C", price:43000, image : "images/mar.jpg", details:"Engine: 1.80L, Mileage: 28,000 miles,model: 2022"},
  ];
  
  // Function to render car listings
  function renderCars(carsToDisplay) {
    const carList = document.getElementById("car-list");
    carList.innerHTML = ""; // Clear current listings
  
    carsToDisplay.forEach(car => {
      const carElement = document.createElement("div");
      carElement.classList.add("car");
      
      carElement.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>Price: $${car.price}</p>
        <button onclick="showDetails(${car.id})">View Details</button>
      `;
  
      carList.appendChild(carElement);
    });
  }
  
  // Function to show car details in a simple alert
 // نافذة منبثقة للتفاصيل
function showDetails(carId) {
    const car = cars.find(car => car.id === carId);
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDetails = document.getElementById("modal-details");
  
    modalTitle.textContent = car.name;
    modalDetails.textContent = `Price: $${car.price}\nDetails: ${car.details}`;
  
    modal.style.display = "flex"; // عرض النافذة
  }
  
  // إغلاق النافذة عند الضغط على زر الإغلاق
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".close-btn").addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
    });
  
    document.getElementById("modal").addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        document.getElementById("modal").style.display = "none";
      }
    });
  });
  
  
  renderCars(cars);
  document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("login-modal");
    const closeLoginBtn = document.querySelector(".close-login-btn");
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");
  });
 
  // Event listeners for buttons
  document.getElementById("showAllBtn").addEventListener("click", () => {
    renderCars(cars);
  });
  
  document.getElementById("filterBtn").addEventListener("click", () => {
    // Filter cars by price (for example, show only cars under $30,000)
    const filteredCars = cars.filter(car => car.price <= 30000);
    renderCars(filteredCars);
  });