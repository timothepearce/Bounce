function collision3() { 
    // Tableau qui stocke les coordonnées de chaque polygone
    var pointsBall = new Array(4);

    // Chaque mur doit avoir une variable points+3d
    var pointsB3 = new Array(4);
    var pointsC3 = new Array(4);
    var pointsE3 = new Array(4);
    var pointsF3 = new Array(4);
    var pointsG3 = new Array(4);
    var pointsH3 = new Array(4);
    var pointsI3 = new Array(4);
    var pointsJ3 = new Array(4);
    var pointsK3 = new Array(4);
    var pointsL3 = new Array(4);
    var pointsM3 = new Array(4);
    var pointsN3 = new Array(4);
    var pointsO3 = new Array(4);
    var pointsP3 = new Array(4);
    var pointsQ3 = new Array(4);
    var pointsR3 = new Array(4);
    var pointsS3 = new Array(4);
    var pointsT3 = new Array(4);
    var pointsU3 = new Array(4);
    var pointsV3 = new Array(4);
    var pointsW3 = new Array(4);
    var pointsX3 = new Array(4);
    var pointsY3 = new Array(4);
    var pointsZ3 = new Array(4);
    var pointsZ3_1 = new Array(4);
    var pointsZ3_2 = new Array(4);
    var pointsZ3_3 = new Array(4);
    var pointsZ3_4 = new Array(4);
    var pointsZ3_5 = new Array(4);
    var pointsZ3_6 = new Array(4);
    var points_A3 = new Array(4);
    var points_B3 = new Array(4);
    var points_C3 = new Array(4);
    var points_D3 = new Array(4);

    // Objets

    var ennemi4 = new Array(4);
    var ennemi5 = new Array(4);
    var ennemi6 = new Array(4);
    var ennemi7 = new Array(4);
    
    var son3 = new Array(4);
    var son4 = new Array(4);

    // Portails


    //transfert des coordonnées
    $('#ball div').each(function(i) { pointsBall[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#b3 div').each(function(i) { pointsB3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#c3 div').each(function(i) { pointsC3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#e3 div').each(function(i) { pointsE3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#f3 div').each(function(i) { pointsF3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#g3 div').each(function(i) { pointsG3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#h3 div').each(function(i) { pointsH3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#i3 div').each(function(i) { pointsI3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#j3 div').each(function(i) { pointsJ3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#k3 div').each(function(i) { pointsK3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#l3 div').each(function(i) { pointsL3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#m3 div').each(function(i) { pointsM3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#n3 div').each(function(i) { pointsN3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#o3 div').each(function(i) { pointsO3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#p3 div').each(function(i) { pointsP3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#q3 div').each(function(i) { pointsQ3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#r3 div').each(function(i) { pointsR3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#s3 div').each(function(i) { pointsS3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#t3 div').each(function(i) { pointsT3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#u3 div').each(function(i) { pointsU3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#v3 div').each(function(i) { pointsV3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#w3 div').each(function(i) { pointsW3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#x3 div').each(function(i) { pointsX3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#y3 div').each(function(i) { pointsY3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z3 div').each(function(i) { pointsZ3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z3_1 div').each(function(i) { pointsZ3_1[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z3_2 div').each(function(i) { pointsZ3_2[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z3_3 div').each(function(i) { pointsZ3_3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z3_4 div').each(function(i) { pointsZ3_4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z3_5 div').each(function(i) { pointsZ3_5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z3_6 div').each(function(i) { pointsZ3_6[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_a3 div').each(function(i) { points_A3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_b3 div').each(function(i) { points_B3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_c3 div').each(function(i) { points_C3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_d3 div').each(function(i) { points_D3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });

    $('.ennemi4 div').each(function(i) { ennemi4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('.ennemi5 div').each(function(i) { ennemi5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('.ennemi6 div').each(function(i) { ennemi6[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('.ennemi7 div').each(function(i) { ennemi7[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });

    $('#son3 div').each(function(i) { son3[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#son4 div').each(function(i) { son4[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });



    // impossible de passer 
    if (niveau == 3) {
        if (doPolygonsIntersect(pointsB3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsC3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsE3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsF3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsG3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsH3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsI3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsJ3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsK3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsL3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsM3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsN3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsO3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsP3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsQ3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsR3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsS3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsT3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsU3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsV3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsW3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsX3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsY3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsZ3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsZ3_1, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsZ3_2, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsZ3_3, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsZ3_4, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();

        // mort
        if (doPolygonsIntersect(points_A3, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_B3, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_C3, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_D3, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi4, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi5, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi6, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi7, pointsBall)) {
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            bloqueMort();
        };
        // son
        if (doPolygonsIntersect(son3, pointsBall)) {
            audio2.pause();
            audio.pause();
            audio4.play();
            audio3.pause();
            $("#son3").css("display", "none");
            monde++;
        };
        if (doPolygonsIntersect(son4, pointsBall)) {
            audio.pause();
            audio2.pause();
            audio3.play();
            audio4.pause();
            $("#son3").css("display", "");
            $("#son4").css("display", "none");
            monde++
        };
        // transition
        if (doPolygonsIntersect(pointsZ3_6, pointsBall) && (monde == 4)) {
            clearDelay(collision3);
            niveau = 4;
            $('.areagame3').replaceWith('<div class="areaGame4"><div id="ball"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="b4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="c4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="e4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="f4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="g4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="h4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="i4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="j4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="k4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="l4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="m4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="n4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="o4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="p4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="q4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_a4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_b4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_c4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_d4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_e4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_f4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_g4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_h4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="_i4"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div class="ennemi8"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div class="ennemi9"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div class="ennemi10"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div>            </div><div id="son5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div><div id="son6"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div></div></div>');
            setInterval(collision4, 20);
            $("#ball").css("left", 50 + "px");
            $("#ball").css("top", 200 + "px");
            $("body").css("background-color", "#4b412f");
            $("#son5").css("display", "none");
        } else if (doPolygonsIntersect(pointsZ3_6, pointsBall) && (delay == true)) {
        bloqueDroite();
    };
    }
}