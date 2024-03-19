"use strict";
function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_hide");
  document.querySelector(".menu").classList.toggle("cross");
}

function navWorking() {
  if (window.innerWidth < 576) {
    document.querySelector("body").classList.remove("overflow_hide");
    document.querySelector(".closeNav").classList.toggle("start-0");
    document.querySelector(".menu").classList.toggle("cross");
  }
}
// --------- //
("use strict");

const cardRow = document.querySelector(".sixCard");
cardRow.classList.add("row-gap-41");
const cardData = [
  {
    cardIamge: `./assets/img/png/art-collection.png`,
    cardheading: `ART COLLECTION`,
    paragraph: `Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.`,
  },
  {
    cardIamge: `./assets/img/png/special-bullies.png`,
    cardheading: `SPECIAL BULLIES`,
    paragraph: `20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}.`,
  },
  {
    cardIamge: `./assets/img/png/breeding.png`,
    cardheading: `BREEDING`,
    paragraph: `Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.`,
  },
  {
    cardIamge: `./assets/img/png/DIGITALMARKETS.png`,
    cardheading: `DIGITALMARKETS`,
    paragraph: `Communicate with all the digital markets available in the Solana NFT world for getting our collection successfully listed.`,
  },
  {
    cardIamge: `./assets/img/png/MERCH.png`,
    cardheading: `MERCH`,
    paragraph: `The team is working on the future merch thet will be available for the community members directly on our webpage.`,
  },
  {
    cardIamge: `./assets/img/png/CHARITY.png`,
    cardheading: `CHARITY`,
    paragraph: `We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.`,
  },
];

for (let i = 0; i < cardData.length; i++) {
  const cardColumn = document.createElement("div");
  cardColumn.classList.add("col-lg-4", "col-md-6", "col-12");
  const card = document.createElement("div");
  card.classList.add("card-box", "h-100");
  card.innerHTML = `
        <img class="cards-img w-100" src="${cardData[i].cardIamge}" alt="animal-image">
        <h2 class="fw-600 fs-30 lh-30 white my-44-25">${cardData[i].cardheading}</h2>
        <p class="fw-400 fs-16 lh-24 white opacity-07 mb-0">${cardData[i].paragraph}</p>        
    `;
  cardColumn.appendChild(card);
  cardRow.appendChild(cardColumn);
}
