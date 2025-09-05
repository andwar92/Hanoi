const app = document.getElementById('app');

updateView();
function updateView() {
    app.innerHTML = /*HTML*/` 
    <div id="tower-1" class="tower">
      <div class="rod"></div>
      <div class="disk disk-3"></div>
      <div class="disk disk-2"></div>
      <div class="disk disk-1"></div>
    </div>

    <div id="tower-2" class="tower">
      <div class="rod"></div>
    </div>

    <div id="tower-3" class="tower">
      <div class="rod"></div>
    </div>

    `;
};