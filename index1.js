
/* First exercise is to create three promises which show dimensions of the three pictures */

document.getElementById("button").addEventListener("click", testPromise);

let log = document.getElementById('log');


function testPromise() {

  imageOneDimensions().then((val) => {

    console.log('Promise 1' + val);
  })
    .catch(
      (reason) => {
        console.log('Handle rejected promise (' + reason + ') here.');
      });


  imageTwoDimensions().then((val) => {

    console.log('Promise 2' + val);
  })

    .catch(
      (reason) => {
        console.log('Handle rejected promise 2(' + reason + ') here.');
      }
    )

  imageThreeDimensions().then((val) => {


    console.log('Promise 3' + val);
  }).catch(
    (reason) => {
      console.log('Handle rejected promise 3(' + reason + ') here.');
    }
  )

}


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






