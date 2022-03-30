function catchData() {
    let fildset = document.getElementById("fild");
    fildset.classList.remove("result");
    fildset.classList.add("restor");
    let prim = document.getElementById("texto").value;
    if (prim == "") {
        alert("Questão 1 não foi resolvida")
        prim.focus;
        return;
    }
    document.getElementById("result1").innerHTML = prim;
    let seg = "";
    if (document.getElementById("seg01").checked) {
        seg = seg + "Python";
    } else if (document.getElementById("seg02").checked) {
        seg = seg + "JAVA";
    } else if (document.getElementById("seg03").checked) {
        seg = seg + "C++";
    } else if (document.getElementById("seg04").checked) {
        seg = seg + "Ruby";
    } else if (document.getElementById("seg05").checked) {
        seg = seg + "php";
    }
    if (seg == '') {
        alert("Questão 2 não foi resolvida")
        seg.focus;
        return;
    }
    document.getElementById("result2").innerHTML = seg;

    let ter;
    if (document.getElementById("ter01").checked) {
        ter = "Locus";
    } else if (document.getElementById("ter02").checked) {
        ter = "Outlaw";
    } else if (document.getElementById("ter03").checked) {
        ter = "DL-Q33";
    } else if (document.getElementById("ter04").checked) {
        ter = "M21 EBR";
    } else if (document.getElementById("ter05").checked) {
        ter = "Artic .50";
    } else if (document.getElementById("ter06").checked) {
        ter = "Rytec AMR";
    } else if (document.getElementById("ter07").checked) {
        ter = "XR-50";
    } else if (document.getElementById("ter08").checked) {
        ter = "NA-45";
    }
    if (ter == '') {
        alert("Questão 3 não foi resolvida")
        ter.focus;
        return;
    }
    document.getElementById("result3").innerHTML = ter;
    if (document.getElementById("quar01").checked) {
        document.getElementById("result4").innerHTML = "Verdade";
    } else if (document.getElementById("quar02").checked) {
        document.getElementById("result4").innerHTML = "Falso";
    } else {
        alert("Questão 4 não foi resolvida");
    }

}