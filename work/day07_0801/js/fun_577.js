// 즉시 실행 함수 예제1

(function() {
    let userName = prompt("이름을 입력하세요.")
    // document.writeln(`<p>안녕하세요? <span class=""accent>${userName}</span>님!</p>`)
    console.log(`${userName}님! 안녕하세요!`)
}()
);

// 예제2

(function(a, b) {
    sum = a + b;
}(100, 200)
)
// document.writeln(`함수 실행 결과 : ${sum}`);
console.log(`값은 : ${sum}`)
