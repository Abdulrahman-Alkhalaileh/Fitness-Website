// let deleteUsers= document.querySelectorAll('#deleteUser');

// //delete Users from the database
// deleteUsers.forEach(element => {
//     element.onclick=(e)=>{
//     e.target.parentElement.parentElement.parentElement.remove()
// } 
// });



let ProductNameInput= document.querySelector('#nameInput')
let priceInput= document.querySelector('#priceInput')
let descriptionInput= document.querySelector('#descriptionInput')
let quantityInput= document.querySelector('#quantityInput')
let imageInput= document.querySelector('#imageInput')

let editProduct = document.querySelectorAll('#editProduct')
let addProduct = document.querySelector('#addProduct')
let editSubmit = document.querySelector('#editSubmit')

let editedProductLabel = document.querySelector('#editedProductLabel')
let editedProductID = document.querySelector('#editedProductID')
let editProductLink = document.querySelector('#editProductLink')

//update form to contain edited product information
editProduct.forEach(element=>{
    element.onclick=(e)=>{
       ProductNameInput.value= e.target.parentElement.parentElement.querySelector('#product_name').innerHTML
       priceInput.value= Number(e.target.parentElement.parentElement.querySelector('#price').innerHTML)
       descriptionInput.value= e.target.parentElement.parentElement.querySelector('#description').innerHTML
       quantityInput.value= Number(e.target.parentElement.parentElement.querySelector('#quantity').innerHTML)
       imageInput.value= e.target.parentElement.parentElement.querySelector('#image').innerHTML
       editSubmit.classList.remove('hideButton')
       editedProductLabel.classList.remove('hideButton')
       addProduct.classList.add('hideButton')
       editedProductID.innerHTML= e.target.parentElement.parentElement.querySelector('#ID').innerHTML
       //scroll page to edit form
       document.querySelector('#productForm').scrollIntoView({behavior:"smooth"})
    }
})

editSubmit.onclick=(e)=>{
    editProductLink.href=
    `./editProduct/${editedProductID.innerHTML}/${ProductNameInput.value}/${priceInput.value}/${descriptionInput.value}/${Number(quantityInput.value)}/${imageInput.value}`
}
