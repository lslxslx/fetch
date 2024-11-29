let qd = `jsdata.json`;

const fetchdata = fetch(qd)
    .then((response) => {
        if (!response.ok) throw new TypeError(`Përgjigjja nuk është OK! (${response.status})`);
        response.json().then((json) => {
            let aboutintel = document.querySelector('article p'),
                list = document.querySelector('article ul');
            if (aboutintel != null || list != null) {
                aboutintel.innerHTML = `${json.about.intel.replace(/(?:\r\n|\r|\n)/g, '<br>')}`;
                json.about.aims.forEach(x => {
                    list.innerHTML += `<li>${x.li.replace(/(?:\r\n|\r|\n)/g, '<br>')}</li>`;
                });
            }
            else {
                console.log('The content or the functionality of the web page is limited or unavailable.')
            }
        })
    })
    .catch(() => { throw new TypeError('Gabim sintaksor në JSON.'); return 'Gabim sintaksor' });