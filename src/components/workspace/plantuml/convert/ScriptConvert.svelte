<script>
  import { encode } from "plantuml-encoder";

  const isBrowser = typeof localStorage !== "undefined";
  const key = "workspace.plantuml.convert.value";

  let value =
    (isBrowser && localStorage.getItem(key)) ||
    "@startuml\nA -> B : hello\n@enduml";
  let src = `http://www.plantuml.com/plantuml/img/${encode(value)}`;

  const convert = () => {
    if (!value || !isBrowser) {
      return;
    }
    localStorage.setItem(key, value);
    src = `http://www.plantuml.com/plantuml/img/${encode(value)}`;
    imageModal.showModal();
  };
</script>

<label class="form-control">
  <div class="label">
    <span class="label-text">PlantUML Script</span>
  </div>
  <textarea class="textarea textarea-bordered min-h-40 font-mono" bind:value />
</label>
<div class="flex justify-end mt-4">
  <button class="btn btn-sm md:btn-md" on:click={convert}>Convert</button>
</div>
<dialog id="imageModal" class="modal">
  <div class="modal-box flex flex-col justify-center">
    <h3 class="text-lg font-bold">PlantUML Converted Image</h3>
    <img {src} class="m-0" alt="PlantUML" />
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>Close</button>
  </form>
</dialog>

<style>
  textarea {
    field-sizing: content;
  }
</style>
