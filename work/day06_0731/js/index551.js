
for (i = 1; i <= 54; i++) {
    if (i < 49){
        document.writeln(`<div class="box">좌석 ${i}</div>`)
    }
    else if (i === 49){
        document.writeln(`<div id="box49">좌석 ${i}</div>`)
    }
    else if (i > 49){
        document.writeln(`<div class="box49up"></div>`)
    }
}

