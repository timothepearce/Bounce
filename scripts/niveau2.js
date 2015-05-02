function collision2() { 
    // Tableau qui stocke les coordonnées de chaque polygone
    var pointsBall = new Array(4);

    // Chaque mur doit avoir une variable points+id
    var pointsB2 = new Array(4);
    var pointsC2 = new Array(4);
    var pointsE2 = new Array(4);
    var pointsF2 = new Array(4);
    var pointsG2 = new Array(4);
    var pointsH2 = new Array(4);
    var pointsI2 = new Array(4);
    var pointsJ2 = new Array(4);
    var pointsK2 = new Array(4);
    var pointsL2 = new Array(4);
    var pointsM2 = new Array(4);
    var pointsN2 = new Array(4);
    var pointsO2 = new Array(4);
    var pointsP2 = new Array(4);
    var pointsQ2 = new Array(4);
    var pointsR2 = new Array(4);
    var pointsS2 = new Array(4);

    // Objets
    var points_A2 = new Array(4);
    var points_B2 = new Array(4);

    var ennemi2 = new Array(4);
    var ennemi3 = new Array(4);

    var son2 = new Array(4);

    // Portails


    //transfert des coordonnées
    $('#ball div').each(function(i) { pointsBall[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#b2 div').each(function(i) { pointsB2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#c2 div').each(function(i) { pointsC2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#e2 div').each(function(i) { pointsE2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#f2 div').each(function(i) { pointsF2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#g2 div').each(function(i) { pointsG2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#h2 div').each(function(i) { pointsH2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#i2 div').each(function(i) { pointsI2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#j2 div').each(function(i) { pointsJ2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#k2 div').each(function(i) { pointsK2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#l2 div').each(function(i) { pointsL2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#m2 div').each(function(i) { pointsM2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#n2 div').each(function(i) { pointsN2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#o2 div').each(function(i) { pointsO2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#p2 div').each(function(i) { pointsP2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#q2 div').each(function(i) { pointsQ2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#r2 div').each(function(i) { pointsR2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#s2 div').each(function(i) { pointsS2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_a2 div').each(function(i) { points_A2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_b2 div').each(function(i) { points_B2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#ennemi2 div').each(function(i) { ennemi2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#ennemi3 div').each(function(i) { ennemi3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });

    $('#son2 div').each(function(i) {
        son2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)};
    });

    if (niveau == 2) {
    // impossible de passer
    if (doPolygonsIntersect(pointsB2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsC2, pointsBall)) if ((sens = "gauche") && (delay == true)) bloqueDroite();
    if (doPolygonsIntersect(pointsE2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsF2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
    if (doPolygonsIntersect(pointsG2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
    if (doPolygonsIntersect(pointsH2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsI2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
    if (doPolygonsIntersect(pointsJ2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
    if (doPolygonsIntersect(pointsK2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsL2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
    if (doPolygonsIntersect(pointsM2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
    if (doPolygonsIntersect(pointsN2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
    if (doPolygonsIntersect(pointsO2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
    if (doPolygonsIntersect(pointsP2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
    if (doPolygonsIntersect(pointsQ2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
    if (doPolygonsIntersect(pointsR2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();

    // mort
    if (doPolygonsIntersect(points_A2, pointsBall)) {
        $("#ball").css("left", 50 + "px");
        $("#ball").css("top", 200 + "px");
        bloqueMort();
    };
    if (doPolygonsIntersect(points_B2, pointsBall)) {
        $("#ball").css("left", 50 + "px");
        $("#ball").css("top", 200 + "px");
        bloqueMort();
    };

    if (doPolygonsIntersect(ennemi2, pointsBall)) {
        $("#ball").css("left", 50 + "px");
        $("#ball").css("top", 200 + "px");
        bloqueMort();
    };
    if (doPolygonsIntersect(ennemi3, pointsBall)) {
        $("#ball").css("left", 50 + "px");
        $("#ball").css("top", 200 + "px");
        bloqueMort();
    };


    // son
    if (doPolygonsIntersect(son2, pointsBall)) {
        audio2.play();
        audio.pause();
        $("#son2").css("display", "none");
        monde++;
    };


    // transition
    if (doPolygonsIntersect(pointsS2, pointsBall) && (monde == 2)) {
        clearDelay(collision2);
        niveau = 3;
        $('.areagame2').replaceWith('<div class="areaGame3"><div id="ball"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="b3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="c3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="e3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="f3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="g3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="h3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="i3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="j3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="k3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="l3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="m3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="n3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="o3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="p3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="q3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="r3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="s3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="t3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="u3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="v3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="w3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="x3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="y3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z3_1"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z3_2"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z3_3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z3_4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z3_5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z3_6"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_a3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_b3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_c3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_d3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div class="ennemi4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div class="ennemi5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div class="ennemi6"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div class="ennemi7"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div id="son3"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="son4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div></div>');
        setInterval(collision3, 20);
        $("#ball").css("left", 50 + "px");
        $("#ball").css("top", 200 + "px");
        $("#son3").css("display", "none");
    } else if (doPolygonsIntersect(pointsS2, pointsBall) && (delay == true))
        bloqueDroite();
    };

}