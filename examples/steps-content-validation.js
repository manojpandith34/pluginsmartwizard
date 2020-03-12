$(document).ready(function () {
    $("#Oname").keyup(function () {
        var orgname = $("#Oname").val();
        var orgNameExp = /^[A-za-z]{0,3}[.]{0,1}[A-za-z]{2,30}[\s]{0,1}[a-zA-z]{2,30}$/;

        console.log("===============");
        if (orgname.trim() === '') {
            console.log("crrxxrr");
            //document.getElementById("usernameerr").innerHTML = "Please enter name";
            $("#orgnameerr").html("please fill name");
            $(this).css("background-color", "red");
            // event.preventDefault();

        }

        else if (!orgname.trim().match(orgNameExp)) {
            console.log("errrrrr");
            $("#orgnameerr").html("please enter in correct form");
            $(this).css("background-color", "red");
            // event.preventDefault();

        }
        else {
            $("#orgnameerr").html("");
            $(this).css("background-color", "green");
        }
    })
})

$(document).ready(function () {
    $("#Odescription").keyup(function () {
        var orgdescription = $("#Odescription").val();
        var orgdescriptionEXP = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s"'/%~`()]{50,200}$/;

        console.log("===============");
        if (orgdescription.trim() === '') {
            console.log("crrxxrr");
            //document.getElementById("usernameerr").innerHTML = "Please enter name";
            $("#orgdescriptionerr").html("please fill name");
            $(this).css("background-color", "red");

        }

        else if (!orgdescription.trim().match(orgdescriptionEXP)) {
            console.log("errrrrr");
            $("#orgdescriptionerr").html("please enter in correct form");
            $(this).css("background-color", "red");


        }
        else {
            $("#orgdescriptionerr").html("");
            $(this).css("background-color", "green");
        }
    })
})

function readURL(input) {
    var fileInput = document.getElementById("filechoose");
    var filepath = fileInput.value;
    var fileExp = /\.(jpe?g|png|gif|bmp)$/i;
    if (!fileExp.exec(filepath)) {
        document.getElementById("imageerr").innerHTML = "please choose correct formate file"
    }
    else {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#logoimage').attr('src', e.target.result);
                document.getElementById("imageerr").innerHTML = "";
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
}

$("#filechoose").change(function () {
    readURL(this);
});

/* second page validation */

$(document).ready(function () {
    $("#myBtn").click(function () {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    })
});
$(".close").click(function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});

$("#submitButton").click(function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});


var selectedRow = null;

/*function sumbitfunction() {
    if (selectedRow == null) {
        addfunction();
        refresh();
    }
    else {
        update()
        refresh();
    }
}

function addfunction() {
    const temp = document.getElementById("mytabletemplaterow");
    const tabletemplete = temp.content;

    const td = tabletemplete.querySelectorAll("td");
    td[0].innerHTML = document.getElementById("pagenumber").value;
    td[1].innerHTML = document.getElementById("pagetext").value;
    const nodeElement = tabletemplete.cloneNode(true);


    document.getElementById("mytable").appendChild(nodeElement);
}  

function readFormData() {
    var formData = {};
    formData["pagenumber"] = document.getElementById("pagenumber").value;
    formData["pagetext"] = document.getElementById("pagetext").value;
}

function refresh() {
    document.getElementById("pagenumber").value = "";
    document.getElementById("pagetext").value = "";
}

function editRow(td) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    selectedRow = td.parentElement.parentElement;
    console.log("666666", selectedRow);
    var x = document.getElementById("pn").innerHTML;
    document.getElementById("pagenumber").value = x;
    var y = document.getElementById("pd").innerHTML;
    document.getElementById("pagetext").value = y;

}

function update() {
    selectedRow.cells[0].innerHTML = document.getElementById("pagenumber").value;
    selectedRow.cells[1].innerHTML = document.getElementById("pagetext").value;
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("usertable").deleteRow(i);
}

$(document).ready(function () {
    $("#pagenumber").keyup(function () {
        var pageno = $("#pagenumber").val();
        var pageNumberExp = /^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/;

        console.log("===============");
        if (pageno.trim() === '') {
            console.log("crrxxrr");
            //document.getElementById("usernameerr").innerHTML = "Please enter name";
            $("#pagenumbererror").html("please enter number");
            $(this).css("background-color", "red");
            document.getElementById("submitButton").disabled = true;

        }

        else if (!pageno.trim().match(pageNumberExp)) {
            console.log("errrrrr");
            $("#pagenumbererror").html("please enter in correct form");
            $(this).css("background-color", "red");
            document.getElementById("submitButton").disabled = true;

        }
        else {
            $("#pagenumbererror").html("");
            $(this).css("background-color", "green");
            document.getElementById("submitButton").disabled = false;
        }
    })
})

$(document).ready(function () {
    $("#pagetext").keyup(function () {
        var pagedescription = $("#pagetext").val();
        var pagedescriptionEXP = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s"'/%~`()]{50,200}$/;

        console.log("===============");
        if (pagedescription.trim() === '') {
            console.log("crrxxrr");
            //document.getElementById("usernameerr").innerHTML = "Please enter name";
            $("#pagedescriptionerror").html("please fill name");
            $(this).css("background-color", "red");
            document.getElementById("submitButton").disabled = true;

        }

        else if (!pagedescription.trim().match(pagedescriptionEXP)) {
            console.log("errrrrr");
            $("#pagedescriptionerror").html("please enter in correct form");
            $(this).css("background-color", "red");
            document.getElementById("submitButton").disabled = true;

        }
        else {
            $("#pagedescriptionerror").html("");
            $(this).css("background-color", "green");
            document.getElementById("submitButton").disabled = false;
        }
    })
})
   */
$(document).ready(function () {
    $("#pic-1").click(function () {
        $('#pic-1').toggleClass('setOpacity1');
        $("#tick-Symbol1").toggle();

    });
    $("#pic-2").click(function () {
        $('#pic-2').toggleClass('setOpacity2');
        $("#tick-Symbol2").toggle();

    });
    $("#pic-3").click(function () {
        $('#pic-3').toggleClass('setOpacity3');
        $("#tick-Symbol3").toggle();

    });
    $("#pic-4").click(function () {
        $('#pic-4').toggleClass('setOpacity4');
        $("#tick-Symbol4").toggle();

    });
    $("#pic-5").click(function () {
        $('#pic-5').toggleClass('setOpacity5');
        $("#tick-Symbol5").toggle();

    });
    $("#pic-6").click(function () {
        $('#pic-6').toggleClass('setOpacity6');
        $("#tick-Symbol6").toggle();

    });
    $("#pic-7").click(function () {
        $('#pic-7').toggleClass('setOpacity7');
        $("#tick-Symbol7").toggle();

    });
    $("#pic-8").click(function () {
        $('#pic-8').toggleClass('setOpacity8');
        $("#tick-Symbol8").toggle();

    });
});

// ckeditor-------------------------------------------------------
if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
    CKEDITOR.tools.enableHtml5Elements(document);

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 250;
CKEDITOR.config.width = 650;
CKEDITOR.config.margin = 20;
var initSample = (function () {
    console.log('init-----')
    var wysiwygareaAvailable = isWysiwygareaAvailable(),
        isBBCodeBuiltIn = !!CKEDITOR.plugins.get('bbcode');

    return function () {
        var editorElement = CKEDITOR.document.getById('cskeditor');
        console.log('editorElement', editorElement)

        // :(((
        if (isBBCodeBuiltIn) {
            editorElement.setHtml(
                'Hello world!\n\n' +
                '.'
            );
        }

        // Depending on the wysiwygarea plugin availability initialize classic or inline editor.
        if (wysiwygareaAvailable) {
            CKEDITOR.replace('cskeditor');
        } else {
            editorElement.setAttribute('contenteditable', 'true');
            CKEDITOR.inline('cskeditor');

            // TODO we can consider displaying some info box that
            // without wysiwygarea the classic editor may not work.
        }
    };

    function isWysiwygareaAvailable() {
        // If in development mode, then the wysiwygarea must be available.
        // Split REV into two strings so builder does not replace it :D.
        if (CKEDITOR.revision == ('%RE' + 'V%')) {
            return true;
        }

        return !!CKEDITOR.plugins.get('wysiwygarea');
    }
})();
$(document).ready(function () {
    $("#submitButton").click(function () {
        content = CKEDITOR.instances.cskeditor.getData();
        // content = CKEDITOR.instances.cskeditor.getElementById('editor')
        console.log(content);
        document.getElementById("textarea").innerHTML = content;
    })
})





//end of ck editor------------------------------------------------

/*external button valiadation */


// var nextbutton = document.getElementById("next-btn");


// $(document).ready(function () {
//     console.log("hello")
//     $("#next-btn").click(function () {
//         console.log("-----")
//         var orgname = $("#Oname").val();
//         var orgNameExp = /^[A-za-z]{0,3}[.]{0,1}[A-za-z]{2,30}[\s]{0,1}[a-zA-z]{2,30}$/;

//         if (orgname === '' || !orgname.trim().match(orgNameExp)) {
//             console.log("inside")
//             event.preventDefault();
//         }
//     })
// });