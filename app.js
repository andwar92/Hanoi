const app = document.getElementById('app');
let disks = [
  document.getElementById("disk-1"),
  document.getElementById("disk-2"),
  document.getElementById("disk-3")
  ];
  let towers = [
    document.getElementById("tower-1"),
    document.getElementById("tower-2"),
    document.getElementById("tower-3")
  ]
updateView();
function updateView() {
    app.innerHTML = /*HTML*/` 
    <div id="tower-1" class="tower">
      <div class="rod"></div>
      <div id="disc-3" onclick="transfer(this)" class="disk disk-3"></div>
      <div id="disc-2" onclick="transfer(this)" class="disk disk-2"></div>
      <div id="disc-1" onclick="transfer(this)" class="disk disk-1"></div>
    </div>
      
    <div id="tower-2" class="tower">
      <div class="rod"></div>
    </div>

    <div id="tower-3" class="tower">
      <div class="rod"></div>
    </div>

    `;
};

function transfer(disk){

  if (disk.parentElement.id === "tower-1" + "") {
    towers[1].appendChild(disk);
  }

  // if (disk.parentElement.id === "tower-1" ) {
  //   towers[1].appendChild(disk);
    
  // }
  // else if (disk.parentElement.id === "tower-2") {
  //   towers[2].appendChild(disk);
  // }
  // else towers[0].appendChild(disk);
  // return ;
};