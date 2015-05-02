setInterval(directionBoule, 20);
setInterval(avancerBoule, 20);
var keys = {}
var avancer = 8;
var toggle = 1;
var time;
var delay = true;
var niveau = 1;
var audio = document.getElementById('audio_A');
var audio2 = document.getElementById('audio_2');
var audio3 = document.getElementById('audio_3');
var audio4 = document.getElementById('audio_4');
var audio5 = document.getElementById('audio_5');
var audio6 = document.getElementById('audio_6');
var audio7 = document.getElementById('audio_7');
var audio8 = document.getElementById('audio_8');
var audio9 = document.getElementById('audio_9');
var monde = 0;

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function directionBoule() {
    for (var direction in keys) {
        if ((direction == 37) && (delay == true)){
            $("#ball").animate({left: "-=" + avancerBoule()}, 0);             
        }
        if ((direction == 38) && (delay == true)){
            $("#ball").animate({top: "-=" + avancerBoule()}, 0);
        }
        if ((direction == 39) && (delay == true)){
            $("#ball").animate({left: "+=" + avancerBoule()}, 0);  
        }
        if ((direction == 40) && (delay == true)){
            $("#ball").animate({top: "+=" + avancerBoule()}, 0); 
        }
    }
}

function avancerBoule() {
    if (toggle == 1) {
        avancer *= 0.98;
    }
    if ((avancer <= 2) && (toggle == 1)) {
        toggle = 0;
    }
    if (toggle == 0) {
        avancer *= 1.02;
    }
    if ((avancer >= 12) && (toggle == 0)) {
    toggle = 1;
    }
    return avancer;
}

function isUndefined(a) {
    return a === undefined;
}

function doPolygonsIntersect (a, b) {
    var polygons = [a, b];
    var minA, maxA, projected, i, i1, j, minB, maxB;

    for (i = 0; i < polygons.length; i++) {


        var polygon = polygons[i];
        for (i1 = 0; i1 < polygon.length; i1++) {


            var i2 = (i1 + 1) % polygon.length;
            var p1 = polygon[i1];
            var p2 = polygon[i2];


            var normal = { x: p2.y - p1.y, y: p1.x - p2.x };

            minA = maxA = undefined;


            for (j = 0; j < a.length; j++) {
                projected = normal.x * a[j].x + normal.y * a[j].y;
                if (isUndefined(minA) || projected < minA) {
                    minA = projected;
                }
                if (isUndefined(maxA) || projected > maxA) {
                    maxA = projected;
                }
            }

            minB = maxB = undefined;
            for (j = 0; j < b.length; j++) {
                projected = normal.x * b[j].x + normal.y * b[j].y;
                if (isUndefined(minB) || projected < minB) {
                    minB = projected;
                }
                if (isUndefined(maxB) || projected > maxB) {
                    maxB = projected;
                }
            }

            // S'il n'y a pas de collision
            if (maxA < minB || maxB < minA) {
                return false;
            }
        }
    }
    // S'il y a collision
    return true;
}

function bloqueHaut() {
    delay = false;
    sens = "bloqueHaut";
    $("#ball").animate({top: "+=" + 15}, 400);
    time = setInterval(function() {
        delay = true;
        clearDelay(time);
    }, 400);
}

function bloqueBas() {
    delay = false;
    sens = "bloqueBas";
    $("#ball").animate({top: "-=" + 15}, 400);
    time = setInterval(function() {
        delay = true;
        clearDelay(time);
    }, 400);
}

function bloqueGauche() {
    delay = false;
    sens = "bloqueGauche";
    $("#ball").animate({left: "+=" + 15}, 400);
    time = setInterval(function() {
        delay = true;
        clearDelay(time);
    }, 400);
}

function bloqueDroite() {
    delay = false;
    sens = "bloqueDroite";
    $("#ball").animate({left: "-=" + 20}, 400);
    time = setInterval(function() {
        delay = true;
        clearDelay(time);
    }, 400);
}

function bloqueMort() {
    delay = false;
    sens = "droite";
    time = setInterval(function() {
        delay = true;
        clearDelay(time);
    }, 500);
}

function clearDelay(a) {
    clearInterval(a);
}
