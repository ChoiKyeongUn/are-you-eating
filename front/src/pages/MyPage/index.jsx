import { useState } from "react";
import useInput from "../../hooks/useInput";
import { useHistory } from "react-router";
import { Icon } from '@iconify/react';
import {

  MyInfoBox,
  MyReviewBox,
  MyInfoLeft,
  MyInfoRight,
  MyReview

} from "./style";


export default function LogIn() {
  const id = useInput("");
  const password = useInput("");
  const history = useHistory();
 
  const [modifyMode, setModifyMode] = useState(false);

//   function passwordValidator(value) {
//     if (value.length < 8 || value.length > 30) {
//       return {
//         isValid: false,
//         errorMessage: "8글자 이상 30글자 이하로 입력해주세요",
//       };
//     } else {
//       return {
//         isValid: true,
//         errorMessage: "",
//       };
//     }
//   }

//   function idValidator(value) {
//     if (value.length < 4 || value.length > 15) {
//       return {
//         isValid: false,
//         errorMessage: "4글자 이상 15글자 이하로 입력해주세요",
//       };
//     } else {
//       return {
//         isValid: true,
//         errorMessage: "",
//       };
//     }
//   }
  return (
<div>
      <MyInfoBox>
          <MyInfoLeft>
              <img src="https://media.istockphoto.com/vectors/user-icon-member-sign-avatar-button-flat-style-vector-id654224782?k=20&m=654224782&s=170667a&w=0&h=FdOgLWb-Bs0WtMvaolThVA9Mw_iwkPrn2dJSjdzllj8=" alt="" srcset="">
              </img>
  
        </MyInfoLeft>
          <MyInfoRight>
            <table>
                <tr>
                   
                    <td colSpan = '2'><h1>변대웅</h1></td>
                    <td> <Icon icon="fxemoji:chicken" width="30px" height="30px"/></td>
                </tr>   
                <tr>

                        <td className="info">아이디</td>
                        <td></td>
                        <td></td>
                        <td>dwbyun16</td>


                </tr>
                <tr>
                
                        <td  className="info">생년월일</td>
                        <td></td>
                        <td></td>
                        <td>1996년 5월 3일</td>
                
                </tr>
                <tr>

                        <td  className="info">주소</td>
                        <td></td>
                        <td></td>
                        <td>대전광역시 유성구 덕명동</td>

                </tr>
            </table>

            <button
             onClick={() => {
               
              }}
            >프로필 수정</button>
            </MyInfoRight>
      </MyInfoBox>
      <br/>
      <br/>
      <br/>
      <MyReviewBox>
          <h2>리뷰(30)</h2>
          <MyReview>
              <div className="user">
               <div className="left">
               <img width ="90px" height="80px" src="https://media.istockphoto.com/vectors/user-icon-member-sign-avatar-button-flat-style-vector-id654224782?k=20&m=654224782&s=170667a&w=0&h=FdOgLWb-Bs0WtMvaolThVA9Mw_iwkPrn2dJSjdzllj8=" alt="" srcset="">
              </img>   
                   </div>
                   <div className="right">
                        <div className="username">변대웅</div>
                        <div className="rsetaurant">롯데리아</div>
                        <div>
                            <span><Icon icon="noto:cooked-rice" width="20px" height="20px" />
                            <Icon icon="noto:cooked-rice" width="20px" height="20px" />
                            <Icon icon="noto:cooked-rice" width="20px" height="20px" />
                            <Icon icon="noto:cooked-rice" width="20px" height="20px"/>
                            <Icon icon="noto:cooked-rice" width="20px" height="20px"/></span>
                            <span className="date">2021-09-13</span>
                            </div>
                   </div>
              </div>
              <br></br>
              <div className="pictures">
                    <div>
                        1
                    </div>
                    <div>
                        2
                    </div>
                    <div>
                        3
                    </div>
                    <div>
                        4
                    </div>
                    <div>
                        5
                    </div>
                </div>
                <br></br>
                <div className="review">
                                    오늘은 급 햄버거가 땡긴 우미당이 롯데리아에 다녀온 후기를 써볼까 합니당.! 9시 넘어서 찾아간 롯데리아.
                    제가 찾아간 롯데리아는 한밭대점인데, 1층과 2층을 모두 사용하고 있는 규모가 큰~ 롯데리아에요 ㅋ
                    5월 26일부터 28일까지!! 단 3일간! 데리버거 두개에 3,900원이니!! 늦지말고 꼭 가셔요 ㅎ
                    (참고로 데리버거 하나 가격은 3,500원 입니당.!)
                    하지만! 오늘 우미당이 먹어볼 햄버거는!?
                    오호.. 치즈 No.5 세트로 시키면 치즈스틱이 공짜!!!.

                <button
                 onClick={() => {
               
                }}
                >
                ...더보기
                </button>
              </div>
 
          </MyReview>
      </MyReviewBox>
</div>
  );
}
