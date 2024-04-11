function calcular()
{
    var mt = parseFloat(document.getElementById("mt").value);
    var psj = mt*0.02
    var final;

    final = mt + (psj);
    document.getElementById("psj").innerHTML = "El porcentaje de inversion es del " + psj +"%";
    document.getElementById("final").innerHTML = " y la inversión en un mes seria de " + final;}