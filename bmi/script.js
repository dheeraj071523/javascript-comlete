const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const guide = document.querySelector("#weight-guide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `plaese give the vaild height  ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give the vaild weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      guide.innerHTML = `<p>Under Weight</p>`;
    } else if (18.6 <= bmi && bmi <= 24.6) {
      guide.innerHTML = `<p>Normal Range</p>`;
    } else {
      guide.innerHTML = `<p>Overweight</p>`;
    }
  }
});
