import { defineStore } from "pinia";
export const useTodoStore = defineStore('todo',{

      state: () => ({
        groups: ["All" , "Milks & Diaries", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"],
        promotion: [
            {
              text: "Everyday Fresh & Clean with Our Products",
              img: "./src/assets/img/Onion.png",
              txtBtn: "Shop now",
              btnColor: "#3BB77E",
              bg: "#C3A555"
            }, {
              text: "Make your Breakfast Healthy and Easy",
              img: "./src/assets/img/Juice.png",
              txtBtn: "Shop now",
              btnColor: "#3BB77E",
              bg: "#E0AEA8"
            }, {
              text: "The best Organic Products Online",
              img: "./src/assets/img/Mix_organic.png",
              txtBtn: "Shop now",
              btnColor: "#FDC040",
              bg: "#AADC9D"
            },
          ],
          category: [
            {
              bg: "#f2c8a5",
              img: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1701043200&Signature=nuVEq7Nzd19AIxIRLLEjSJVotSwf1Q0KQbNAiYbVgkNE3TOSq~ucJVycCTxCBYmbQQdUFEH5WfXShv-62DUKyiJPEpJD29tHB87AHvsFgxqc1iCXQ2L-10rCI~VY5yKs4GnpjD98VMyHdWy8aZo47gyn~IHBalBQRlRe5DUcvWVHazK98rv7d5gj3VyJgV7vjk6-8~EUVgXeP~chDa0uHx-PW7MZj3rr6~iZKQg9flxnR0FZ9w-CdzTmTf6YIn0i3UmwLbVzguHod5Oc-IYPVZ686Of4bNdPQQ6HEenKixqLqqLwAeF7MY4hsEpOzuL5Er2qhQBD2ysc79Qrw48x3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" ,
              title: "Cake & Milk",
              item: "14 items"
            },
            {
              bg: "#d1cd95",
              img: "https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1701043200&Signature=pJmjSAv83QimcuIG72nCNXlteOQAfTnga3FBqQAYSrQaYVGmTBOf6MZnPztVC6~7TSEazb1mNECezHkYjit02Y5mszQ5Gv6lfzgSiMmrllSqyhiZ6C9wx7P1DTJiltNv1lKqYD~z6jcnAQvcL7OxiLnLwKPozj1sSjXdEY8NV5nqy4nu03ZaOUh1DIZCXotAjC6Un0qr4mY8sQ5N1GnwUuZWipeHZ9mTWzXFYfWw2T3dG5RIjoE6uXREuWA4KYdDsMxYMANvr3fjNQp8yVQsllcJS47Det69Yw31CfmZ7TYCtVAOUTSx~A3VG9FM~Qdux4DUzPQwGv8d4wEEgYD4jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Peach",
              item: "17 items"
            },
            {
              bg: "#a3d195",
              img: "https://s3-alpha-sig.figma.com/img/eb0a/46d6/bf3d30616b8cd69f4b03064fe254350c?Expires=1701043200&Signature=qByOdc2Q1X2NFdyrUeztm6EPT9VGoOX6aob66DaYigWyiPcDvDxDOD7qrj7~xlrj-69C8A1xlBY4F8B3FLi6UE~4COX72Nd3IotG3-cjazvOZkOK0yjv32bc4eN-2ravsCdu8avOdTqzciVATjspi57zfpVc-1BHUKxa9UsJOzzLwFwuv~C7sgwDMqhtaXLFCzKJLXsJ3s2pzqOTlU~VfnDkKIiUJDbG7dApsLWYxmf1V7Ajxh6x24ZDvDF6p-4MAVVgPWMC1XW93Y8sh9AfiltKhUdUw4USN3ImgDtWEsf0Qs54kbllOkGsTaHEfshWGoiwa2RRnlWe1jWu~ECA8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Oganic Kiwi",
              item: "21 items"
            },
            {
              bg: "#d195a6",
              img: "https://s3-alpha-sig.figma.com/img/21b6/3a1e/f2a493eea176934bcab372692ab59a29?Expires=1701043200&Signature=gDrZIVRru4Xf7EFvOaJVa4zMaK34T89ooaYiiy0jHrv964HOgcNHySwHRI5tkzWDuLzCxG6-br~aNpZQg~UmRpJXt5s9njR2-BigWxO5MsyxH9KYjg9LZijaX7ytULJYu2MvLT1IRJrsU5n1xRrPrYZKf-AGOTymzm9ktMqPTe0UwT6PtEYQkVQCo71QGuV2g6AT3kTa8EwuslwSsamcDLB-5e9xa85jGRMRVvgTVdT1i4uvnHvo4TBfrH3fj1QFayytVdc~tBwW3SBRN2ZmTRnxDD-c1v4~mnvDKYrvNr9r-zoytKQZ~3IBqxh0juQdNIPFL3Wfobh2P-T5Z~lh3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Red Apple",
              item: "68 items"
            },
            {
              bg: "#eafa96",
              img: "https://s3-alpha-sig.figma.com/img/488c/b40d/98f6efd89c2347f8ab7f23b7757a7e2f?Expires=1701043200&Signature=ZTDPY7B01efjpBqFLuHwk~Pg5VXX0cxe9J3pgleHiJrNskdw4l5vtQOUUS9f~BS39NhifrWsQBJSdRmJ4ffGs3OWQYwy91Wi6LymiGCq5P02FAtTNL65RQRZs4P2CbHqnMp8QMzWMIbWXsMVDgA-obIjY2ARIjp9OtRN1O6s3eL5uYVmwOzTFNx0S6LZBjeDTRntin7~LEYoDUeqhb3xGyXpxeGSgUSRR9twcPdtmctH3q1Z2fz7sYMrDZCrUI8aY4-LXkZFLunBQQFCArSRpyhtEVFarrTxDGIywWSjkeG9QsVPv56RBxrOEKfvIsqp9vkBOwjc-I09vMysym8qEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Snack",
              item: "34 items"
            },
            {
              bg: "#a895d1",
              img: "https://s3-alpha-sig.figma.com/img/13f9/afc8/02816b515e817bcd88800c49b947f860?Expires=1701043200&Signature=S7xJJ2tNncqoFtfs0z49egQAhXp68WqXLqkKTd6iNqcX3dBe4VXW~0su0UwkKM5UuZzel51xlYQARTxfk6WGSm7Ny~CDaaMnClTd6oB917Wf~5-ALMdJjPQ2Xw~6cWxFZdtoEGMFGVSmK0CN~OeQviLSaiV2txUMPV7WaY9onC6M3NaAw1t7J231BGpJQoNeshOhAWuaOwm0X5TBmRHvMdthLe0UgdvjRS009zbvz-VKZ0k2ySDZ~4lu6qZt1KLpYm7blzbEFANdKwuzO5AiaEdoFz4CRQre0Dh46pzNcj18eiCeAbI8SDc6kR3qi7ocvE0bIGe4kQdRsiJgszQfQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Black plum ",
              item: "25 items"
            },
            {
              bg: "#b0d195",
              img: "https://s3-alpha-sig.figma.com/img/5e6d/35bc/cc6f73e5412576546dca6b013f4fc9c7?Expires=1701043200&Signature=jU~KGSCuxDZGaLS4p~Vhsve5DzsdY4MRm-GTsUC3hEAfHAy1xS-k9MYt15epdPytx4i1LVIFYGe9Bwbb-05S~UozKrJXPGNLO5kvn6Ci2O76VuDsYGXlT~YIbykAhMo26jzKZL-Wjh1T1gW36~g1t~nAFzW0cCjjwS62SOdo7JqqfcoA3Wl~G839qkElsj1OI~tzTQ8jHk4mXwyZVtBvu4PugxCZhyqP1vbmgCIS8IBesU8ZcB-P10L1FH-ydo-QKfxFn02nAALdg9DUDQcqa5ivHktuspJfVCRaZFF911cSVYEUmH5RH9dIzdWRggtT1pn~sCYCEqlTMyiDprJVtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Vegetables",
              item: "65 items"
            },
            {
              bg: "#95d1c5",
              img: "https://s3-alpha-sig.figma.com/img/0ed9/44fa/3bcccc269ae2cadb2fb25ac9b02ea29e?Expires=1701043200&Signature=hrxIqePlHrVgOqGbOzXbpuZgoQl5KndljWGx5jMYf4gLll7Q~jR3fuRxAkwSRtkcComhPSR1UHNMurnw8fXV93jBJckQfXGBluo0A-dX9YEHEkmjtU6GSy~fc4m99cyUr82uaX2xoBW1h~qHFqHLEfH~fr12p471~VE5VO~oadkM6NbcFgHAkwPkjY~xLGvhjmSTJ03deKpSiwDEmV17TCntJvGfJrjg3LCQivogaZ8-CQQfyvpP5wwGScvRkQeeKMgQZ49wS8uYxd0X9l9hDO6NQhwjOQmq8uxHw4shPKfscaMxCMpRQin8r1RPKj-jC0eu4ipWU3gAG2uE1x2bDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Headphone",
              item: "33 items"
            },
            {
              bg: "#c9d195",
              img: "https://s3-alpha-sig.figma.com/img/78c4/8886/688817c7c490b88407c4904743141184?Expires=1701043200&Signature=ku2-TlVzwdx8vQkO5evcQ9lYiZ7pa25hkkW~W8Q4dUamLcd79akJ3MAiaKJm1L1dBk9pRr5bHMkaL2QyDLuBam5P~ww2zQTjKYF9vb8m1c~ZKqxx2XzcO-ivWYaUNN2dy6qm1hTnErhQWVOpvXZ3Cb5IH3~zraXFob1Sa4IQH8Tpq7UJ4V462dFFdByy4rfa8~ws34AzoKn9QTGWKlaYZYOaUqyqI7n9z843StdY7QyjF4v382hFdccYx8WeIdKAanH9Ii~gj2E-pnmbPUzmSrwLQp4mhomR3lNM0mh-emOmuFjzrBHNOOAvdBs-gltESpCUi4stDgQucLmtwkwQjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Cake & Milk",
              item: "63 items"
            },
            {
              bg: "#ffd175",
              img: "https://s3-alpha-sig.figma.com/img/aadc/a20d/2ca905cbdfec3bf306fbe70e1ca34a8a?Expires=1701043200&Signature=JxcqdQZEapxcGc0zHoFUSJ2YOsHK6I1G2x54vW-7pk2K1FJWR27dJrRhoXt3Xt6fcpIXJsCVBX-kS-83PcZTJb-XNIIoZdxJzjml~HLHKcDtXpNrj2DQzfjFDaIQhrdOgSg~j7mYmiFgexGhJtc8jfFWCExCVN7ekRGMrVbr7zIcBDNuCx-WDyTfGOA8YxMJLwU4G~plPCReD2kyUiIuGfNu2EAIVdnz0rTqx175IbGJfEBJMVaCUSY-MJQpv1eqNfmGCkUKu8KWWuYdGUmjJW-azdxcUvIoiMjl~rO7328PmpATd4jsjZdUScn3XAsYbn6gWKHFIt1GA4LGcVkbBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              title: "Orange",
              item: "63 items"
            }
          ],
        products: [
          {
            id: 1,
            tag: "-17%",
            tagBg: "#3BB77E",
            image: "./src/assets/img/1-Seeds.png",
            category: 3,
            name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 2,
            tag: "Hot",
            tagBg: "#FD6E6E",
            image: "./src/assets/img/2-Corn.png",
            category: 3,
            name: "All Natural Italian-Style Chicken Meatballs",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 3,
            tag: "Sale",
            tagBg: "#FDC040",
            image: "./src/assets/img/3-Orange.png",
            category: 3,
            name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 4,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/4-Tomate.png",
            category: 3,
            name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 5,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/5-BlueDiamond.png",
            category: 3,
            name: "Blue Diamond Almonds Lightly Salted Vegetables",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 6,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/6-Chobani.png",
            category: 3,
            name: "Chobani Complete Vanilla Greek Yogurt",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 7,
            tag: "Sale",
            tagBg: "#FDC040",
            image: "./src/assets/img/7-Canado.png",
            category: 3,
            name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 8,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/8-Encore.png",
            category: 3,
            name: "Encore Seafoods Stuffed Alaskan Salmon",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 9,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/9-Gorton.png",
            category: 3,
            name: "Gorton's Beer Battered Fish Fillets with soft paper",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 1,
            tag: "Hot",
            tagBg: "#FD6E6E",
            image: "./src/assets/img/10-Haagen.png",
            category: 3,
            name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
            rate: "4.0",
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
        ],
      }),   
})