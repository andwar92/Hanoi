//Model
const app = document.getElementById('app');
const towerOfHanoi = {
  towers: {
    tower1: "tower-1",
    tower2: "tower-2",
    tower3: "tower-3",
  },

  discs: {
    disk1: "tower-1",
    disk2: "tower-2",
    disk3: "tower-3",
  },
}
//Veiw
updateView();
function updateView() {
 app.innerHTML= drawTowerOfHanoi("tower-1","disc-1","disk disk-3");
};

function drawTowerOfHanoi(tower,disk,big) {
  let html = /*HTML*/`
    <div id="${tower}" class="tower">
      <div class="rod"></div>
      <div id="${disk}" onclick="transfer(this)" class="${big}"></div>
      <div id="${disk}" onclick="transfer(this)" class="disk disk-2"></div>
      <div id="${disk}" onclick="transfer(this)" class="disk disk-1"></div>
    </div>
      
    <div id="tower-2" class="tower">
      <div class="rod"></div>
    </div>

    <div id="tower-3" class="tower">
      <div class="rod"></div>
    </div>
`;
  return html;
};

function getDisc(id) {
  return towerOfHanoi.discs.find(element => element.id === id)
};
function getTower(id) {
  return towerOfHanoi.towers.find(element => element.id === id);
};
function transfer(diskElement) {
  let id = diskElement.id;
  let clickedDisc = getDisc(id);
  let tower
  if (clickedDisc.tower === "tower-1") {
    clickedDisc = "tower-2"; updateView();
  }
  console.log(clickedDisc);
  // else if (disk.parentElement.id === "tower-2") {
  //   towers[2].appendChild(disk);
  // }
  // else towers[0].appendChild(disk);
  return;
};