const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () =>
{
    mobileMenu.classList.toggle('hidden');
});
const data = [
    { "name": "name1", "image": "images/download (1).jpeg", "info": "this is info", "price": "23 EG", "phone": "01279734467" },
    { "name": "name2", "image": "images/download (2).jpeg", "info": "this is info", "price": "45 EG", "phone": "01279734467" },
    { "name": "name3", "image": "images/download.jpeg", "info": "this is info", "price": "45 EG", "phone": "01279734467" },
    { "name": "name4", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC29BrQRe9VNx1jC6zKNlVEMoFI521lJYySA&s", "info": "this is info", "price": "45 EG", "phone": "01279734467" },
    { "name": "name5", "image": "https://www.pigeontype.info/wp-content/uploads/2021/02/otati-pigeons-egyptian-swift.jpg", "info": "this is info", "price": "45 EG", "phone": "01279734467" },
];

const container = document.getElementById('container');

data.forEach((item) =>
{
    // تحويل الرقم إلى صيغة دولية
    const egyptCode = "20"; // كود مصر
    const phoneInternational = `${egyptCode}${item.phone.slice(1)}`; // حذف الصفر الأول وإضافة الكود الدولي

    const itemDev = document.createElement('div');
    itemDev.classList.add('item');
    itemDev.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 150px; height: 150px; border-radius: 10px;">
        <h3 class="hhh">${item.name}</h3>
        <p>${item.info}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <a 
          href="https://wa.me/${phoneInternational}?text=مرحبًا! أرغب في معرفة المزيد عن ${item.name}." 
          target="_blank" 
          style="display: inline-block; margin-top: 10px; padding: 10px 20px; background-color: #25D366; color: white; text-decoration: none; border-radius: 5px;">
          أرسل رسالة على واتساب
        </a>
    `;
    container.appendChild(itemDev);
});

console.log(container);
