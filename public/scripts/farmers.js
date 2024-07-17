// farmers.js
const farmers = [
    {name: 'Joshua Kimani', 
      image: './images/Josh.jpg', 
      bio: 'Joshua has been a farmer for over 20 years and specializes in organic poultry farming.', 
      contact: { 
      email: 'joshua_kimani@farm2table.com', 
      phone: '+25412345634'
     }
    },
    {name: 'Loureen Kivutha', 
      image: './images/Loureen.jpg', 
      bio: `Loureen is a fourth-generation poultry farmer who takes great pride in her family's farming traditions.`, 
      contact: { 
        email: 'loureenkivutha@farm2table.com', 
        phone: '+2549876543210' 
      }
    },
    {name: 'Winnie Atieno', 
      image: './images/Winnie.jpg', 
      bio: 'Winnie is passionate about sustainable poultry farming practices and believes in preserving the environment.', 
      contact: { 
        email: 'winnie@farm2table.com', 
        phone: '+254555555555' 
      }
    },
    // More farmers to be added as needed
  ];
  
  function renderFarmers() {
    const farmerList = document.querySelector('.farmer-list');
    if (!farmerList) {
      console.error('Farmer list element not found');
      return;
    }
    farmerList.innerHTML = '';
    farmers.forEach(farmer => {
      const farmerItem = document.createElement('div');
      farmerItem.classList.add('farmer-item');
      farmerItem.innerHTML = `
        <img src="${farmer.image}" alt="${farmer.name}">
        <h3>${farmer.name}</h3>
        <p>${farmer.bio}</p>
        <p>Email: <a href="mailto:${farmer.contact.email}">${farmer.contact.email}</a></p>
        <p>Phone: <a href="tel:${farmer.contact.phone}">${farmer.contact.phone}</a></p>
      `;
      farmerList.appendChild(farmerItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    renderFarmers();
  }); // Call the renderFarmers function