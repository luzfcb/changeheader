// Saves options to chrome.storage.sync.
function save_options() {
    var color = document.getElementById('color').value;
    var likesColor = document.getElementById('like').checked;

    var valores = [];
    var enabled_sites_list = document.getElementById('enabled-sites-list');
    for (var i = 0; i < enabled_sites_list.options.length; i++) {
        valores[i] = enabled_sites_list.options[i].value;
    }

    chrome.storage.sync.set({
        favoriteColor: color,
        likesColor: likesColor,
        enabledSitesList: valores
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        favoriteColor: 'red',
        likesColor: true
    }, function (items) {
        document.getElementById('color').value = items.favoriteColor;
        document.getElementById('like').checked = items.likesColor;
        var enabled_sites_list = document.getElementById('enabled-sites-list');

        function add_to_list(element, index, array) {
            var option = document.createElement("option");
            option.text = element;
            enabled_sites_list.add(option, enabled_sites_list[0]);
        }

        items.enabledSitesList.forEach(add_to_list);
    });
}


function add_to_enable_sites_list() {
    var input = document.getElementById('enable-sites-input');
    var enabled_sites_list = document.getElementById('enabled-sites-list');
    var option = document.createElement("option");
    option.text = input.value;
    input.value = "";
    enabled_sites_list.add(option, enabled_sites_list[0]);
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

document.getElementById('adicionar_para_lista').addEventListener('click',
    add_to_enable_sites_list);
