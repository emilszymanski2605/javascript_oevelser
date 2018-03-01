var prisudenmoms = 800;
var pris_med_moms = prismedmoms(prisudenmoms);

function prismedmoms(pris){
    var moms = 1.25;
    pris_med_moms = moms * prisudenmoms;
    return pris_med_moms;
}

document.querySelector("#text").innerHTML = "Prisen med moms er "  + pris_med_moms;