// variable
const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 50,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 70,
  },
  {
    id: 3,
    title: "Maintence Service",
    price: 100,
  },
  {
    id: 4,
    title: "Education Service",
    price: 150,
  },
];

// selector

const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");
const subtotal = document.querySelector("#subtotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const listTable = document.querySelector("#listTable");
const addServiceForm = document.querySelector("#addServiceForm");
const addServiceModal = document.querySelector("#addServiceModal");
const closeBtn = document.querySelector("#close-btn");
const addServices = document.querySelector("#addServices");

// function
// create tr
const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  tr.classList.add("list");
  tr.setAttribute("service-id", service.id);
  let total = service.price * quantity.valueAsNumber;
  tr.innerHTML = `
    <td class=" d-flex justify-content-between">${service.title}
     <i class=" bi bi-trash text-danger del-btn"></i>
     </td>
    <td class=" text-end list-quantity">${quantity.valueAsNumber}</td>
    <td class=" text-end">${service.price}</td>
    <td class=" text-end list-total">${total}</td>
 
    `;
  return tr;
};
// find tax
const calculateTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};
// find subtotal
const findTotal = () => {
  const listTotal = document.querySelectorAll(".list-total");
  let subTotalCalculate = [...listTotal].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );

  // adding subtotal , tax and total
  subtotal.innerText = subTotalCalculate;
  tax.innerText = calculateTax(subTotalCalculate);
  total.innerText = subTotalCalculate + calculateTax(subTotalCalculate);
};

// show table
const showTable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
  } else {
    listTable.classList.add("d-none");
  }
};

// add event listener(process)
// Select option loop
services.forEach((service) =>
  selectService.append(new Option(service.title, service.id))
);


// submit form  ....
invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(
  //     quantity.valueAsNumber,
  //     services.find((service) => service.id == selectService.value),
  //     selectService.value
  //   );
  //  ///////////////////////////////
  // finding selected service
  const selectedService = services.find(
    (service) => service.id == selectService.value
  );
  // /////

  // finding existed service

  const existedService = [...lists.children].find(
    (el) => el.getAttribute("service-id") == selectedService.id
  );

  // form submit

  // console.log(selectedService);
  //   adding existed services
  if (existedService) {
    console.log("yes it is existed");
    const existedQuantity = existedService.querySelector(".list-quantity");
    existedQuantity.innerText =
      parseFloat(existedQuantity.innerText) + quantity.valueAsNumber;
    existedService.querySelector(".list-total").innerText =
      existedQuantity.innerText * selectedService.price;
  } else {
    lists.append(createTr(selectedService, quantity));
  }

  findTotal();

  invoiceForm.reset();

  showTable();
});

// delete  table row
app.addEventListener("click", (event) => {
  //   console.log(event.target);
  const currentElement = event.target;
  if (currentElement.classList.contains("del-btn")) {
    currentElement.closest(".list").remove();
  }
 
  findTotal();
  showTable();
});


// /// Taking Add service form data
addServiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.dir(event.target)
  const formData = new FormData(event.target);
  console.log(formData.get("title"), formData.get("price"));

  const id = Date.now();
  console.log(id);

  //  //pushing newservices to original services
  services.push( {
    id: id,
    title: formData.get("title"),
    price: formData.get("price"),
  });

  // adding new services to original services


  selectService.append(new Option(formData.get("title"),id))



// close model
event.target.reset();
addServiceModal.classList.add("d-none")

});

// close btn for model box
closeBtn.addEventListener("click",()=>addServiceForm.classList.add("d-none"))


// show btn for model box 
// 
addServices.addEventListener("click",()=>addServiceModal.classList.remove("d-none"))
