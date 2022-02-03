const d = document;
const ls = localStorage;

export default function themes() {
  const $body = d.querySelector("body");
  const $slider = d.querySelector(".slider");
  const $h1 = d.querySelector("h1");
  const $p = d.querySelector("p");
  const $switch = d.querySelector(".switch");
  const $switchNumbersTheme = d.querySelectorAll(".number-theme-switch");
  const $numberThemeContainer = d.querySelector(".number-theme-container");
  const $imputNumber = d.getElementById("input-number");
  const $keysContainer = d.querySelector(".keys-container");
  const $btns = d.querySelectorAll(".btn");
  const $attribution = d.querySelector(".default-attribution");
  const $attributionLink = d.querySelectorAll(".default-attribution-link");

  console.log($attributionLink);

  const theme1 = () => {
    $body.classList.replace($body.classList.value, "default-theme-body");
    $slider.classList.replace($slider.classList[2], "is-default");
    $slider.classList.replace($slider.classList[1], "default-slider");
    $h1.classList.replace($h1.classList.value, "default-theme-h1");
    $p.classList.replace($p.classList.value, "default-theme-text");
    $switch.classList.replace($switch.classList[1], "default-switch-theme");
    $numberThemeContainer.classList.replace(
      $numberThemeContainer.classList[1],
      "default-number-theme-container"
    );
    $imputNumber.classList.replace(
      $imputNumber.classList[1],
      "default-input-numbers"
    );
    $keysContainer.classList.replace(
      $keysContainer.classList[1],
      "default-keys-container"
    );

    $btns.forEach((el) => el.classList.replace(el.classList[1], "default-btn"));

    $attributionLink.forEach((el) =>
      el.classList.replace(el.classList.value, "default-attribution-link")
    );

    ls.setItem("theme", "theme1");
  };

  const theme2 = () => {
    $body.classList.replace($body.classList.value, "theme2-body");
    $slider.classList.replace($slider.classList[2], "is-theme2");
    $slider.classList.replace($slider.classList[1], "theme2-slider");
    $h1.classList.replace($h1.classList.value, "theme2-h1");
    $p.classList.replace($p.classList.value, "theme2-text");
    $switch.classList.replace($switch.classList[1], "theme2-switch-theme");
    $numberThemeContainer.classList.replace(
      $numberThemeContainer.classList[1],
      "theme2-number-theme-container"
    );
    $imputNumber.classList.replace(
      $imputNumber.classList[1],
      "theme2-input-numbers"
    );
    $keysContainer.classList.replace(
      $keysContainer.classList[1],
      "theme2-keys-container"
    );

    $btns.forEach((el) => el.classList.replace(el.classList[1], "theme2-btn"));

    $attribution.classList.replace(
      $attribution.classList[1],
      "theme2-attribution"
    );

    $attributionLink.forEach((el) =>
      el.classList.replace(el.classList.value, "theme2-attribution-link")
    );

    ls.setItem("theme", "theme2");
  };

  const theme3 = () => {
    $body.classList.replace($body.classList.value, "theme3-body");
    $slider.classList.replace($slider.classList[2], "is-theme3");
    $slider.classList.replace($slider.classList[1], "theme3-slider");
    $h1.classList.replace($h1.classList.value, "theme3-h1");
    $p.classList.replace($p.classList.value, "theme3-text");
    $switch.classList.replace($switch.classList[1], "theme3-switch-theme");
    $numberThemeContainer.classList.replace(
      $numberThemeContainer.classList[1],
      "theme3-number-theme-container"
    );
    $imputNumber.classList.replace(
      $imputNumber.classList[1],
      "theme3-input-numbers"
    );
    $keysContainer.classList.replace(
      $keysContainer.classList[1],
      "theme3-keys-container"
    );

    $btns.forEach((el) => el.classList.replace(el.classList[1], "theme3-btn"));

    $attribution.classList.replace(
      $attribution.classList[1],
      "theme3-attribution"
    );

    $attributionLink.forEach((el) =>
      el.classList.replace(el.classList.value, "theme3-attribution-link")
    );

    ls.setItem("theme", "theme3");
  };

  $switchNumbersTheme.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.textContent === "1") {
        theme1();
      } else if (el.textContent === "2") {
        theme2();
      } else if (el.textContent === "3") {
        theme3();
      }
    });
  });

  // Local Storage
  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "theme1");
    if (ls.getItem("theme") === "theme1") theme1();
    if (ls.getItem("theme") === "theme2") theme2();
    if (ls.getItem("theme") === "theme3") theme3();
  });
}
