let elList = document.getElementById("demo");

let API = "https://dummyjson.com/products";

fetch(API).then((response) => response.json()).then((data) => {
        data.products.map((item) => {
        const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', '', 'Blue'],
            datasets: [{
              label: '# of Votes',
              data: [item.rating, item.rating, item.price, item.discountPercentage, item.price, item.rating, item.rating, item.price, item.rating, item.price, item.price, item.stock, item.price, item.discountPercentage],
              borderWidth: 2,
              width:"10px",
              color: "red"
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
    });
})