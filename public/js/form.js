const d = document;

export default function validatorForm() {
  const $input = d.querySelector("form [required]");
  const $div = d.createElement("div");
  $div.id = $input.name;
  $div.textContent = $input.title;
  $div.classList.add("error", "none");
  $input.insertAdjacentElement("afterend", $div);

  d.addEventListener("keyup", (e) => {
    if (e.target.matches("form [required]")) {
      let $input = e.target;
      let pattern = $input.pattern;
      console.log($input);
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? (d.getElementById($input.name).classList.add("is-active"),
            $input.classList.add("is-invalid"))
          : (d.getElementById($input.name).classList.remove("is-active"),
            $input.classList.add("is-invalid"));
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
