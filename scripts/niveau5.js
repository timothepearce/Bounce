function collision5() { 
    // Tableau qui stocke les coordonnées de chaque polygone
    var pointsBall = new Array(4);

    // Chaque mur doit avoir une variable points+3d
    var pointsB5 = new Array(4);
    var pointsC5 = new Array(4);
    var pointsE5 = new Array(4);
    var pointsF5 = new Array(4);
    var pointsG5 = new Array(4);
    var pointsH5 = new Array(4);
    var pointsI5 = new Array(4);
    var pointsJ5 = new Array(4);
    var pointsK5 = new Array(4);
    var pointsL5 = new Array(4);
    var pointsM5 = new Array(4);
    var pointsN5 = new Array(4);
    var pointsO5 = new Array(4);
    var pointsP5 = new Array(4);
    var pointsQ5 = new Array(4);
    var pointsR5 = new Array(4);
    var pointsS5 = new Array(4);
    var pointsT5 = new Array(4);
    var pointsU5 = new Array(4);
    var pointsV5 = new Array(4);
    var pointsW5 = new Array(4);
    var pointsX5 = new Array(4);
    var pointsY5 = new Array(4);
    var pointsZ5 = new Array(4);
    var pointsZ1_5 = new Array(4);
    var pointsZ2_5 = new Array(4);
    var pointsZ3_5 = new Array(4);
    
    var points_A5 = new Array(4);
    var points_B5 = new Array(4);
    var points_C5 = new Array(4);
    var points_D5 = new Array(4);
    var points_E5 = new Array(4);
    var points_F5 = new Array(4);
    var points_G5 = new Array(4);
    var points_H5 = new Array(4);
    var points_I5 = new Array(4);
    var points_J5 = new Array(4);
    var points_K5 = new Array(4);


    // Objets
    var ennemi11 = new Array(4);
    var ennemi12 = new Array(4);
    var ennemi13 = new Array(4);

    var son7 = new Array(4);
    var son8 = new Array(4);
    var son9 = new Array(4);

    // Portails


    //transfert des coordonnées
    $('#ball div').each(function(i) { pointsBall[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#b5 div').each(function(i) { pointsB5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#c5 div').each(function(i) { pointsC5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#e5 div').each(function(i) { pointsE5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#f5 div').each(function(i) { pointsF5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#g5 div').each(function(i) { pointsG5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#h5 div').each(function(i) { pointsH5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#i5 div').each(function(i) { pointsI5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#j5 div').each(function(i) { pointsJ5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#k5 div').each(function(i) { pointsK5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#l5 div').each(function(i) { pointsL5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#m5 div').each(function(i) { pointsM5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#n5 div').each(function(i) { pointsN5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#o5 div').each(function(i) { pointsO5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#p5 div').each(function(i) { pointsP5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#q5 div').each(function(i) { pointsQ5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#r5 div').each(function(i) { pointsR5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#s5 div').each(function(i) { pointsS5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#t5 div').each(function(i) { pointsT5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#u5 div').each(function(i) { pointsU5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#v5 div').each(function(i) { pointsV5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#w5 div').each(function(i) { pointsW5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#x5 div').each(function(i) { pointsX5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#y5 div').each(function(i) { pointsY5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z5 div').each(function(i) { pointsZ5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z1_5 div').each(function(i) { pointsZ1_5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z2_5 div').each(function(i) { pointsZ2_5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#z3_5 div').each(function(i) { pointsZ3_5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    

    $('#_a5 div').each(function(i) { points_A5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_b5 div').each(function(i) { points_B5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_c5 div').each(function(i) { points_C5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_d5 div').each(function(i) { points_D5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_e5 div').each(function(i) { points_E5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_f5 div').each(function(i) { points_F5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_g5 div').each(function(i) { points_G5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_h5 div').each(function(i) { points_H5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_i5 div').each(function(i) { points_I5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_j5 div').each(function(i) { points_J5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#_k5 div').each(function(i) { points_K5[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });

    $('.ennemi11 div').each(function(i) { ennemi11[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('.ennemi12 div').each(function(i) { ennemi12[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('.ennemi13 div').each(function(i) { ennemi13[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });

    $('#son7 div').each(function(i) { son7[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#son8 div').each(function(i) { son8[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });
    $('#son9 div').each(function(i) { son9[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)}; });



    // impossible de passer 
    if (niveau == 5) {
        if (doPolygonsIntersect(pointsB5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsC5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsE5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsG5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsH5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsI5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsJ5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsK5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsL5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsM5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsN5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsO5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsP5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsQ5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsR5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsS5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueBas();
        if (doPolygonsIntersect(pointsT5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsU5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsV5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueDroite();
        if (doPolygonsIntersect(pointsW5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsX5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();
        if (doPolygonsIntersect(pointsY5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsZ5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsZ1_5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueHaut();
        if (doPolygonsIntersect(pointsZ2_5, pointsBall)) if ((sens = "bas") && (delay == true)) bloqueGauche();


        // mort
        if (doPolygonsIntersect(pointsF5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_A5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_B5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_C5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_D5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_E5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_F5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_G5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_H5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_I5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_J5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(points_K5, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi11, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };
        if (doPolygonsIntersect(ennemi12, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };

        if (doPolygonsIntersect(ennemi13, pointsBall)) {
            $("#ball").css("left", 40 + "px");
            $("#ball").css("top", 450 + "px");
            bloqueMort();
        };


        // son
        if (doPolygonsIntersect(son7, pointsBall)) {
            audio.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.play();
            audio8.pause();
            audio9.pause();
            $("#son7").css("display", "none");
            $("#son8").css("display", "");
            monde++;
        };
        if (doPolygonsIntersect(son8, pointsBall)) {
            audio.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.play();
            audio9.pause();
            $("#son8").css("display", "none");
            $("#son9").css("display", "");
            monde++;
        };
        if (doPolygonsIntersect(son9, pointsBall)) {
            audio.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            audio9.play();
            $("#son9").css("display", "none");
            monde++;
        };
        // transition
                if (doPolygonsIntersect(pointsZ3_5, pointsBall) && (monde == 9) && (delay == true)) {
            clearDelay(collision5);
            niveau = 6;
            $('.areagame5').replaceWith('<div id="areaGame5"><div id="bounce"><img src="images/back3.png"></div><div id="ball5"><div class="left-top" rel="yellow"></div><div class="right-top" rel="red"></div><div class="right-bottom" rel="blue"></div><div class="left-bottom" rel="lime"></div><div id="play"><img src="images/play.png"></div></div><div id="coeur"><img src="images/coeur.png"></div></div>');
            $("body").css("background-color", "#9cd0c2");

        } else if (doPolygonsIntersect(pointsZ3_5, pointsBall) && (delay == true)) {
            bloqueDroite();
        };
        
    }
}