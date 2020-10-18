//  criar mapa
const map = L.map('mapid').setView([-19.8528217,-43.9598869], 15);

//criar titelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//crear icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//crete maker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove maker
    marker && map.removeLayer(marker)

    //add icon
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

// upload de fotos
function addPhotoField() {
    const container = document.getElementById('images');
    const fieldContainer = document.querySelectorAll('.new-upload');
    const newFieldContainer =  fieldContainer[fieldContainer.length -1].cloneNode(true);

    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    container.appendChild(newFieldContainer);

}

function deleteField(event) {
    const span = event.target

    const fieldContainer = document.querySelectorAll('.new-upload');

    if(fieldContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();
}

//seleçao

function toggleSelect(event){
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')

    //input.value = button.dataSet.value
    input.value = button.dataset.value
}

function validate(event) {
    // validar se lat e lng entao
    const lat = document.getElementById("inplat");
    const lng = document.getElementById("inplng");
    let needsLatAndLng;

    if(lat.value == "" || lng.value == ""){
         needsLatAndLng = true;
    }else{
         needsLatAndLng = false;
    }

    if(needsLatAndLng){
        event.preventDefault()
       return alert('Selecione um ponto no mapa!')
    }
}