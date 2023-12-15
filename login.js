const id = document.getElementById("id")
const pw = document.getElementById("password")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
var id_list = []

let pwRule = new RegExp('(?=.*[a-z])(?=.*[0-9])(?=.{5,})')

function submitHandler(event){
    event.preventDefault();
    const edit_id = id.value;
    const edit_pw = pw.value;
    //아이디 중복 확인
    if(idTest(edit_id)){
        //비밀번호 규칙 확인
        if(pwTest(edit_pw)){
            alert("로그인 되셨습니다.")
        }else{
            alert("비밀번호는 5자리 이상, 숫자 1개, 소문자 1개를 포함해야 합니다")
        }
    }else{
        alert("중복된 아이디 입니다. 다른 아이디로 설정해주세요")
    }
}

function idTest(str){
    if(id_list.includes(str)){
        return false
    }else{
        id_list.push(str)
        return true
    }
}

function pwTest(str){
    //1. 번호 한 개 이상
    //2. 영어 소문자 1개 이상
    //3. 5자리 이상
    if(pwRule.test(str)){
        return true
    }else{
        return false
    }
}

form.addEventListener("submit", submitHandler)