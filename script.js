// $("#green").hover(function () {
//     $("#texte").css("color", "green");
// });

// $("#red").hover(function () {
//     $("#texte").css("color", "red");
// });

// $("#blue").hover(function () {
//     $("#texte").css("color", "blue");
// });

$(document).ready(function () {
    $("#green").hover(function () {
        $("#texte").addClass("hover1");
    },
        function () {
            $("#texte").removeClass("hover1");
        });
    });
    $(document).ready(function () {
        $("#red").hover(function () {
            $("#texte").addClass("hover2");
        },
            function () {
                $("#texte").removeClass("hover2");
            });
        });

        $(document).ready(function () {
            $("#blue").hover(function () {
                $("#texte").addClass("hover3");
            },
                function () {
                    $("#texte").removeClass("hover3");
                });
            });
