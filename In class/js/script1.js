window.onload = () => {
  console.log('window loaded')
  const btn3 = document.querySelector("#btn3");
  if (btn3 !== null) {
    btn3.onclick = function () {
      alert("clicked button 3");
      console.log('Clicked button 3');
    };
  }
}

console.log('script loaded');

const aConcatString = "content" + " is cool";