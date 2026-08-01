const ctx = document.getElementById("dashboardChart");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: ["Projects", "Gallery", "Contacts"],

        datasets: [{

            label: "Website Data",

            data: [

                Number(document.getElementById("projectCount").innerText),

                Number(document.getElementById("galleryCount").innerText),

                Number(document.getElementById("contactCount").innerText)

            ]

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                display: false

            }

        }

    }

});
