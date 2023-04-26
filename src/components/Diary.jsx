import React, {useState} from "react";

const Diary = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!
  const handleClick1= () =>{
    alert(`제목= ${subject} \n내용= ${content}`)//제목과 내용을 출력
  };

  const handleClick2= () =>{
    setSubject("")
    setContent("")
    //placeholder = "제목을 입력해주세요"//초기화

  };

  const[subject, setSubject] = useState("");
  const[content, setContent] = useState("");
  
  const handleSubject = (e) => { //입력한 제목과 내용을 alert로 출력
    setSubject(e.target.value);
  };

  const handleContent = (t) => { //입력한 제목과 내용을 alert로 출력
    setContent(t.target.value);
  };

  return (
    <div className="diary">
      <input name="subject" placeholder="제목을 입력해주세요" onChange={handleSubject} value={subject}/>
      <br />
      <textarea name="content" placeholder="내용을 입력해주세요" onChange={handleContent} value={content}/>
      <br />
      <button onClick={handleClick2}>초기화</button>
      <br />
      <button onClick={handleClick1}>입력 완료</button>
    
    </div>
  );
};

export default Diary;
