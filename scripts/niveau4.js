function collision4() { 
    // Tableau qui stocke les coordonnées de chaque polygone
    var pointsBall = new Array(4);

    // Chaque mur doit avoir une variable points+3d
    var pointsB4 = new Array(4);
    var pointsC4 = new Array(4);
    var pointsE4 = new Array(4);
    var pointsF4 = new Array(4);
    var pointsG4 = new Array(4);
    var pointsH4 = new Array(4);
    var pointsI4 = new Array(4);
    var pointsJ4 = new Array(4);
    var pointsK4 = new Array(4);
    var pointsL4 = new Array(4);
    var pointsM4 = new Array(4);
    var pointsN4 = new Array(4);
    var pointsO4 = new Array(4);
    var pointsP4 = new Array(4);
    var pointsQ4 = new Array(4);
    
    var points_A4 = new Array(4);
    var points_B4 = new Array(4);
    var points_C4 = new Array(4);
    var points_D4 = new Array(4);
    var points_E4 = new Array(4);
    var points_F4 = new Array(4);
    var points_G4 = new Array(4);
    var points_H4 = new Array(4);
    var points_I4 = new Array(4);


    // Objets

    var ennemi8 = new Array(4);
    var ennemi9 = new Array(4);
    var ennemi10 = new Array(4);

    var son5 = new Array(4);
    var son6 = new Array(4);

    // Portails


    //transfert des coordonnées
    $('#ball div').each(function(i) { pointsBall[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#b4 div').each(function(i) { pointsB4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#c4 div').each(function(i) { pointsC4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#e4 div').each(function(i) { pointsE4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#f4 div').each(function(i) { pointsF4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#g4 div').each(function(i) { pointsG4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#h4 div').each(function(i) { pointsH4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#i4 div').each(function(i) { pointsI4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#j4 div').each(function(i) { pointsJ4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#k4 div').each(function(i) { pointsK4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#l4 div').each(function(i) { pointsL4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#m4 div').each(function(i) { pointsM4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#n4 div').each(function(i) { pointsN4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#o4 div').each(function(i) { pointsO4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#p4 div').each(function(i) { pointsP4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#q4 div').each(function(i) { pointsQ4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    

    $('#_a4 div').each(function(i) { points_A4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_b4 div').each(function(i) { points_B4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_c4 div').each(function(i) { points_C4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_d4 div').each(function(i) { points_D4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_e4 div').each(function(i) { points_E4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_f4 div').each(function(i) { points_F4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_g4 div').each(function(i) { points_G4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_h4 div').each(function(i) { points_H4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_i4 div').each(function(i) { points_I4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });

    $('.ennemi8 div').each(function(i) { ennemi8[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('.ennemi9 div').each(function(i) { ennemi9[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('.ennemi10 div').each(function(i) { ennemi10[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });

    $('#son5 div').each(function(i) { son5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#son6 div').each(function(i) { son6[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });



    // impossible de passer
    if (niveau == 4) {
        if (doPolygonsIntersect(pointsB4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsC4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsE4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsF4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsG4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsH4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsI4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsJ4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsL4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsM4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsN4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsO4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsP4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsQ4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(points_I4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();


        // mort
        if (doPolygonsIntersect(points_A4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_B4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_C4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_D4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_E4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_F4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_G4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_H4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi8, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi9, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi10, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        // son
        if (doPolygonsIntersect(son5, pointsBall)) {
            audio5.play();
            audio4.pause();
            audio3.pause();
            audio2.pause();
            audio.pause();
            audio6.pause();
            $("#son5").css("display", "none");
            monde++;
        };
        if (doPolygonsIntersect(son6, pointsBall)) {
            audio.pause();
            audio2.pause();
            audio3.pause();
            audio5.pause();
            audio4.pause();
            audio6.play();
            $("#son6").css("display", "none");
            $("#son5").css("display", "");
            monde++;
        };
        // transition
        if (doPolygonsIntersect(pointsK4, pointsBall) && (monde == 6) && (delay == true)) {
            clearDelay(collision4);
            niveau = 5;
            $('.areagame4').replaceWith('<div class="areaGame5"><div id="ball"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="b5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="c5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="e5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="f5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="g5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="h5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="i5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="j5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="k5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div> <div id="l5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="m5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="n5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="o5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="p5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="q5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="r5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="s5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="t5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="u5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="v5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="w5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="x5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="y5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z1_5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z2_5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="z3_5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_a5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_b5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_c5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_d5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_e5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_f5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_g5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_h5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_i5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_j5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_k5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div class="ennemi11"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div class="ennemi12"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div class="ennemi13"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div id="son7"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="son8"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="son9"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div></div>');
            setInterval(collision5, 20);
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            $("#son8").css("display", "none");
            $("#son9").css("display", "none");
        } else if (doPolygonsIntersect(pointsK4, pointsBall) && (delay == true)) {
            bloqueDroite();
        };
    }
}