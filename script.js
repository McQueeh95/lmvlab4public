document.getElementById('navbar').innerHTML = `
      <nav class="d-flex justify-content-between align-items-center py-3">
      <div class="logo">Velvet Nights</div>
      <ul class="nav">
        <li class="nav-item"><a class="nav-link" href="index.html">Про нас</a></li>
        <li class="nav-item"><a class="nav-link" href="events.html">Події</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Контакти</a></li>
        <li class="nav-item"><a class="nav-link" href="galery.html">Галерея</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Увійти</a></li>
      </ul>
    </nav>
    <hr class="nav-divider">
`;

function renderEvenets(){
  const list = document.getElementById("events");
  if(!list) return;

  let i = 0;
  while(i < 9){
    const item = document.createElement("div");
      item.className = "event-card p-4";

      item.innerHTML = `
          <div class="placeholder-image mb-3"></div>
        <h3 class="event-title">Назва події</h3>
        <p class="event-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor nisi a tellus convallis sodales. In in nisi ut sapien hendrerit varius quis  nec ligula. 
        </p>
      `;
      list.appendChild(item);
      i++;
  }
}

function renderGallery(){
  const list = document.getElementById("collections");
  if(!list) return;
  list.innerHTML = ''
  let i = 0;
  while(i < 9){
    const item = document.createElement("div");
      item.className = "col-md-4";

      item.innerHTML = `
        <div class="card bg-pink text-white">
          <div class="card-body">
            <div class="placeholder-image mb-3"></div>
            <h5 class="card-title">Назва колекції</h5>
          </div>
        </div>
      `;
      list.appendChild(item);
      i++;
  }
}




document.addEventListener("DOMContentLoaded", () => {renderEvenets(); renderGallery();});