// variable
const services =[
    {
        id: 1,
        title: "Domain Service",
        price: 50
    },
    {
        id: 2,
        title: "Education Service",
        price: 50
    },
    {
        id: 3,
        title: "Maintenance Service",
        price: 50
    },
    {
        id: 4,
        title: "Hosting Service",
        price: 50
    },
]

// selectors
const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");



// services loop to add selectService

services.forEach((service) =>
   selectService.append(new Option(service.title,service.id))
    
)
// finding selected services info
const selectedService = services.find(el=> el.id == selectService.value)