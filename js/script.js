"use strict";

// let students = `[
//     {"name": "Misir", "surname": "Esgerov"},
//     {"name":"Fuad", "surname": "Tagiyev"}
// ]`;


// let studentsObj = JSON.parse(students);

// console.log( studentsObj[0].name );


let user = `{
    "results": [
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "rolf",
          "last": "hegdal"
        },
        "location": {
          "street": "ljan terrasse 346",
          "city": "vear",
          "state": "rogaland",
          "postcode": "3095",
          "coordinates": {
            "latitude": "54.8646",
            "longitude": "-97.3136"
          },
          "timezone": {
            "offset": "-10:00",
            "description": "Hawaii"
          }
        },
        "email": "rolf.hegdal@example.com",
        "login": {
          "uuid": "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
          "username": "bluefrog786",
          "password": "ingrid",
          "salt": "GtRFz4NE",
          "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
          "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
          "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
        },
        "dob": {
          "date": "1975-11-12T06:34:44Z",
          "age": 42
        },
        "registered": {
          "date": "2015-11-04T22:09:36Z",
          "age": 2
        },
        "phone": "66976498",
        "cell": "40652479",
        "id": {
          "name": "FN",
          "value": "12117533881"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/65.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
        },
        "nat": "NO"
      }
    ],
    "info": {
      "seed": "2da87e9305069f1d",
      "results": 1,
      "page": 1,
      "version": "1.2"
    }
  }`;


let userObj = JSON.parse(user);

  console.log(userObj.results[0].picture.large);
  
let img = document.querySelector(".card img");
img.setAttribute("src", userObj.results[0].picture.large);

let fullname = userObj.results[0].name.title + " " + userObj.results[0].name.first+ " " + userObj.results[0].name.last;
document.querySelector(".card-title").innerHTML = fullname;













// let car = {
//     manufacturer : "BMW",
//     model : "5 series",
//     year : "1999-02-02"
// };

// var myinp = new Date(car.year);

// console.log(myinp.getFullYear())



let userlistJson = `[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]`;

  let userlistObj = JSON.parse(userlistJson);

  console.log(userlistObj);

  let ul = document.querySelector(".user-list .list-group");

  for(let i = 0; i<userlistObj.length; i++){
    let liElem = document.createElement("li");
    liElem.classList.add("list-group-item");

    let name = userlistObj[i].name;
    let zip = userlistObj[i].address.zipcode;

    liElem.innerText = name + " - " + zip;
    ul.appendChild(liElem);
  }