// Second exercise: use async await 

document.getElementById("button").addEventListener("click", testPromise);

let log = document.getElementById('log');


async function testPromise() {

  try {
    let first = await imageOneDimensions();
    console.log('Promise 1 ' + new Date());

    let second = await imageTwoDimensions();
    console.log('Promise 2 ' + new Date());

    let third = await imageThreeDimensions();
    console.log('Promise 3 ' + new Date());
  } catch (e) {

    console.log(e);
  }

}


/* Promises */
const imageOneDimensions = () =>

  new Promise(resolve => {

    let img = new Image();

    img.src = "https://images.unsplash.com/photo-1580146644802-17c39e09e4fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

    img.onload = () => {
      log.insertAdjacentHTML('beforeend', 'Image 1 dimensions: ' + img.width + 'x' + img.height + 'px <br/>');

      resolve(' fulfilled');
    }


  })



const imageTwoDimensions = () =>

  new Promise(resolve => {

    let img = new Image();

    img.src = "https://images.unsplash.com/photo-1579961376246-521d854e9941?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

    img.onload = () => {

      log.insertAdjacentHTML('beforeend', 'Image 2 dimensions: ' + img.width + 'x' + img.height + 'px <br/>');

      resolve(' fulfilled');

    }


  })


const imageThreeDimensions = () =>

  new Promise(resolve => {


    let img = new Image();

    img.src = "https://images.unsplash.com/photo-1580118797218-2413f9d2e36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

    img.onload = () => {

      log.insertAdjacentHTML('beforeend', 'Image 3 dimensions: ' + img.width + 'x' + img.height + 'px <br/>');
      resolve(' fulfilled');

    }


  })






