var collision1 = setInterval(collision, 20);
var collision2;

function collision() { 
    // Tableau qui stocke les coordonnées de chaque polygone
    var pointsBall = new Array(4);

    // Chaque mur doit avoir une variable points+id
    var pointsA = new Array(4);
    var pointsB = new Array(4);
    var pointsC = new Array(4);
    var pointsE = new Array(4);
    var pointsF = new Array(4);
    var pointsG = new Array(4);
    var pointsH = new Array(4);
    var pointsI = new Array(4);
    var pointsJ = new Array(4);
    var pointsL = new Array(4);

    // Objets
    var pointsMort = new Array(4);
    var pointsMort2 = new Array(4);
    var pointsSon = new Array(4);

    // Portails

    //transfert des coordonnées
    $('#ball div').each(function(i) { pointsBall[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#a div').each(function(i) { pointsA[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#b div').each(function(i) { pointsB[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#c div').each(function(i) { pointsC[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#e div').each(function(i) { pointsE[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#f div').each(function(i) { pointsF[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#g div').each(function(i) { pointsG[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#h div').each(function(i) { pointsH[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#i div').each(function(i) { pointsI[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#j div').each(function(i) { pointsJ[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#l div').each(function(i) { pointsL[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });

    $('#ennemi1 div').each(function(i) {
        pointsMort[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)};
    });
    $('#ennemi2 div').each(function(i) {
        pointsMort2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)};
    });

    $('#son div').each(function(i) {
        pointsSon[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)};
    });

    // impossible de passer
    if (doPolygonsIntersect(pointsA, pointsBall)) if ((sens = "haut") && (delay == true)) bloqueHaut(); 
    if (doPolygonsIntersect(pointsB, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsC, pointsBall)) if ((sens = "gauche") && (delay == true)) bloqueGauche();
    if (doPolygonsIntersect(pointsE, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsF, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
    if (doPolygonsIntersect(pointsG, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsH, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
    if (doPolygonsIntersect(pointsI, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsL, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();

    // mort
    if (doPolygonsIntersect(pointsMort, pointsBall)) {
        $("#ball").css("left", 50 + "px");
        $("#ball").css("top", 200 + "px");
        bloqueMort();
    };
    if (doPolygonsIntersect(pointsMort2, pointsBall)) {
        $("#ball").css("left", 50 + "px");
        $("#ball").css("top", 200 + "px");
        bloqueMort();
    };

    // son
    if (doPolygonsIntersect(pointsSon, pointsBall)) {
        audio.play();
        $("#son").css("display", "none");
        $(".areagame").css("background-image", "url(images/Niveau1Way.png)");
        monde++;
    };

    // transition
    if (doPolygonsIntersect(pointsJ, pointsBall) && (monde == 1)) {
        $('.areagame').replaceWith('<div class="areaGame2"><div id="ball"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="b2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="c2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="e2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="f2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="g2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="h2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="i2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="j2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="k2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="l2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="m2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="n2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="o2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="p2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="q2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="r2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="s2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_a2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_b2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="ennemi2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="ennemi3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="son2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div></div>');
        clearDelay(collision1);
        setInterval(collision2, 20);
        niveau = 2;
    } else if (doPolygonsIntersect(pointsJ, pointsBall) && (monde == 0) && (delay == true)) {
        bloqueDroite();
    }

};