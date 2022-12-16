

function do_allocation() {
  number_of_people = numbP.value;
  number_of_buses = numbB.value;

//   console.log(number_of_people);
// console.log(number_of_buses);
    let capacity = 1;
    let allocation = [];
    
    for (let i = 0; i < number_of_buses; i++) {
      if (number_of_people > 0) {
        // Allocate as many people as the capacity of the current bus
        allocation.push(Math.min(capacity, number_of_people));
        number_of_people -= capacity;
              // Calculate the capacity of the next bus

        capacity = allocation[i] + (i > 0 ? allocation[i - 1] : 0);
    } else {
        // If there are no more people left to allocate, the remaining buses will have 0 people
        allocation.push(0);
      }
      
    }

    let list = document.getElementById("myList");
    allocation.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
      });


  }

 
  

